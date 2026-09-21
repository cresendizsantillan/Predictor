const dashboardData = {
    "metadata": {
        "title": "Lobo Picks Predictor (Algoritmo EWMA Hist\u00f3rico)",
        "matchweek": 6,
        "matchweek_dates": "10-12 Octubre 2026",
        "teams_loaded": 20,
        "matches_count": 10,
        "league_avg_goals": 1.309,
        "halflife_days": 180,
        "history_note": "Utilizando decaimiento temporal exponencial. Half-life: 180 d\u00edas."
    },
    "team_metrics": {
        "Manchester City": {
            "gf_per90": 2.06,
            "ga_per90": 0.96,
            "xg_per90": 2.06,
            "xga_per90": 0.96,
            "ppg": 2.11,
            "win_rate": 62.7,
            "draw_rate": 23.1,
            "loss_rate": 14.2,
            "xg_diff": 1.1,
            "total_matches": 119
        },
        "Arsenal": {
            "gf_per90": 1.67,
            "ga_per90": 0.79,
            "xg_per90": 1.67,
            "xga_per90": 0.79,
            "ppg": 2.1,
            "win_rate": 62.5,
            "draw_rate": 22.4,
            "loss_rate": 15.1,
            "xg_diff": 0.88,
            "total_matches": 119
        },
        "Brighton": {
            "gf_per90": 1.52,
            "ga_per90": 1.47,
            "xg_per90": 1.52,
            "xga_per90": 1.47,
            "ppg": 1.33,
            "win_rate": 38.0,
            "draw_rate": 18.6,
            "loss_rate": 43.3,
            "xg_diff": 0.06,
            "total_matches": 118
        },
        "Brentford": {
            "gf_per90": 1.25,
            "ga_per90": 1.52,
            "xg_per90": 1.25,
            "xga_per90": 1.52,
            "ppg": 1.05,
            "win_rate": 21.2,
            "draw_rate": 41.8,
            "loss_rate": 37.0,
            "xg_diff": -0.27,
            "total_matches": 118
        },
        "Leeds United": {
            "gf_per90": 1.23,
            "ga_per90": 1.39,
            "xg_per90": 1.19,
            "xga_per90": 1.49,
            "ppg": 1.21,
            "win_rate": 28.8,
            "draw_rate": 34.0,
            "loss_rate": 37.2,
            "xg_diff": -0.3,
            "total_matches": 43
        },
        "Liverpool": {
            "gf_per90": 1.48,
            "ga_per90": 1.39,
            "xg_per90": 1.48,
            "xga_per90": 1.39,
            "ppg": 1.36,
            "win_rate": 33.8,
            "draw_rate": 34.7,
            "loss_rate": 31.5,
            "xg_diff": 0.09,
            "total_matches": 118
        },
        "Everton": {
            "gf_per90": 1.33,
            "ga_per90": 1.31,
            "xg_per90": 1.33,
            "xga_per90": 1.31,
            "ppg": 1.3,
            "win_rate": 31.8,
            "draw_rate": 34.7,
            "loss_rate": 33.5,
            "xg_diff": 0.02,
            "total_matches": 119
        },
        "Hull City": {
            "gf_per90": 1.18,
            "ga_per90": 1.45,
            "xg_per90": 1.12,
            "xga_per90": 1.51,
            "ppg": 1.15,
            "win_rate": 28.8,
            "draw_rate": 28.8,
            "loss_rate": 42.3,
            "xg_diff": -0.39,
            "total_matches": 43
        },
        "Newcastle United": {
            "gf_per90": 1.18,
            "ga_per90": 1.55,
            "xg_per90": 1.2,
            "xga_per90": 1.5,
            "ppg": 1.15,
            "win_rate": 28.8,
            "draw_rate": 28.8,
            "loss_rate": 42.3,
            "xg_diff": -0.29,
            "total_matches": 43
        },
        "Chelsea": {
            "gf_per90": 1.47,
            "ga_per90": 1.65,
            "xg_per90": 1.47,
            "xga_per90": 1.65,
            "ppg": 1.24,
            "win_rate": 34.5,
            "draw_rate": 20.7,
            "loss_rate": 44.8,
            "xg_diff": -0.18,
            "total_matches": 119
        },
        "Ipswich Town": {
            "gf_per90": 1.13,
            "ga_per90": 1.7,
            "xg_per90": 1.07,
            "xga_per90": 1.63,
            "ppg": 1.05,
            "win_rate": 28.8,
            "draw_rate": 18.6,
            "loss_rate": 52.6,
            "xg_diff": -0.55,
            "total_matches": 43
        },
        "Manchester United": {
            "gf_per90": 1.7,
            "ga_per90": 1.32,
            "xg_per90": 1.7,
            "xga_per90": 1.32,
            "ppg": 1.78,
            "win_rate": 51.1,
            "draw_rate": 25.0,
            "loss_rate": 23.9,
            "xg_diff": 0.38,
            "total_matches": 118
        },
        "Nottingham Forest": {
            "gf_per90": 1.31,
            "ga_per90": 1.4,
            "xg_per90": 1.31,
            "xga_per90": 1.4,
            "ppg": 1.12,
            "win_rate": 26.3,
            "draw_rate": 33.3,
            "loss_rate": 40.3,
            "xg_diff": -0.09,
            "total_matches": 100
        },
        "Sunderland": {
            "gf_per90": 0.93,
            "ga_per90": 1.48,
            "xg_per90": 0.93,
            "xga_per90": 1.48,
            "ppg": 1.17,
            "win_rate": 28.2,
            "draw_rate": 31.9,
            "loss_rate": 39.9,
            "xg_diff": -0.55,
            "total_matches": 29
        },
        "Crystal Palace": {
            "gf_per90": 1.14,
            "ga_per90": 1.81,
            "xg_per90": 1.14,
            "xga_per90": 1.81,
            "ppg": 0.91,
            "win_rate": 20.1,
            "draw_rate": 31.0,
            "loss_rate": 48.9,
            "xg_diff": -0.67,
            "total_matches": 119
        },
        "Aston Villa": {
            "gf_per90": 1.33,
            "ga_per90": 1.62,
            "xg_per90": 1.33,
            "xga_per90": 1.62,
            "ppg": 1.34,
            "win_rate": 39.5,
            "draw_rate": 15.7,
            "loss_rate": 44.9,
            "xg_diff": -0.29,
            "total_matches": 119
        },
        "Bournemouth": {
            "gf_per90": 1.47,
            "ga_per90": 1.51,
            "xg_per90": 1.47,
            "xga_per90": 1.51,
            "ppg": 1.26,
            "win_rate": 26.5,
            "draw_rate": 46.3,
            "loss_rate": 27.1,
            "xg_diff": -0.03,
            "total_matches": 101
        },
        "Coventry City": {
            "gf_per90": 1.02,
            "ga_per90": 1.86,
            "xg_per90": 1.03,
            "xga_per90": 1.73,
            "ppg": 0.9,
            "win_rate": 23.7,
            "draw_rate": 18.6,
            "loss_rate": 57.7,
            "xg_diff": -0.69,
            "total_matches": 43
        },
        "Fulham": {
            "gf_per90": 1.04,
            "ga_per90": 1.58,
            "xg_per90": 1.04,
            "xga_per90": 1.58,
            "ppg": 0.87,
            "win_rate": 21.8,
            "draw_rate": 21.9,
            "loss_rate": 56.3,
            "xg_diff": -0.55,
            "total_matches": 102
        },
        "Tottenham Hotspur": {
            "gf_per90": 0.97,
            "ga_per90": 1.65,
            "xg_per90": 1.1,
            "xga_per90": 1.61,
            "ppg": 0.85,
            "win_rate": 18.6,
            "draw_rate": 28.8,
            "loss_rate": 52.6,
            "xg_diff": -0.51,
            "total_matches": 43
        }
    },
    "matches": [
        {
            "home": "Arsenal",
            "away": "Leeds United",
            "probabilities": {
                "home_win": 57.6,
                "draw": 21.2,
                "away_win": 21.2
            },
            "poisson_1x2": {
                "home_win": 69.2,
                "draw": 18.8,
                "away_win": 11.4
            },
            "exact_score": {
                "score": "2-0",
                "probability": 13.2
            },
            "top3_scores": [
                {
                    "score": "2-0",
                    "probability": 13.2
                },
                {
                    "score": "1-0",
                    "probability": 12.4
                },
                {
                    "score": "2-1",
                    "probability": 9.4
                }
            ],
            "poisson_matrix": [
                [
                    5.87,
                    4.2,
                    1.5,
                    0.36,
                    0.06,
                    0.01,
                    0.0
                ],
                [
                    12.44,
                    8.91,
                    3.19,
                    0.76,
                    0.14,
                    0.02,
                    0.0
                ],
                [
                    13.18,
                    9.44,
                    3.38,
                    0.81,
                    0.14,
                    0.02,
                    0.0
                ],
                [
                    9.31,
                    6.67,
                    2.39,
                    0.57,
                    0.1,
                    0.01,
                    0.0
                ],
                [
                    4.93,
                    3.53,
                    1.26,
                    0.3,
                    0.05,
                    0.01,
                    0.0
                ],
                [
                    2.09,
                    1.5,
                    0.54,
                    0.13,
                    0.02,
                    0.0,
                    0.0
                ],
                [
                    0.74,
                    0.53,
                    0.19,
                    0.05,
                    0.01,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "**Arsenal** parte como favorito con un **57.6%** de probabilidad de victoria, impulsado por ventaja ofensiva hist\u00f3rica ponderada (1.67 vs 1.19 xG EWMA), solidez defensiva estructural (xGA 0.79 vs 1.49), mayor inercia ganadora (2.1 PPG EWMA vs 1.2). El modelo de Poisson asigna \u03bb=2.12 goles para Arsenal y \u03bb=0.72 para Leeds United, sugiriendo un **2-0** (13.2%).",
            "lambdas": {
                "home": 2.12,
                "away": 0.72
            },
            "home_metrics": {
                "xg": 1.67,
                "xga": 0.79,
                "ppg": 2.1,
                "win_rate": 62.5
            },
            "away_metrics": {
                "xg": 1.19,
                "xga": 1.49,
                "ppg": 1.21,
                "win_rate": 28.8
            }
        },
        {
            "home": "Aston Villa",
            "away": "Brentford",
            "probabilities": {
                "home_win": 39.6,
                "draw": 26.1,
                "away_win": 34.3
            },
            "poisson_1x2": {
                "home_win": 42.1,
                "draw": 23.0,
                "away_win": 34.5
            },
            "exact_score": {
                "score": "1-1",
                "probability": 10.1
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 10.1
                },
                {
                    "score": "2-1",
                    "probability": 8.7
                },
                {
                    "score": "1-2",
                    "probability": 7.8
                }
            ],
            "poisson_matrix": [
                [
                    3.8,
                    5.87,
                    4.53,
                    2.33,
                    0.9,
                    0.28,
                    0.07
                ],
                [
                    6.56,
                    10.13,
                    7.82,
                    4.03,
                    1.55,
                    0.48,
                    0.12
                ],
                [
                    5.66,
                    8.74,
                    6.75,
                    3.47,
                    1.34,
                    0.41,
                    0.11
                ],
                [
                    3.25,
                    5.03,
                    3.88,
                    2.0,
                    0.77,
                    0.24,
                    0.06
                ],
                [
                    1.4,
                    2.17,
                    1.68,
                    0.86,
                    0.33,
                    0.1,
                    0.03
                ],
                [
                    0.48,
                    0.75,
                    0.58,
                    0.3,
                    0.11,
                    0.04,
                    0.01
                ],
                [
                    0.14,
                    0.22,
                    0.17,
                    0.09,
                    0.03,
                    0.01,
                    0.0
                ]
            ],
            "analysis": "**Aston Villa** parte como favorito con un **39.6%** de probabilidad de victoria, impulsado por un diferencial de rendimiento global favorable (-0.29 vs -0.27). El modelo de Poisson asigna \u03bb=1.73 goles para Aston Villa y \u03bb=1.54 para Brentford, sugiriendo un **1-1** (10.1%).",
            "lambdas": {
                "home": 1.73,
                "away": 1.54
            },
            "home_metrics": {
                "xg": 1.33,
                "xga": 1.62,
                "ppg": 1.34,
                "win_rate": 39.5
            },
            "away_metrics": {
                "xg": 1.25,
                "xga": 1.52,
                "ppg": 1.05,
                "win_rate": 21.2
            }
        },
        {
            "home": "Chelsea",
            "away": "Bournemouth",
            "probabilities": {
                "home_win": 37.7,
                "draw": 24.8,
                "away_win": 37.6
            },
            "poisson_1x2": {
                "home_win": 39.7,
                "draw": 21.5,
                "away_win": 38.2
            },
            "exact_score": {
                "score": "1-1",
                "probability": 8.3
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 8.3
                },
                {
                    "score": "2-1",
                    "probability": 7.8
                },
                {
                    "score": "1-2",
                    "probability": 7.7
                }
            ],
            "poisson_matrix": [
                [
                    2.37,
                    4.38,
                    4.06,
                    2.51,
                    1.16,
                    0.43,
                    0.13
                ],
                [
                    4.48,
                    8.29,
                    7.68,
                    4.74,
                    2.2,
                    0.81,
                    0.25
                ],
                [
                    4.23,
                    7.84,
                    7.26,
                    4.48,
                    2.08,
                    0.77,
                    0.24
                ],
                [
                    2.67,
                    4.94,
                    4.58,
                    2.83,
                    1.31,
                    0.49,
                    0.15
                ],
                [
                    1.26,
                    2.34,
                    2.16,
                    1.34,
                    0.62,
                    0.23,
                    0.07
                ],
                [
                    0.48,
                    0.88,
                    0.82,
                    0.51,
                    0.23,
                    0.09,
                    0.03
                ],
                [
                    0.15,
                    0.28,
                    0.26,
                    0.16,
                    0.07,
                    0.03,
                    0.01
                ]
            ],
            "analysis": "**Chelsea** parte como favorito con un **37.7%** de probabilidad de victoria, impulsado por un diferencial de rendimiento global favorable (-0.18 vs -0.03). El modelo de Poisson asigna \u03bb=1.89 goles para Chelsea y \u03bb=1.85 para Bournemouth, sugiriendo un **1-1** (8.3%).",
            "lambdas": {
                "home": 1.89,
                "away": 1.85
            },
            "home_metrics": {
                "xg": 1.47,
                "xga": 1.65,
                "ppg": 1.24,
                "win_rate": 34.5
            },
            "away_metrics": {
                "xg": 1.47,
                "xga": 1.51,
                "ppg": 1.26,
                "win_rate": 26.5
            }
        },
        {
            "home": "Ipswich Town",
            "away": "Fulham",
            "probabilities": {
                "home_win": 39.4,
                "draw": 26.2,
                "away_win": 34.4
            },
            "poisson_1x2": {
                "home_win": 41.0,
                "draw": 25.5,
                "away_win": 33.4
            },
            "exact_score": {
                "score": "1-1",
                "probability": 12.1
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 12.1
                },
                {
                    "score": "1-0",
                    "probability": 9.4
                },
                {
                    "score": "2-1",
                    "probability": 8.8
                }
            ],
            "poisson_matrix": [
                [
                    6.42,
                    8.28,
                    5.34,
                    2.29,
                    0.74,
                    0.19,
                    0.04
                ],
                [
                    9.35,
                    12.06,
                    7.77,
                    3.34,
                    1.08,
                    0.28,
                    0.06
                ],
                [
                    6.81,
                    8.78,
                    5.66,
                    2.43,
                    0.78,
                    0.2,
                    0.04
                ],
                [
                    3.31,
                    4.26,
                    2.75,
                    1.18,
                    0.38,
                    0.1,
                    0.02
                ],
                [
                    1.2,
                    1.55,
                    1.0,
                    0.43,
                    0.14,
                    0.04,
                    0.01
                ],
                [
                    0.35,
                    0.45,
                    0.29,
                    0.13,
                    0.04,
                    0.01,
                    0.0
                ],
                [
                    0.09,
                    0.11,
                    0.07,
                    0.03,
                    0.01,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "**Ipswich Town** parte como favorito con un **39.4%** de probabilidad de victoria, impulsado por un diferencial de rendimiento global favorable (-0.55 vs -0.55). El modelo de Poisson asigna \u03bb=1.46 goles para Ipswich Town y \u03bb=1.29 para Fulham, sugiriendo un **1-1** (12.1%).",
            "lambdas": {
                "home": 1.46,
                "away": 1.29
            },
            "home_metrics": {
                "xg": 1.07,
                "xga": 1.63,
                "ppg": 1.05,
                "win_rate": 28.8
            },
            "away_metrics": {
                "xg": 1.04,
                "xga": 1.58,
                "ppg": 0.87,
                "win_rate": 21.8
            }
        },
        {
            "home": "Sunderland",
            "away": "Brighton",
            "probabilities": {
                "home_win": 32.0,
                "draw": 23.6,
                "away_win": 44.4
            },
            "poisson_1x2": {
                "home_win": 25.9,
                "draw": 23.8,
                "away_win": 50.1
            },
            "exact_score": {
                "score": "1-1",
                "probability": 11.2
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 11.2
                },
                {
                    "score": "1-2",
                    "probability": 9.6
                },
                {
                    "score": "0-1",
                    "probability": 9.5
                }
            ],
            "poisson_matrix": [
                [
                    5.54,
                    9.55,
                    8.22,
                    4.72,
                    2.03,
                    0.7,
                    0.2
                ],
                [
                    6.49,
                    11.17,
                    9.62,
                    5.52,
                    2.38,
                    0.82,
                    0.24
                ],
                [
                    3.79,
                    6.54,
                    5.63,
                    3.23,
                    1.39,
                    0.48,
                    0.14
                ],
                [
                    1.48,
                    2.55,
                    2.2,
                    1.26,
                    0.54,
                    0.19,
                    0.05
                ],
                [
                    0.43,
                    0.75,
                    0.64,
                    0.37,
                    0.16,
                    0.05,
                    0.02
                ],
                [
                    0.1,
                    0.17,
                    0.15,
                    0.09,
                    0.04,
                    0.01,
                    0.0
                ],
                [
                    0.02,
                    0.03,
                    0.03,
                    0.02,
                    0.01,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "**Brighton** parte como favorito con un **44.4%** de probabilidad de victoria, impulsado por ventaja ofensiva hist\u00f3rica ponderada (1.52 vs 0.93 xG EWMA). El modelo de Poisson asigna \u03bb=1.17 goles para Sunderland y \u03bb=1.72 para Brighton, sugiriendo un **1-1** (11.2%).",
            "lambdas": {
                "home": 1.17,
                "away": 1.72
            },
            "home_metrics": {
                "xg": 0.93,
                "xga": 1.48,
                "ppg": 1.17,
                "win_rate": 28.2
            },
            "away_metrics": {
                "xg": 1.52,
                "xga": 1.47,
                "ppg": 1.33,
                "win_rate": 38.0
            }
        },
        {
            "home": "Manchester United",
            "away": "Tottenham Hotspur",
            "probabilities": {
                "home_win": 56.3,
                "draw": 19.9,
                "away_win": 23.8
            },
            "poisson_1x2": {
                "home_win": 63.8,
                "draw": 18.6,
                "away_win": 16.6
            },
            "exact_score": {
                "score": "2-1",
                "probability": 9.6
            },
            "top3_scores": [
                {
                    "score": "2-1",
                    "probability": 9.6
                },
                {
                    "score": "2-0",
                    "probability": 8.7
                },
                {
                    "score": "1-1",
                    "probability": 8.2
                }
            ],
            "poisson_matrix": [
                [
                    3.18,
                    3.53,
                    1.95,
                    0.72,
                    0.2,
                    0.04,
                    0.01
                ],
                [
                    7.44,
                    8.25,
                    4.57,
                    1.69,
                    0.47,
                    0.1,
                    0.02
                ],
                [
                    8.71,
                    9.65,
                    5.35,
                    1.98,
                    0.55,
                    0.12,
                    0.02
                ],
                [
                    6.79,
                    7.52,
                    4.17,
                    1.54,
                    0.43,
                    0.09,
                    0.02
                ],
                [
                    3.97,
                    4.4,
                    2.44,
                    0.9,
                    0.25,
                    0.06,
                    0.01
                ],
                [
                    1.86,
                    2.06,
                    1.14,
                    0.42,
                    0.12,
                    0.03,
                    0.0
                ],
                [
                    0.72,
                    0.8,
                    0.45,
                    0.16,
                    0.05,
                    0.01,
                    0.0
                ]
            ],
            "analysis": "**Manchester United** parte como favorito con un **56.3%** de probabilidad de victoria, impulsado por ventaja ofensiva hist\u00f3rica ponderada (1.70 vs 1.10 xG EWMA), solidez defensiva estructural (xGA 1.32 vs 1.61), mayor inercia ganadora (1.8 PPG EWMA vs 0.8). El modelo de Poisson asigna \u03bb=2.34 goles para Manchester United y \u03bb=1.11 para Tottenham Hotspur, sugiriendo un **2-1** (9.6%).",
            "lambdas": {
                "home": 2.34,
                "away": 1.11
            },
            "home_metrics": {
                "xg": 1.7,
                "xga": 1.32,
                "ppg": 1.78,
                "win_rate": 51.1
            },
            "away_metrics": {
                "xg": 1.1,
                "xga": 1.61,
                "ppg": 0.85,
                "win_rate": 18.6
            }
        },
        {
            "home": "Crystal Palace",
            "away": "Nottingham Forest",
            "probabilities": {
                "home_win": 32.5,
                "draw": 23.9,
                "away_win": 43.6
            },
            "poisson_1x2": {
                "home_win": 28.9,
                "draw": 22.9,
                "away_win": 47.9
            },
            "exact_score": {
                "score": "1-1",
                "probability": 10.3
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 10.3
                },
                {
                    "score": "1-2",
                    "probability": 9.4
                },
                {
                    "score": "0-1",
                    "probability": 7.6
                }
            ],
            "poisson_matrix": [
                [
                    4.18,
                    7.58,
                    6.87,
                    4.15,
                    1.88,
                    0.68,
                    0.21
                ],
                [
                    5.69,
                    10.32,
                    9.36,
                    5.65,
                    2.56,
                    0.93,
                    0.28
                ],
                [
                    3.88,
                    7.03,
                    6.37,
                    3.85,
                    1.75,
                    0.63,
                    0.19
                ],
                [
                    1.76,
                    3.19,
                    2.89,
                    1.75,
                    0.79,
                    0.29,
                    0.09
                ],
                [
                    0.6,
                    1.09,
                    0.98,
                    0.6,
                    0.27,
                    0.1,
                    0.03
                ],
                [
                    0.16,
                    0.3,
                    0.27,
                    0.16,
                    0.07,
                    0.03,
                    0.01
                ],
                [
                    0.04,
                    0.07,
                    0.06,
                    0.04,
                    0.02,
                    0.01,
                    0.0
                ]
            ],
            "analysis": "**Nottingham Forest** parte como favorito con un **43.6%** de probabilidad de victoria, impulsado por ventaja ofensiva hist\u00f3rica ponderada (1.31 vs 1.14 xG EWMA), solidez defensiva estructural (xGA 1.40 vs 1.81). El modelo de Poisson asigna \u03bb=1.36 goles para Crystal Palace y \u03bb=1.81 para Nottingham Forest, sugiriendo un **1-1** (10.3%).",
            "lambdas": {
                "home": 1.36,
                "away": 1.81
            },
            "home_metrics": {
                "xg": 1.14,
                "xga": 1.81,
                "ppg": 0.91,
                "win_rate": 20.1
            },
            "away_metrics": {
                "xg": 1.31,
                "xga": 1.4,
                "ppg": 1.12,
                "win_rate": 26.3
            }
        },
        {
            "home": "Hull City",
            "away": "Everton",
            "probabilities": {
                "home_win": 33.0,
                "draw": 27.1,
                "away_win": 39.9
            },
            "poisson_1x2": {
                "home_win": 30.9,
                "draw": 25.1,
                "away_win": 43.9
            },
            "exact_score": {
                "score": "1-1",
                "probability": 11.8
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 11.8
                },
                {
                    "score": "0-1",
                    "probability": 9.5
                },
                {
                    "score": "1-2",
                    "probability": 9.1
                }
            ],
            "poisson_matrix": [
                [
                    6.19,
                    9.49,
                    7.29,
                    3.73,
                    1.43,
                    0.44,
                    0.11
                ],
                [
                    7.72,
                    11.85,
                    9.09,
                    4.65,
                    1.78,
                    0.55,
                    0.14
                ],
                [
                    4.82,
                    7.4,
                    5.67,
                    2.9,
                    1.11,
                    0.34,
                    0.09
                ],
                [
                    2.0,
                    3.08,
                    2.36,
                    1.21,
                    0.46,
                    0.14,
                    0.04
                ],
                [
                    0.63,
                    0.96,
                    0.74,
                    0.38,
                    0.14,
                    0.04,
                    0.01
                ],
                [
                    0.16,
                    0.24,
                    0.18,
                    0.09,
                    0.04,
                    0.01,
                    0.0
                ],
                [
                    0.03,
                    0.05,
                    0.04,
                    0.02,
                    0.01,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "**Everton** parte como favorito con un **39.9%** de probabilidad de victoria, impulsado por ventaja ofensiva hist\u00f3rica ponderada (1.33 vs 1.12 xG EWMA), solidez defensiva estructural (xGA 1.31 vs 1.51). El modelo de Poisson asigna \u03bb=1.25 goles para Hull City y \u03bb=1.53 para Everton, sugiriendo un **1-1** (11.8%).",
            "lambdas": {
                "home": 1.25,
                "away": 1.53
            },
            "home_metrics": {
                "xg": 1.12,
                "xga": 1.51,
                "ppg": 1.15,
                "win_rate": 28.8
            },
            "away_metrics": {
                "xg": 1.33,
                "xga": 1.31,
                "ppg": 1.3,
                "win_rate": 31.8
            }
        },
        {
            "home": "Liverpool",
            "away": "Manchester City",
            "probabilities": {
                "home_win": 26.9,
                "draw": 20.0,
                "away_win": 53.1
            },
            "poisson_1x2": {
                "home_win": 20.4,
                "draw": 20.1,
                "away_win": 58.7
            },
            "exact_score": {
                "score": "1-2",
                "probability": 9.7
            },
            "top3_scores": [
                {
                    "score": "1-2",
                    "probability": 9.7
                },
                {
                    "score": "1-1",
                    "probability": 8.8
                },
                {
                    "score": "0-2",
                    "probability": 7.9
                }
            ],
            "poisson_matrix": [
                [
                    3.32,
                    7.26,
                    7.94,
                    5.79,
                    3.17,
                    1.38,
                    0.5
                ],
                [
                    4.05,
                    8.85,
                    9.67,
                    7.05,
                    3.86,
                    1.69,
                    0.61
                ],
                [
                    2.46,
                    5.39,
                    5.89,
                    4.29,
                    2.35,
                    1.03,
                    0.37
                ],
                [
                    1.0,
                    2.19,
                    2.39,
                    1.74,
                    0.95,
                    0.42,
                    0.15
                ],
                [
                    0.3,
                    0.67,
                    0.73,
                    0.53,
                    0.29,
                    0.13,
                    0.05
                ],
                [
                    0.07,
                    0.16,
                    0.18,
                    0.13,
                    0.07,
                    0.03,
                    0.01
                ],
                [
                    0.02,
                    0.03,
                    0.04,
                    0.03,
                    0.01,
                    0.01,
                    0.0
                ]
            ],
            "analysis": "**Manchester City** parte como favorito con un **53.1%** de probabilidad de victoria, impulsado por ventaja ofensiva hist\u00f3rica ponderada (2.06 vs 1.48 xG EWMA), solidez defensiva estructural (xGA 0.96 vs 1.39), mayor inercia ganadora (2.1 PPG EWMA vs 1.4). El modelo de Poisson asigna \u03bb=1.22 goles para Liverpool y \u03bb=2.19 para Manchester City, sugiriendo un **1-2** (9.7%).",
            "lambdas": {
                "home": 1.22,
                "away": 2.19
            },
            "home_metrics": {
                "xg": 1.48,
                "xga": 1.39,
                "ppg": 1.36,
                "win_rate": 33.8
            },
            "away_metrics": {
                "xg": 2.06,
                "xga": 0.96,
                "ppg": 2.11,
                "win_rate": 62.7
            }
        },
        {
            "home": "Coventry City",
            "away": "Newcastle United",
            "probabilities": {
                "home_win": 34.2,
                "draw": 24.0,
                "away_win": 41.8
            },
            "poisson_1x2": {
                "home_win": 31.9,
                "draw": 24.5,
                "away_win": 43.5
            },
            "exact_score": {
                "score": "1-1",
                "probability": 11.4
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 11.4
                },
                {
                    "score": "1-2",
                    "probability": 9.1
                },
                {
                    "score": "0-1",
                    "probability": 8.6
                }
            ],
            "poisson_matrix": [
                [
                    5.44,
                    8.63,
                    6.85,
                    3.63,
                    1.44,
                    0.46,
                    0.12
                ],
                [
                    7.2,
                    11.43,
                    9.07,
                    4.8,
                    1.91,
                    0.61,
                    0.16
                ],
                [
                    4.77,
                    7.57,
                    6.01,
                    3.18,
                    1.26,
                    0.4,
                    0.11
                ],
                [
                    2.1,
                    3.34,
                    2.65,
                    1.4,
                    0.56,
                    0.18,
                    0.05
                ],
                [
                    0.7,
                    1.11,
                    0.88,
                    0.46,
                    0.18,
                    0.06,
                    0.02
                ],
                [
                    0.18,
                    0.29,
                    0.23,
                    0.12,
                    0.05,
                    0.02,
                    0.0
                ],
                [
                    0.04,
                    0.06,
                    0.05,
                    0.03,
                    0.01,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "**Newcastle United** parte como favorito con un **41.8%** de probabilidad de victoria, impulsado por ventaja ofensiva hist\u00f3rica ponderada (1.20 vs 1.03 xG EWMA), solidez defensiva estructural (xGA 1.50 vs 1.73). El modelo de Poisson asigna \u03bb=1.32 goles para Coventry City y \u03bb=1.59 para Newcastle United, sugiriendo un **1-1** (11.4%).",
            "lambdas": {
                "home": 1.32,
                "away": 1.59
            },
            "home_metrics": {
                "xg": 1.03,
                "xga": 1.73,
                "ppg": 0.9,
                "win_rate": 23.7
            },
            "away_metrics": {
                "xg": 1.2,
                "xga": 1.5,
                "ppg": 1.15,
                "win_rate": 28.8
            }
        }
    ]
};
