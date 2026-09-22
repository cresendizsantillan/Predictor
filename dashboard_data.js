const dashboardData = {
    "metadata": {
        "title": "Lobo Picks Predictor (MLE + XGBoost)",
        "matchweek": 6,
        "matchweek_dates": "10-12 Octubre 2026",
        "teams_loaded": 29,
        "matches_count": 10,
        "league_avg_goals": 2.8,
        "halflife_days": 180,
        "history_note": "Modelo Dixon-Coles Bivariado ajustado con XGBoost."
    },
    "team_metrics": {
        "Hull City": {
            "gf_per90": 1.19,
            "ga_per90": 0.83,
            "xg_per90": 3.14,
            "xga_per90": 0.24,
            "ppg": 1.56,
            "win_rate": 38.4,
            "draw_rate": 40.5,
            "loss_rate": 21.1,
            "xg_diff": 2.9,
            "total_matches": 5
        },
        "Manchester United": {
            "gf_per90": 1.68,
            "ga_per90": 1.36,
            "xg_per90": 4.73,
            "xga_per90": 0.38,
            "ppg": 1.62,
            "win_rate": 44.2,
            "draw_rate": 29.3,
            "loss_rate": 26.5,
            "xg_diff": 4.35,
            "total_matches": 195
        },
        "Coventry City": {
            "gf_per90": 0.21,
            "ga_per90": 1.99,
            "xg_per90": 0.8,
            "xga_per90": 0.47,
            "ppg": 0.63,
            "win_rate": 21.1,
            "draw_rate": 0.0,
            "loss_rate": 78.9,
            "xg_diff": 0.32,
            "total_matches": 5
        },
        "Newcastle United": {
            "gf_per90": 1.59,
            "ga_per90": 1.51,
            "xg_per90": 4.52,
            "xga_per90": 0.43,
            "ppg": 1.42,
            "win_rate": 40.7,
            "draw_rate": 20.2,
            "loss_rate": 39.1,
            "xg_diff": 4.1,
            "total_matches": 195
        },
        "Aston Villa": {
            "gf_per90": 1.41,
            "ga_per90": 1.44,
            "xg_per90": 4.08,
            "xga_per90": 0.4,
            "ppg": 1.53,
            "win_rate": 44.0,
            "draw_rate": 20.8,
            "loss_rate": 35.2,
            "xg_diff": 3.68,
            "total_matches": 195
        },
        "Manchester City": {
            "gf_per90": 2.13,
            "ga_per90": 0.96,
            "xg_per90": 5.76,
            "xga_per90": 0.28,
            "ppg": 2.24,
            "win_rate": 67.9,
            "draw_rate": 20.1,
            "loss_rate": 12.1,
            "xg_diff": 5.48,
            "total_matches": 195
        },
        "Sunderland": {
            "gf_per90": 1.15,
            "ga_per90": 1.51,
            "xg_per90": 3.31,
            "xga_per90": 0.4,
            "ppg": 1.26,
            "win_rate": 32.8,
            "draw_rate": 27.9,
            "loss_rate": 39.3,
            "xg_diff": 2.91,
            "total_matches": 43
        },
        "Everton": {
            "gf_per90": 1.23,
            "ga_per90": 1.19,
            "xg_per90": 3.28,
            "xga_per90": 0.33,
            "ppg": 1.35,
            "win_rate": 33.0,
            "draw_rate": 35.5,
            "loss_rate": 31.5,
            "xg_diff": 2.95,
            "total_matches": 195
        },
        "Chelsea": {
            "gf_per90": 1.57,
            "ga_per90": 1.6,
            "xg_per90": 4.61,
            "xga_per90": 0.44,
            "ppg": 1.38,
            "win_rate": 38.2,
            "draw_rate": 23.5,
            "loss_rate": 38.2,
            "xg_diff": 4.17,
            "total_matches": 195
        },
        "Tottenham Hotspur": {
            "gf_per90": 1.12,
            "ga_per90": 1.6,
            "xg_per90": 3.16,
            "xga_per90": 0.44,
            "ppg": 0.92,
            "win_rate": 21.3,
            "draw_rate": 28.3,
            "loss_rate": 50.4,
            "xg_diff": 2.72,
            "total_matches": 195
        },
        "Nottingham Forest": {
            "gf_per90": 1.3,
            "ga_per90": 1.24,
            "xg_per90": 3.54,
            "xga_per90": 0.35,
            "ppg": 1.24,
            "win_rate": 30.8,
            "draw_rate": 31.2,
            "loss_rate": 37.9,
            "xg_diff": 3.19,
            "total_matches": 157
        },
        "Brighton": {
            "gf_per90": 1.78,
            "ga_per90": 1.22,
            "xg_per90": 4.96,
            "xga_per90": 0.35,
            "ppg": 1.55,
            "win_rate": 43.1,
            "draw_rate": 25.7,
            "loss_rate": 31.2,
            "xg_diff": 4.6,
            "total_matches": 195
        },
        "Ipswich Town": {
            "gf_per90": 1.19,
            "ga_per90": 2.2,
            "xg_per90": 3.37,
            "xga_per90": 0.62,
            "ppg": 0.9,
            "win_rate": 26.7,
            "draw_rate": 10.2,
            "loss_rate": 63.1,
            "xg_diff": 2.75,
            "total_matches": 43
        },
        "Arsenal": {
            "gf_per90": 1.8,
            "ga_per90": 0.78,
            "xg_per90": 4.84,
            "xga_per90": 0.22,
            "ppg": 2.22,
            "win_rate": 68.5,
            "draw_rate": 16.6,
            "loss_rate": 14.9,
            "xg_diff": 4.62,
            "total_matches": 195
        },
        "Leeds United": {
            "gf_per90": 1.33,
            "ga_per90": 1.21,
            "xg_per90": 3.69,
            "xga_per90": 0.33,
            "ppg": 1.41,
            "win_rate": 32.6,
            "draw_rate": 43.6,
            "loss_rate": 23.8,
            "xg_diff": 3.36,
            "total_matches": 119
        },
        "Liverpool": {
            "gf_per90": 1.72,
            "ga_per90": 1.24,
            "xg_per90": 4.69,
            "xga_per90": 0.35,
            "ppg": 1.7,
            "win_rate": 45.7,
            "draw_rate": 32.5,
            "loss_rate": 21.8,
            "xg_diff": 4.34,
            "total_matches": 195
        },
        "Bournemouth": {
            "gf_per90": 1.44,
            "ga_per90": 1.37,
            "xg_per90": 4.08,
            "xga_per90": 0.37,
            "ppg": 1.33,
            "win_rate": 28.5,
            "draw_rate": 47.6,
            "loss_rate": 23.9,
            "xg_diff": 3.71,
            "total_matches": 157
        },
        "Crystal Palace": {
            "gf_per90": 1.17,
            "ga_per90": 1.58,
            "xg_per90": 3.29,
            "xga_per90": 0.43,
            "ppg": 1.11,
            "win_rate": 27.0,
            "draw_rate": 30.0,
            "loss_rate": 42.9,
            "xg_diff": 2.85,
            "total_matches": 195
        },
        "Brentford": {
            "gf_per90": 1.58,
            "ga_per90": 1.27,
            "xg_per90": 4.36,
            "xga_per90": 0.36,
            "ppg": 1.46,
            "win_rate": 36.1,
            "draw_rate": 37.6,
            "loss_rate": 26.2,
            "xg_diff": 4.0,
            "total_matches": 195
        },
        "Fulham": {
            "gf_per90": 1.19,
            "ga_per90": 1.38,
            "xg_per90": 3.28,
            "xga_per90": 0.38,
            "ppg": 1.18,
            "win_rate": 31.6,
            "draw_rate": 23.6,
            "loss_rate": 44.8,
            "xg_diff": 2.9,
            "total_matches": 157
        }
    },
    "matches": [
        {
            "home": "Arsenal",
            "away": "Leeds United",
            "probabilities": {
                "home_win": 54.34834361076355,
                "draw": 27.487042546272278,
                "away_win": 18.164610862731934
            },
            "poisson_1x2": {
                "home_win": 54.34834361076355,
                "draw": 27.487042546272278,
                "away_win": 18.164610862731934
            },
            "exact_score": {
                "score": "1-0",
                "probability": 16.053588504927614
            },
            "top3_scores": [
                {
                    "score": "1-0",
                    "probability": 16.053588504927614
                }
            ],
            "poisson_matrix": [
                [
                    10.32,
                    6.91,
                    2.39,
                    0.54,
                    0.09,
                    0.01,
                    0.0
                ],
                [
                    15.98,
                    11.31,
                    3.82,
                    0.87,
                    0.15,
                    0.02,
                    0.0
                ],
                [
                    13.07,
                    8.95,
                    3.06,
                    0.7,
                    0.12,
                    0.02,
                    0.0
                ],
                [
                    6.98,
                    4.78,
                    1.64,
                    0.37,
                    0.06,
                    0.01,
                    0.0
                ],
                [
                    2.8,
                    1.92,
                    0.66,
                    0.15,
                    0.03,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    0.61,
                    0.21,
                    0.05,
                    0.01,
                    0.0,
                    0.0
                ],
                [
                    0.24,
                    0.16,
                    0.06,
                    0.01,
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.60 vs 0.68.",
            "lambdas": {
                "home": 1.6026424957912935,
                "away": 0.6848461153895414
            },
            "home_metrics": {
                "xg": 4.84,
                "xga": 0.22,
                "ppg": 2.22,
                "win_rate": 68.5
            },
            "away_metrics": {
                "xg": 3.69,
                "xga": 0.33,
                "ppg": 1.41,
                "win_rate": 32.6
            }
        },
        {
            "home": "Aston Villa",
            "away": "Brentford",
            "probabilities": {
                "home_win": 27.213162183761597,
                "draw": 27.079591155052185,
                "away_win": 45.70724368095398
            },
            "poisson_1x2": {
                "home_win": 27.213162183761597,
                "draw": 27.079591155052185,
                "away_win": 45.70724368095398
            },
            "exact_score": {
                "score": "1-1",
                "probability": 11.758853396958353
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 11.758853396958353
                }
            ],
            "poisson_matrix": [
                [
                    5.59,
                    7.78,
                    5.78,
                    2.81,
                    1.03,
                    0.3,
                    0.07
                ],
                [
                    7.76,
                    11.69,
                    8.41,
                    4.09,
                    1.49,
                    0.44,
                    0.11
                ],
                [
                    5.75,
                    8.39,
                    6.12,
                    2.98,
                    1.09,
                    0.32,
                    0.08
                ],
                [
                    2.79,
                    4.07,
                    2.97,
                    1.44,
                    0.53,
                    0.15,
                    0.04
                ],
                [
                    1.01,
                    1.48,
                    1.08,
                    0.52,
                    0.19,
                    0.06,
                    0.01
                ],
                [
                    0.3,
                    0.43,
                    0.31,
                    0.15,
                    0.06,
                    0.02,
                    0.0
                ],
                [
                    0.07,
                    0.1,
                    0.08,
                    0.04,
                    0.01,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.45 vs 1.46.",
            "lambdas": {
                "home": 1.4547714463368964,
                "away": 1.4585277169132038
            },
            "home_metrics": {
                "xg": 4.08,
                "xga": 0.4,
                "ppg": 1.53,
                "win_rate": 44.0
            },
            "away_metrics": {
                "xg": 4.36,
                "xga": 0.36,
                "ppg": 1.46,
                "win_rate": 36.1
            }
        },
        {
            "home": "Chelsea",
            "away": "Bournemouth",
            "probabilities": {
                "home_win": 30.27976155281067,
                "draw": 30.65640926361084,
                "away_win": 39.063823223114014
            },
            "poisson_1x2": {
                "home_win": 30.27976155281067,
                "draw": 30.65640926361084,
                "away_win": 39.063823223114014
            },
            "exact_score": {
                "score": "1-1",
                "probability": 10.631867217532712
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 10.631867217532712
                }
            ],
            "poisson_matrix": [
                [
                    4.19,
                    5.98,
                    4.58,
                    2.29,
                    0.86,
                    0.26,
                    0.06
                ],
                [
                    6.77,
                    10.53,
                    7.81,
                    3.91,
                    1.47,
                    0.44,
                    0.11
                ],
                [
                    5.9,
                    8.86,
                    6.66,
                    3.33,
                    1.25,
                    0.38,
                    0.09
                ],
                [
                    3.35,
                    5.04,
                    3.78,
                    1.89,
                    0.71,
                    0.21,
                    0.05
                ],
                [
                    1.43,
                    2.15,
                    1.61,
                    0.81,
                    0.3,
                    0.09,
                    0.02
                ],
                [
                    0.49,
                    0.73,
                    0.55,
                    0.28,
                    0.1,
                    0.03,
                    0.01
                ],
                [
                    0.14,
                    0.21,
                    0.16,
                    0.08,
                    0.03,
                    0.01,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.70 vs 1.50.",
            "lambdas": {
                "home": 1.7048751498955244,
                "away": 1.5022448124470733
            },
            "home_metrics": {
                "xg": 4.61,
                "xga": 0.44,
                "ppg": 1.38,
                "win_rate": 38.2
            },
            "away_metrics": {
                "xg": 4.08,
                "xga": 0.37,
                "ppg": 1.33,
                "win_rate": 28.5
            }
        },
        {
            "home": "Ipswich Town",
            "away": "Fulham",
            "probabilities": {
                "home_win": 30.67820370197296,
                "draw": 29.603347182273865,
                "away_win": 39.718449115753174
            },
            "poisson_1x2": {
                "home_win": 30.67820370197296,
                "draw": 29.603347182273865,
                "away_win": 39.718449115753174
            },
            "exact_score": {
                "score": "1-1",
                "probability": 11.351982742772359
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 11.351982742772359
                }
            ],
            "poisson_matrix": [
                [
                    5.29,
                    8.53,
                    7.37,
                    4.16,
                    1.76,
                    0.6,
                    0.17
                ],
                [
                    6.47,
                    11.26,
                    9.41,
                    5.31,
                    2.25,
                    0.76,
                    0.21
                ],
                [
                    4.19,
                    7.1,
                    6.01,
                    3.39,
                    1.43,
                    0.48,
                    0.14
                ],
                [
                    1.78,
                    3.02,
                    2.55,
                    1.44,
                    0.61,
                    0.21,
                    0.06
                ],
                [
                    0.57,
                    0.96,
                    0.82,
                    0.46,
                    0.19,
                    0.07,
                    0.02
                ],
                [
                    0.15,
                    0.25,
                    0.21,
                    0.12,
                    0.05,
                    0.02,
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
            "analysis": "Partido dominado por tasa 1.28 vs 1.69.",
            "lambdas": {
                "home": 1.2762788196203239,
                "away": 1.6921729338008198
            },
            "home_metrics": {
                "xg": 3.37,
                "xga": 0.62,
                "ppg": 0.9,
                "win_rate": 26.7
            },
            "away_metrics": {
                "xg": 3.28,
                "xga": 0.38,
                "ppg": 1.18,
                "win_rate": 31.6
            }
        },
        {
            "home": "Sunderland",
            "away": "Brighton",
            "probabilities": {
                "home_win": 14.149968326091766,
                "draw": 20.07080614566803,
                "away_win": 65.77922105789185
            },
            "poisson_1x2": {
                "home_win": 14.149968326091766,
                "draw": 20.07080614566803,
                "away_win": 65.77922105789185
            },
            "exact_score": {
                "score": "1-1",
                "probability": 11.685226294202728
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 11.685226294202728
                }
            ],
            "poisson_matrix": [
                [
                    6.03,
                    9.6,
                    8.17,
                    4.54,
                    1.89,
                    0.63,
                    0.17
                ],
                [
                    6.78,
                    11.61,
                    9.55,
                    5.3,
                    2.21,
                    0.74,
                    0.2
                ],
                [
                    4.02,
                    6.7,
                    5.58,
                    3.1,
                    1.29,
                    0.43,
                    0.12
                ],
                [
                    1.57,
                    2.61,
                    2.17,
                    1.21,
                    0.5,
                    0.17,
                    0.05
                ],
                [
                    0.46,
                    0.76,
                    0.63,
                    0.35,
                    0.15,
                    0.05,
                    0.01
                ],
                [
                    0.11,
                    0.18,
                    0.15,
                    0.08,
                    0.03,
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
            "analysis": "Partido dominado por tasa 1.17 vs 1.67.",
            "lambdas": {
                "home": 1.1686805973656307,
                "away": 1.6659421425845522
            },
            "home_metrics": {
                "xg": 3.31,
                "xga": 0.4,
                "ppg": 1.26,
                "win_rate": 32.8
            },
            "away_metrics": {
                "xg": 4.96,
                "xga": 0.35,
                "ppg": 1.55,
                "win_rate": 43.1
            }
        },
        {
            "home": "Manchester United",
            "away": "Tottenham Hotspur",
            "probabilities": {
                "home_win": 60.20136475563049,
                "draw": 26.731136441230774,
                "away_win": 13.067503273487091
            },
            "poisson_1x2": {
                "home_win": 60.20136475563049,
                "draw": 26.731136441230774,
                "away_win": 13.067503273487091
            },
            "exact_score": {
                "score": "2-1",
                "probability": 10.153895581071263
            },
            "top3_scores": [
                {
                    "score": "2-1",
                    "probability": 10.153895581071263
                }
            ],
            "poisson_matrix": [
                [
                    4.64,
                    4.5,
                    2.3,
                    0.77,
                    0.19,
                    0.04,
                    0.01
                ],
                [
                    9.22,
                    9.67,
                    4.81,
                    1.62,
                    0.41,
                    0.08,
                    0.01
                ],
                [
                    9.92,
                    10.0,
                    5.04,
                    1.69,
                    0.43,
                    0.09,
                    0.01
                ],
                [
                    6.92,
                    6.98,
                    3.52,
                    1.18,
                    0.3,
                    0.06,
                    0.01
                ],
                [
                    3.63,
                    3.66,
                    1.84,
                    0.62,
                    0.16,
                    0.03,
                    0.01
                ],
                [
                    1.52,
                    1.53,
                    0.77,
                    0.26,
                    0.07,
                    0.01,
                    0.0
                ],
                [
                    0.53,
                    0.53,
                    0.27,
                    0.09,
                    0.02,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 2.09 vs 1.01.",
            "lambdas": {
                "home": 2.0946426425123312,
                "away": 1.0084041618046191
            },
            "home_metrics": {
                "xg": 4.73,
                "xga": 0.38,
                "ppg": 1.62,
                "win_rate": 44.2
            },
            "away_metrics": {
                "xg": 3.16,
                "xga": 0.44,
                "ppg": 0.92,
                "win_rate": 21.3
            }
        },
        {
            "home": "Crystal Palace",
            "away": "Nottingham Forest",
            "probabilities": {
                "home_win": 30.024203658103943,
                "draw": 26.107648015022278,
                "away_win": 43.86814534664154
            },
            "poisson_1x2": {
                "home_win": 30.024203658103943,
                "draw": 26.107648015022278,
                "away_win": 43.86814534664154
            },
            "exact_score": {
                "score": "1-1",
                "probability": 13.125501389459867
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 13.125501389459867
                }
            ],
            "poisson_matrix": [
                [
                    8.81,
                    10.97,
                    7.19,
                    3.09,
                    1.0,
                    0.26,
                    0.06
                ],
                [
                    9.87,
                    13.09,
                    8.34,
                    3.58,
                    1.16,
                    0.3,
                    0.06
                ],
                [
                    5.8,
                    7.49,
                    4.83,
                    2.08,
                    0.67,
                    0.17,
                    0.04
                ],
                [
                    2.24,
                    2.89,
                    1.86,
                    0.8,
                    0.26,
                    0.07,
                    0.01
                ],
                [
                    0.65,
                    0.84,
                    0.54,
                    0.23,
                    0.07,
                    0.02,
                    0.0
                ],
                [
                    0.15,
                    0.19,
                    0.13,
                    0.05,
                    0.02,
                    0.0,
                    0.0
                ],
                [
                    0.03,
                    0.04,
                    0.02,
                    0.01,
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.16 vs 1.29.",
            "lambdas": {
                "home": 1.1586252060528794,
                "away": 1.2899435060312796
            },
            "home_metrics": {
                "xg": 3.29,
                "xga": 0.43,
                "ppg": 1.11,
                "win_rate": 27.0
            },
            "away_metrics": {
                "xg": 3.54,
                "xga": 0.35,
                "ppg": 1.24,
                "win_rate": 30.8
            }
        },
        {
            "home": "Hull City",
            "away": "Everton",
            "probabilities": {
                "home_win": 30.15698492527008,
                "draw": 39.06140923500061,
                "away_win": 30.78160583972931
            },
            "poisson_1x2": {
                "home_win": 30.15698492527008,
                "draw": 39.06140923500061,
                "away_win": 30.78160583972931
            },
            "exact_score": {
                "score": "1-0",
                "probability": 18.809856549058143
            },
            "top3_scores": [
                {
                    "score": "1-0",
                    "probability": 18.809856549058143
                }
            ],
            "poisson_matrix": [
                [
                    18.41,
                    11.9,
                    3.94,
                    0.86,
                    0.14,
                    0.02,
                    0.0
                ],
                [
                    18.8,
                    12.69,
                    4.12,
                    0.9,
                    0.15,
                    0.02,
                    0.0
                ],
                [
                    9.95,
                    6.54,
                    2.15,
                    0.47,
                    0.08,
                    0.01,
                    0.0
                ],
                [
                    3.46,
                    2.28,
                    0.75,
                    0.16,
                    0.03,
                    0.0,
                    0.0
                ],
                [
                    0.9,
                    0.59,
                    0.2,
                    0.04,
                    0.01,
                    0.0,
                    0.0
                ],
                [
                    0.19,
                    0.12,
                    0.04,
                    0.01,
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.03,
                    0.02,
                    0.01,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.04 vs 0.66.",
            "lambdas": {
                "home": 1.0441625433853894,
                "away": 0.6575663434063989
            },
            "home_metrics": {
                "xg": 3.14,
                "xga": 0.24,
                "ppg": 1.56,
                "win_rate": 38.4
            },
            "away_metrics": {
                "xg": 3.28,
                "xga": 0.33,
                "ppg": 1.35,
                "win_rate": 33.0
            }
        },
        {
            "home": "Liverpool",
            "away": "Manchester City",
            "probabilities": {
                "home_win": 32.414257526397705,
                "draw": 21.72284573316574,
                "away_win": 45.86289823055267
            },
            "poisson_1x2": {
                "home_win": 32.414257526397705,
                "draw": 21.72284573316574,
                "away_win": 45.86289823055267
            },
            "exact_score": {
                "score": "1-1",
                "probability": 11.253518977005486
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 11.253518977005486
                }
            ],
            "poisson_matrix": [
                [
                    5.08,
                    8.16,
                    7.05,
                    3.97,
                    1.68,
                    0.57,
                    0.16
                ],
                [
                    6.42,
                    11.16,
                    9.31,
                    5.24,
                    2.21,
                    0.75,
                    0.21
                ],
                [
                    4.31,
                    7.28,
                    6.15,
                    3.46,
                    1.46,
                    0.49,
                    0.14
                ],
                [
                    1.9,
                    3.21,
                    2.71,
                    1.52,
                    0.64,
                    0.22,
                    0.06
                ],
                [
                    0.63,
                    1.06,
                    0.89,
                    0.5,
                    0.21,
                    0.07,
                    0.02
                ],
                [
                    0.17,
                    0.28,
                    0.24,
                    0.13,
                    0.06,
                    0.02,
                    0.01
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
            "analysis": "Partido dominado por tasa 1.32 vs 1.69.",
            "lambdas": {
                "home": 1.3209919944642516,
                "away": 1.689023204570936
            },
            "home_metrics": {
                "xg": 4.69,
                "xga": 0.35,
                "ppg": 1.7,
                "win_rate": 45.7
            },
            "away_metrics": {
                "xg": 5.76,
                "xga": 0.28,
                "ppg": 2.24,
                "win_rate": 67.9
            }
        },
        {
            "home": "Coventry City",
            "away": "Newcastle United",
            "probabilities": {
                "home_win": 5.456868931651115,
                "draw": 23.422949016094208,
                "away_win": 71.12018465995789
            },
            "poisson_1x2": {
                "home_win": 5.456868931651115,
                "draw": 23.422949016094208,
                "away_win": 71.12018465995789
            },
            "exact_score": {
                "score": "0-1",
                "probability": 20.98377033408532
            },
            "top3_scores": [
                {
                    "score": "0-1",
                    "probability": 20.98377033408532
                }
            ],
            "poisson_matrix": [
                [
                    11.95,
                    20.82,
                    19.15,
                    11.48,
                    5.16,
                    1.85,
                    0.56
                ],
                [
                    4.02,
                    7.35,
                    6.52,
                    3.91,
                    1.76,
                    0.63,
                    0.19
                ],
                [
                    0.69,
                    1.24,
                    1.11,
                    0.67,
                    0.3,
                    0.11,
                    0.03
                ],
                [
                    0.08,
                    0.14,
                    0.13,
                    0.08,
                    0.03,
                    0.01,
                    0.0
                ],
                [
                    0.01,
                    0.01,
                    0.01,
                    0.01,
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 0.34 vs 1.80.",
            "lambdas": {
                "home": 0.3406678956113224,
                "away": 1.7975451408322891
            },
            "home_metrics": {
                "xg": 0.8,
                "xga": 0.47,
                "ppg": 0.63,
                "win_rate": 21.1
            },
            "away_metrics": {
                "xg": 4.52,
                "xga": 0.43,
                "ppg": 1.42,
                "win_rate": 40.7
            }
        }
    ]
};
