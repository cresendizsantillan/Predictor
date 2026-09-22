/* ================================================================
   LOBO PICKS PREDICTOR — Dashboard Rendering Engine
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const D = dashboardData;

    // ── Navigation ──
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`section-${tab.dataset.section}`).classList.add('active');
        });
    });

    // ── Header badges ──
    if (D.metadata) {
        document.getElementById('header-subtitle').textContent =
            `Premier League · Matchweek ${D.metadata.matchweek || 6} · ${D.metadata.matchweek_dates || ''}`;
        document.getElementById('badge-halflife').textContent = `Half-life: ${D.metadata.halflife_days || 180} días`;
        document.getElementById('badge-matches').textContent = `${D.metadata.matches_count} partidos`;
    }

    renderKPIs();
    render1x2Bars();
    renderGlobalDonut();
    renderLambdas();
    renderSummaryTable();
    renderMatchCards();
    renderHeatmapSection();
    renderLeagueSection();
});

// ── Chart.js Global Defaults ──
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = 'rgba(99, 102, 241, 0.08)';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyleWidth = 12;

const COLORS = {
    home: '#818cf8',
    homeBg: 'rgba(129, 140, 248, 0.25)',
    draw: '#94a3b8',
    drawBg: 'rgba(148, 163, 184, 0.2)',
    away: '#f87171',
    awayBg: 'rgba(248, 113, 113, 0.2)',
    green: '#34d399',
    greenBg: 'rgba(52, 211, 153, 0.2)',
    amber: '#fbbf24',
    amberBg: 'rgba(251, 191, 36, 0.2)',
    cyan: '#22d3ee',
    purple: '#c084fc',
    accent: '#a5b4fc',
};

// ══════════════════════════════════════════════
//  KPI Cards
// ══════════════════════════════════════════════
function renderKPIs() {
    const D = dashboardData;
    const matches = D.matches;

    const homeWins = matches.filter(m => m.probabilities.home_win > m.probabilities.away_win && m.probabilities.home_win > m.probabilities.draw).length;
    const draws = matches.filter(m => m.probabilities.draw > m.probabilities.home_win && m.probabilities.draw > m.probabilities.away_win).length;
    const awayWins = matches.length - homeWins - draws;

    const avgLambdaH = (matches.reduce((s, m) => s + m.lambdas.home, 0) / matches.length).toFixed(2);
    const avgLambdaA = (matches.reduce((s, m) => s + m.lambdas.away, 0) / matches.length).toFixed(2);

    const maxConf = matches.reduce((best, m) => {
        const maxP = Math.max(m.probabilities.home_win, m.probabilities.draw, m.probabilities.away_win);
        return maxP > best.val ? { val: maxP, label: `${m.home.split(' ').pop()} v ${m.away.split(' ').pop()}` } : best;
    }, { val: 0, label: '' });

    const container = document.getElementById('kpi-row');
    const kpis = [
        { label: 'Victorias Locales', value: homeWins, sub: `de ${matches.length} partidos`, cls: 'kpi-accent', desc: '<strong>Predicción XGBoost</strong>Partidos donde el modelo asigna la mayor probabilidad a la victoria del equipo local.' },
        { label: 'Empates', value: draws, sub: `predichos por XGBoost`, cls: 'kpi-amber', desc: '<strong>Predicción XGBoost</strong>Partidos donde el empate es el escenario estadísticamente más probable.' },
        { label: 'Victorias Visitante', value: awayWins, sub: `de ${matches.length} partidos`, cls: 'kpi-cyan', desc: '<strong>Predicción XGBoost</strong>Partidos donde la victoria visitante domina la distribución de probabilidad.' },
        { label: 'λ Promedio (H / A)', value: `${avgLambdaH}`, sub: `Home ${avgLambdaH} · Away ${avgLambdaA}`, cls: 'kpi-green', desc: '<strong>Intensidad Global</strong>El promedio de goles esperados generados por Dixon-Coles en toda la jornada. Si H > A, la localía pesa mucho.' },
        { label: 'Mayor Confianza', value: `${maxConf.val.toFixed(0)}%`, sub: maxConf.label, cls: 'kpi-accent', desc: '<strong>Pick más Seguro</strong>El partido con el mayor margen de probabilidad para un solo resultado.' },
    ];

    container.innerHTML = kpis.map(k => `
        <div class="kpi-card ${k.cls}">
            <div class="kpi-label">${k.label} <span class="info-tooltip">ⓘ<span class="tooltip-text">${k.desc}</span></span></div>
            <div class="kpi-value">${k.value}</div>
            <div class="kpi-sub">${k.sub}</div>
        </div>
    `).join('');
}

// ══════════════════════════════════════════════
//  1X2 Stacked Bar Chart
// ══════════════════════════════════════════════
function render1x2Bars() {
    const matches = dashboardData.matches;
    const labels = matches.map(m => `${abbrev(m.home)} v ${abbrev(m.away)}`);

    new Chart(document.getElementById('chart-1x2-bars'), {
        type: 'bar',
        data: {
            labels,
            datasets: [
                { label: 'Local (1)', data: matches.map(m => m.probabilities.home_win), backgroundColor: COLORS.home, borderRadius: 4 },
                { label: 'Empate (X)', data: matches.map(m => m.probabilities.draw), backgroundColor: COLORS.draw, borderRadius: 4 },
                { label: 'Visitante (2)', data: matches.map(m => m.probabilities.away_win), backgroundColor: COLORS.away, borderRadius: 4 },
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true, max: 100, ticks: { callback: v => v + '%' }, grid: { color: 'rgba(99,102,241,0.05)' } },
                y: { stacked: true, grid: { display: false }, ticks: { font: { weight: '600', size: 11 } } }
            },
            plugins: {
                tooltip: {
                    callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.raw.toFixed(1)}%` }
                },
                legend: { position: 'top' }
            }
        }
    });
}

// ══════════════════════════════════════════════
//  Global Donut
// ══════════════════════════════════════════════
function renderGlobalDonut() {
    const matches = dashboardData.matches;
    const avgH = avg(matches.map(m => m.probabilities.home_win));
    const avgD = avg(matches.map(m => m.probabilities.draw));
    const avgA = avg(matches.map(m => m.probabilities.away_win));

    new Chart(document.getElementById('chart-global-donut'), {
        type: 'doughnut',
        data: {
            labels: ['Local (1)', 'Empate (X)', 'Visitante (2)'],
            datasets: [{
                data: [avgH, avgD, avgA],
                backgroundColor: [COLORS.home, COLORS.draw, COLORS.away],
                borderWidth: 0,
                hoverOffset: 8,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '62%',
            plugins: {
                legend: { position: 'bottom', labels: { padding: 16 } },
                tooltip: { callbacks: { label: ctx => `${ctx.label}: ${ctx.raw.toFixed(1)}%` } }
            }
        }
    });
}

// ══════════════════════════════════════════════
//  Lambda Bar Chart
// ══════════════════════════════════════════════
function renderLambdas() {
    const matches = dashboardData.matches;
    const labels = matches.map(m => `${abbrev(m.home)} v ${abbrev(m.away)}`);

    new Chart(document.getElementById('chart-lambdas'), {
        type: 'bar',
        data: {
            labels,
            datasets: [
                {
                    label: 'λ Local',
                    data: matches.map(m => m.lambdas.home),
                    backgroundColor: COLORS.homeBg,
                    borderColor: COLORS.home,
                    borderWidth: 1.5,
                    borderRadius: 6,
                },
                {
                    label: 'λ Visitante',
                    data: matches.map(m => m.lambdas.away),
                    backgroundColor: COLORS.awayBg,
                    borderColor: COLORS.away,
                    borderWidth: 1.5,
                    borderRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, title: { display: true, text: 'Goles Esperados (λ)', font: { size: 11 } }, grid: { color: 'rgba(99,102,241,0.05)' } },
                x: { grid: { display: false }, ticks: { font: { size: 10, weight: '600' } } }
            },
            plugins: {
                tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.raw.toFixed(2)}` } },
                legend: { position: 'top' }
            }
        }
    });
}

// ══════════════════════════════════════════════
//  Summary Table
// ══════════════════════════════════════════════
function renderSummaryTable() {
    const tbody = document.getElementById('summary-tbody');
    const matches = dashboardData.matches;

    tbody.innerHTML = matches.map((m, i) => {
        const p = m.probabilities;
        const best = getBest(p);
        const maxProb = best.val;

        return `<tr>
            <td>${i + 1}</td>
            <td class="cell-team">${m.home} vs ${m.away}</td>
            <td><span class="${p.home_win === maxProb ? 'cell-highlight' : ''}">${p.home_win.toFixed(1)}</span></td>
            <td><span class="${p.draw === maxProb ? 'cell-highlight' : ''}">${p.draw.toFixed(1)}</span></td>
            <td><span class="${p.away_win === maxProb ? 'cell-highlight' : ''}">${p.away_win.toFixed(1)}</span></td>
            <td class="cell-highlight">${m.exact_score.score} (${m.exact_score.probability}%)</td>
            <td>${m.lambdas.home.toFixed(2)}</td>
            <td>${m.lambdas.away.toFixed(2)}</td>
            <td><strong>${best.key}</strong></td>
        </tr>`;
    }).join('');
}

// ══════════════════════════════════════════════
//  Match Cards (Full Detail)
// ══════════════════════════════════════════════
function renderMatchCards() {
    const container = document.getElementById('match-cards-container');
    const matches = dashboardData.matches;

    container.innerHTML = matches.map((m, i) => {
        const p = m.probabilities;
        const best = getBest(p);

        return `
        <div class="match-card">
            <div class="match-card-header">
                <div class="match-teams">
                    <span>${m.home}</span>
                    <span class="match-vs">vs</span>
                    <span>${m.away}</span>
                </div>
                <span class="match-number">Partido ${i + 1}</span>
            </div>

            <div class="match-body">
                <div class="match-probs-section">
                    <h4>Probabilidades 1X2 <span class="info-tooltip" style="font-size:0.8rem; margin-left:0;">ⓘ<span class="tooltip-text" style="font-weight:400; text-transform:none; font-family:var(--font-main);"><strong>Modelo XGBoost</strong>Calibración basada en fuerzas estructurales (λ) y métricas de campo (tiros, córners, expulsiones).</span></span></h4>
                    ${probRow('Local (1)', p.home_win, 'home')}
                    ${probRow('Empate (X)', p.draw, 'draw')}
                    ${probRow('Visita (2)', p.away_win, 'away')}

                    <div class="lambda-pills">
                        <span class="lambda-pill">λ ${abbrev(m.home)} = ${m.lambdas.home}</span>
                        <span class="lambda-pill">λ ${abbrev(m.away)} = ${m.lambdas.away}</span>
                    </div>
                </div>

                <div class="match-score-section">
                    <h4>Marcador Exacto <span class="info-tooltip" style="font-size:0.8rem; margin-left:0;">ⓘ<span class="tooltip-text" style="font-weight:400; text-transform:none; font-family:var(--font-main);"><strong>Modelo de Poisson</strong>El cruce bivariado más probable dadas las intensidades ofensivas y defensivas de ambos equipos.</span></span></h4>
                    <div class="score-chip">
                        <span class="score-chip-value">${m.exact_score.score}</span>
                        <span class="score-chip-prob">${m.exact_score.probability}%</span>
                    </div>

                    <ul class="top3-list">
                        ${m.top3_scores.map((s, j) => `<li><span>${j + 1}. ${s.score}</span><span>${s.probability}%</span></li>`).join('')}
                    </ul>
                </div>

                <div class="match-analysis">
                    ${formatAnalysis(m.analysis)}
                </div>
            </div>
        </div>`;
    }).join('');
}

function probRow(label, value, type) {
    return `
    <div class="prob-row">
        <span class="prob-label">${label}</span>
        <div class="prob-track"><div class="prob-fill prob-fill-${type}" style="width:${value}%"></div></div>
        <span class="prob-value">${value.toFixed(1)}%</span>
    </div>`;
}

// ══════════════════════════════════════════════
//  Heatmap Section
// ══════════════════════════════════════════════
let top3Chart = null;

function renderHeatmapSection() {
    const select = document.getElementById('heatmap-match-select');
    const matches = dashboardData.matches;

    select.innerHTML = matches.map((m, i) =>
        `<option value="${i}">${i + 1}. ${m.home} vs ${m.away}</option>`
    ).join('');

    select.addEventListener('change', () => renderHeatmap(parseInt(select.value)));
    renderHeatmap(0);
}

function renderHeatmap(idx) {
    const m = dashboardData.matches[idx];
    const matrix = m.poisson_matrix;

    document.getElementById('heatmap-title').textContent = `${m.home} vs ${m.away}`;

    // Build HTML table
    const container = document.getElementById('poisson-heatmap');
    let maxVal = 0;
    if (matrix) {
        matrix.forEach(row => row.forEach(v => { if (v > maxVal) maxVal = v; }));
    }

    let html = '<table class="heatmap-table"><thead><tr><th class="heatmap-corner"></th>';
    for (let j = 0; j <= 6; j++) html += `<th class="heatmap-col-header">${j}</th>`;
    html += '</tr></thead><tbody>';

    for (let i = 0; i <= 6; i++) {
        html += `<tr><th class="heatmap-row-header">${i}</th>`;
        for (let j = 0; j <= 6; j++) {
            const val = matrix ? matrix[i][j] : 0;
            const intensity = maxVal > 0 ? val / maxVal : 0;
            const bg = heatColor(intensity);
            const textColor = intensity > 0.55 ? '#0a0e1a' : '#e2e8f0';
            html += `<td class="heatmap-cell" style="background:${bg};color:${textColor}" title="${i}-${j}: ${val}%">${val.toFixed(1)}%</td>`;
        }
        html += '</tr>';
    }
    html += '</tbody></table>';

    // Axis labels
    html += `<div style="text-align:center;margin-top:0.6rem;">
        <span style="font-size:0.72rem;color:var(--accent);font-weight:700;">↓ Goles ${m.home}</span>
        <span style="font-size:0.72rem;color:var(--text-muted);margin:0 0.5rem;">·</span>
        <span style="font-size:0.72rem;color:var(--red);font-weight:700;">→ Goles ${m.away}</span>
    </div>`;

    container.innerHTML = html;

    // Top 3 donut
    const canvas = document.getElementById('chart-top3-scores');
    if (top3Chart) top3Chart.destroy();

    const top3 = m.top3_scores || [];
    const otherProb = Math.max(0, 100 - top3.reduce((s, t) => s + t.probability, 0));

    top3Chart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: [...top3.map(s => s.score), 'Otros'],
            datasets: [{
                data: [...top3.map(s => s.probability), otherProb.toFixed(1)],
                backgroundColor: [COLORS.home, COLORS.amber, COLORS.cyan, 'rgba(100,116,139,0.2)'],
                borderWidth: 0,
                hoverOffset: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            plugins: {
                legend: { position: 'bottom', labels: { padding: 12 } },
                tooltip: { callbacks: { label: ctx => `${ctx.label}: ${ctx.raw}%` } }
            }
        }
    });

    // Analysis box
    document.getElementById('heatmap-analysis').innerHTML = `<strong>Análisis:</strong> ${formatAnalysis(m.analysis)}`;
}

function heatColor(intensity) {
    // Deep indigo → vibrant yellow
    const r = Math.round(30 + intensity * 221);
    const g = Math.round(27 + intensity * 164);
    const b = Math.round(129 - intensity * 93);
    return `rgb(${r}, ${g}, ${b})`;
}

// ══════════════════════════════════════════════
//  League Section
// ══════════════════════════════════════════════
function renderLeagueSection() {
    const metrics = dashboardData.team_metrics;
    if (!metrics) return;

    const teams = Object.entries(metrics).sort((a, b) => b[1].ppg - a[1].ppg);

    renderPowerRanking(teams);
    renderXGScatter(teams);
    renderLeagueTable(teams);
    renderWDLStacked(teams);
}

function renderPowerRanking(teams) {
    const labels = teams.map(([name]) => name);
    const data = teams.map(([, m]) => m.ppg);

    const colors = data.map(v => {
        if (v >= 2.0) return COLORS.green;
        if (v >= 1.5) return COLORS.accent;
        if (v >= 1.0) return COLORS.amber;
        return COLORS.away;
    });

    new Chart(document.getElementById('chart-power-ranking'), {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'PPG (EWMA)',
                data,
                backgroundColor: colors.map(c => c + '40'),
                borderColor: colors,
                borderWidth: 1.5,
                borderRadius: 6,
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { beginAtZero: true, max: 3.2, title: { display: true, text: 'Puntos por Partido (PPG)' }, grid: { color: 'rgba(99,102,241,0.05)' } },
                y: { grid: { display: false }, ticks: { font: { weight: '600', size: 10 } } }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: ctx => `PPG: ${ctx.raw.toFixed(2)}` } }
            }
        }
    });
}

function renderXGScatter(teams) {
    const points = teams.map(([name, m]) => ({
        x: m.xg_per90,
        y: m.xga_per90,
        label: name,
    }));

    new Chart(document.getElementById('chart-xg-scatter'), {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Equipos',
                data: points,
                backgroundColor: COLORS.homeBg,
                borderColor: COLORS.home,
                borderWidth: 1.5,
                pointRadius: 7,
                pointHoverRadius: 10,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: 'xG Ofensivo (por partido)', font: { size: 11 } },
                    grid: { color: 'rgba(99,102,241,0.05)' }
                },
                y: {
                    title: { display: true, text: 'xGA Defensivo (por partido)', font: { size: 11 } },
                    reverse: true,
                    grid: { color: 'rgba(99,102,241,0.05)' }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const p = ctx.raw;
                            return `${p.label}: xG=${p.x.toFixed(2)}, xGA=${p.y.toFixed(2)}`;
                        }
                    }
                },
                legend: { display: false }
            }
        }
    });
}

function renderLeagueTable(teams) {
    const tbody = document.getElementById('league-tbody');
    tbody.innerHTML = teams.map(([name, m], i) => {
        const diffCls = m.xg_diff > 0 ? 'cell-positive' : m.xg_diff < 0 ? 'cell-negative' : 'cell-neutral';
        const diffSign = m.xg_diff > 0 ? '+' : '';
        return `<tr>
            <td>${i + 1}</td>
            <td class="cell-team">${name}</td>
            <td class="cell-highlight">${m.ppg.toFixed(2)}</td>
            <td>${m.xg_per90.toFixed(2)}</td>
            <td>${m.xga_per90.toFixed(2)}</td>
            <td class="${diffCls}">${diffSign}${m.xg_diff.toFixed(2)}</td>
            <td class="text-green">${m.win_rate.toFixed(1)}%</td>
            <td class="text-amber">${m.draw_rate.toFixed(1)}%</td>
            <td class="text-red">${m.loss_rate.toFixed(1)}%</td>
            <td>${m.total_matches}</td>
        </tr>`;
    }).join('');
}

function renderWDLStacked(teams) {
    const labels = teams.map(([name]) => abbrev(name));

    new Chart(document.getElementById('chart-wdl-stacked'), {
        type: 'bar',
        data: {
            labels,
            datasets: [
                { label: 'Win %', data: teams.map(([, m]) => m.win_rate), backgroundColor: COLORS.greenBg, borderColor: COLORS.green, borderWidth: 1, borderRadius: 3 },
                { label: 'Draw %', data: teams.map(([, m]) => m.draw_rate), backgroundColor: COLORS.amberBg, borderColor: COLORS.amber, borderWidth: 1, borderRadius: 3 },
                { label: 'Loss %', data: teams.map(([, m]) => m.loss_rate), backgroundColor: COLORS.awayBg, borderColor: COLORS.away, borderWidth: 1, borderRadius: 3 },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true, grid: { display: false }, ticks: { font: { size: 9, weight: '600' } } },
                y: { stacked: true, max: 100, ticks: { callback: v => v + '%' }, grid: { color: 'rgba(99,102,241,0.05)' } }
            },
            plugins: {
                tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.raw.toFixed(1)}%` } },
                legend: { position: 'top' }
            }
        }
    });
}

// ══════════════════════════════════════════════
//  Utilities
// ══════════════════════════════════════════════
function abbrev(name) {
    const map = {
        'Manchester City': 'MCI', 'Manchester United': 'MUN', 'Arsenal': 'ARS',
        'Chelsea': 'CHE', 'Liverpool': 'LIV', 'Tottenham Hotspur': 'TOT',
        'Newcastle United': 'NEW', 'Brighton': 'BHA', 'Aston Villa': 'AVL',
        'Crystal Palace': 'CRY', 'Brentford': 'BRE', 'Fulham': 'FUL',
        'Bournemouth': 'BOU', 'Nottingham Forest': 'NFO', 'Everton': 'EVE',
        'Leeds United': 'LEE', 'Ipswich Town': 'IPS', 'Sunderland': 'SUN',
        'Hull City': 'HUL', 'Coventry City': 'COV',
    };
    return map[name] || name.substring(0, 3).toUpperCase();
}

function avg(arr) { return arr.reduce((s, v) => s + v, 0) / arr.length; }

function getBest(p) {
    const entries = [['1', p.home_win], ['X', p.draw], ['2', p.away_win]];
    entries.sort((a, b) => b[1] - a[1]);
    return { key: entries[0][0], val: entries[0][1] };
}

function formatAnalysis(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}
