# 🏟️ Informe Predictivo — Arquitectura Estocástica (MLE + XGBoost)
## Jornada 6 (Matchweek 6) · 10-12 Octubre 2026

> **Metodología:** Estimación MLE de parámetros latentes con corrección de dependencia (Dixon-Coles) y calibración no lineal vía ensamble de árboles gradient boosting.
---
## 📋 Resumen Ejecutivo

| Partido | 1 (%) | X (%) | 2 (%) | Marcador Óptimo | $\lambda$ | $\mu$ |
|:--------|:-----:|:-----:|:-----:|:---------------:|:---:|:---:|
| Arsenal vs Leeds United | 64.2 | 28.2 | 7.6 | **1-0** (15.6%) | 1.71 | 0.66 |
| Aston Villa vs Brentford | 34.0 | 32.6 | 33.4 | **1-1** (12.0%) | 1.46 | 1.40 |
| Chelsea vs Bournemouth | 38.5 | 38.9 | 22.6 | **1-1** (10.1%) | 1.82 | 1.54 |
| Ipswich Town vs Fulham | 25.1 | 29.6 | 45.3 | **1-1** (10.4%) | 1.43 | 1.83 |
| Sunderland vs Brighton | 27.3 | 35.7 | 37.0 | **1-1** (12.9%) | 1.09 | 1.42 |
| Manchester United vs Tottenham Hotspur | 71.1 | 21.3 | 7.5 | **2-0** (10.2%) | 2.03 | 0.99 |
| Crystal Palace vs Nottingham Forest | 28.2 | 39.7 | 32.1 | **1-1** (12.7%) | 1.16 | 1.43 |
| Hull City vs Everton | 4.4 | 11.9 | 83.7 | **0-4** (20.6%) | 0.26 | 4.41 |
| Liverpool vs Manchester City | 38.4 | 21.1 | 40.6 | **1-1** (11.8%) | 1.20 | 1.65 |
| Coventry City vs Newcastle United | 4.4 | 11.9 | 83.7 | **0-5** (24.5%) | 0.33 | 5.70 |