const dashboardData = {
    "metadata": {
        "title": "Lobo Picks Predictor (MLE + XGBoost)",
        "matchweek": 6,
        "matchweek_dates": "10-12 Octubre 2026",
        "teams_loaded": 31,
        "matches_count": 10,
        "league_avg_goals": 2.8,
        "halflife_days": 180,
        "history_note": "Modelo Dixon-Coles Bivariado ajustado con XGBoost."
    },
    "team_metrics": {
        "Arsenal": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Aston Villa": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Bournemouth": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Brentford": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Brighton": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Burnley": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Chelsea": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Coventry": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Crystal Palace": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Everton": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Fulham": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Hull": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Ipswich Town": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Leeds United": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Leicester": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Liverpool": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Luton": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Manchester City": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Manchester United": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Newcastle United": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Norwich": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Nottingham Forest": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Sheffield United": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Southampton": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Sunderland": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Tottenham Hotspur": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Watford": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "West Ham": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Wolves": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Hull City": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        },
        "Coventry City": {
            "gf_per90": 1.5,
            "ga_per90": 1.5,
            "xg_per90": 1.5,
            "xga_per90": 1.5,
            "ppg": 1.5,
            "win_rate": 33.3,
            "draw_rate": 33.3,
            "loss_rate": 33.4,
            "xg_diff": 0.0,
            "total_matches": 38
        }
    },
    "matches": [
        {
            "home": "Arsenal",
            "away": "Leeds United",
            "probabilities": {
                "home_win": 64.22057747840881,
                "draw": 28.219008445739746,
                "away_win": 7.56041556596756
            },
            "poisson_1x2": {
                "home_win": 64.22057747840881,
                "draw": 28.219008445739746,
                "away_win": 7.56041556596756
            },
            "exact_score": {
                "score": "1-0",
                "probability": 15.584991488165548
            },
            "top3_scores": [
                {
                    "score": "1-0",
                    "probability": 15.584991488165548
                }
            ],
            "poisson_matrix": [
                [
                    9.52,
                    6.12,
                    2.05,
                    0.45,
                    0.08,
                    0.01,
                    0.0
                ],
                [
                    15.49,
                    10.79,
                    3.52,
                    0.78,
                    0.13,
                    0.02,
                    0.0
                ],
                [
                    13.67,
                    9.07,
                    3.01,
                    0.67,
                    0.11,
                    0.01,
                    0.0
                ],
                [
                    7.8,
                    5.18,
                    1.72,
                    0.38,
                    0.06,
                    0.01,
                    0.0
                ],
                [
                    3.34,
                    2.22,
                    0.74,
                    0.16,
                    0.03,
                    0.0,
                    0.0
                ],
                [
                    1.14,
                    0.76,
                    0.25,
                    0.06,
                    0.01,
                    0.0,
                    0.0
                ],
                [
                    0.33,
                    0.22,
                    0.07,
                    0.02,
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.71 vs 0.66.",
            "lambdas": {
                "home": 1.7121814884522946,
                "away": 0.6636112513459489
            },
            "home_metrics": {
                "xg": 1.7121814884522946,
                "xga": 0.6636112513459489,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 0.6636112513459489,
                "xga": 1.7121814884522946,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        },
        {
            "home": "Aston Villa",
            "away": "Brentford",
            "probabilities": {
                "home_win": 33.98751616477966,
                "draw": 32.58923292160034,
                "away_win": 33.423250913619995
            },
            "poisson_1x2": {
                "home_win": 33.98751616477966,
                "draw": 32.58923292160034,
                "away_win": 33.423250913619995
            },
            "exact_score": {
                "score": "1-1",
                "probability": 12.001961979575249
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 12.001961979575249
                }
            ],
            "poisson_matrix": [
                [
                    5.95,
                    7.83,
                    5.62,
                    2.62,
                    0.92,
                    0.26,
                    0.06
                ],
                [
                    8.16,
                    11.93,
                    8.21,
                    3.83,
                    1.34,
                    0.38,
                    0.09
                ],
                [
                    6.11,
                    8.56,
                    5.99,
                    2.79,
                    0.98,
                    0.27,
                    0.06
                ],
                [
                    2.97,
                    4.16,
                    2.91,
                    1.36,
                    0.48,
                    0.13,
                    0.03
                ],
                [
                    1.08,
                    1.52,
                    1.06,
                    0.5,
                    0.17,
                    0.05,
                    0.01
                ],
                [
                    0.32,
                    0.44,
                    0.31,
                    0.14,
                    0.05,
                    0.01,
                    0.0
                ],
                [
                    0.08,
                    0.11,
                    0.08,
                    0.04,
                    0.01,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.46 vs 1.40.",
            "lambdas": {
                "home": 1.4594262443940886,
                "away": 1.4000484219070093
            },
            "home_metrics": {
                "xg": 1.4594262443940886,
                "xga": 1.4000484219070093,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 1.4000484219070093,
                "xga": 1.4594262443940886,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        },
        {
            "home": "Chelsea",
            "away": "Bournemouth",
            "probabilities": {
                "home_win": 38.49554657936096,
                "draw": 38.8698935508728,
                "away_win": 22.634558379650116
            },
            "poisson_1x2": {
                "home_win": 38.49554657936096,
                "draw": 38.8698935508728,
                "away_win": 22.634558379650116
            },
            "exact_score": {
                "score": "1-1",
                "probability": 10.070360332968741
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 10.070360332968741
                }
            ],
            "poisson_matrix": [
                [
                    3.66,
                    5.23,
                    4.14,
                    2.13,
                    0.82,
                    0.25,
                    0.06
                ],
                [
                    6.13,
                    9.95,
                    7.53,
                    3.87,
                    1.49,
                    0.46,
                    0.12
                ],
                [
                    5.77,
                    8.89,
                    6.85,
                    3.52,
                    1.36,
                    0.42,
                    0.11
                ],
                [
                    3.5,
                    5.39,
                    4.15,
                    2.13,
                    0.82,
                    0.25,
                    0.07
                ],
                [
                    1.59,
                    2.45,
                    1.89,
                    0.97,
                    0.37,
                    0.12,
                    0.03
                ],
                [
                    0.58,
                    0.89,
                    0.69,
                    0.35,
                    0.14,
                    0.04,
                    0.01
                ],
                [
                    0.18,
                    0.27,
                    0.21,
                    0.11,
                    0.04,
                    0.01,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.82 vs 1.54.",
            "lambdas": {
                "home": 1.8187019170670513,
                "away": 1.5415358833882702
            },
            "home_metrics": {
                "xg": 1.8187019170670513,
                "xga": 1.5415358833882702,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 1.5415358833882702,
                "xga": 1.8187019170670513,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        },
        {
            "home": "Ipswich Town",
            "away": "Fulham",
            "probabilities": {
                "home_win": 25.067245960235596,
                "draw": 29.597997665405273,
                "away_win": 45.33475339412689
            },
            "poisson_1x2": {
                "home_win": 25.067245960235596,
                "draw": 29.597997665405273,
                "away_win": 45.33475339412689
            },
            "exact_score": {
                "score": "1-1",
                "probability": 10.364194542908399
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 10.364194542908399
                }
            ],
            "poisson_matrix": [
                [
                    4.02,
                    6.81,
                    6.46,
                    3.95,
                    1.81,
                    0.66,
                    0.2
                ],
                [
                    5.35,
                    10.25,
                    9.23,
                    5.64,
                    2.59,
                    0.95,
                    0.29
                ],
                [
                    3.92,
                    7.2,
                    6.6,
                    4.03,
                    1.85,
                    0.68,
                    0.21
                ],
                [
                    1.87,
                    3.43,
                    3.14,
                    1.92,
                    0.88,
                    0.32,
                    0.1
                ],
                [
                    0.67,
                    1.23,
                    1.12,
                    0.69,
                    0.31,
                    0.12,
                    0.04
                ],
                [
                    0.19,
                    0.35,
                    0.32,
                    0.2,
                    0.09,
                    0.03,
                    0.01
                ],
                [
                    0.05,
                    0.08,
                    0.08,
                    0.05,
                    0.02,
                    0.01,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.43 vs 1.83.",
            "lambdas": {
                "home": 1.4296131464300659,
                "away": 1.8335656843334107
            },
            "home_metrics": {
                "xg": 1.4296131464300659,
                "xga": 1.8335656843334107,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 1.8335656843334107,
                "xga": 1.4296131464300659,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        },
        {
            "home": "Sunderland",
            "away": "Brighton",
            "probabilities": {
                "home_win": 27.285709977149963,
                "draw": 35.6855034828186,
                "away_win": 37.02878654003143
            },
            "poisson_1x2": {
                "home_win": 27.285709977149963,
                "draw": 35.6855034828186,
                "away_win": 37.02878654003143
            },
            "exact_score": {
                "score": "1-1",
                "probability": 12.874275459974193
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 12.874275459974193
                }
            ],
            "poisson_matrix": [
                [
                    8.37,
                    11.24,
                    8.16,
                    3.85,
                    1.36,
                    0.39,
                    0.09
                ],
                [
                    8.73,
                    12.83,
                    8.92,
                    4.21,
                    1.49,
                    0.42,
                    0.1
                ],
                [
                    4.87,
                    6.89,
                    4.88,
                    2.3,
                    0.81,
                    0.23,
                    0.05
                ],
                [
                    1.77,
                    2.51,
                    1.78,
                    0.84,
                    0.3,
                    0.08,
                    0.02
                ],
                [
                    0.48,
                    0.69,
                    0.49,
                    0.23,
                    0.08,
                    0.02,
                    0.01
                ],
                [
                    0.11,
                    0.15,
                    0.11,
                    0.05,
                    0.02,
                    0.01,
                    0.0
                ],
                [
                    0.02,
                    0.03,
                    0.02,
                    0.01,
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.09 vs 1.42.",
            "lambdas": {
                "home": 1.092997522778079,
                "away": 1.4155557733834692
            },
            "home_metrics": {
                "xg": 1.092997522778079,
                "xga": 1.4155557733834692,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 1.4155557733834692,
                "xga": 1.092997522778079,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        },
        {
            "home": "Manchester United",
            "away": "Tottenham Hotspur",
            "probabilities": {
                "home_win": 71.12748622894287,
                "draw": 21.344532072544098,
                "away_win": 7.527981698513031
            },
            "poisson_1x2": {
                "home_win": 71.12748622894287,
                "draw": 21.344532072544098,
                "away_win": 7.527981698513031
            },
            "exact_score": {
                "score": "2-0",
                "probability": 10.244665792081685
            },
            "top3_scores": [
                {
                    "score": "2-0",
                    "probability": 10.244665792081685
                }
            ],
            "poisson_matrix": [
                [
                    5.07,
                    4.76,
                    2.4,
                    0.79,
                    0.2,
                    0.04,
                    0.01
                ],
                [
                    9.59,
                    10.03,
                    4.88,
                    1.61,
                    0.4,
                    0.08,
                    0.01
                ],
                [
                    10.11,
                    10.01,
                    4.96,
                    1.64,
                    0.41,
                    0.08,
                    0.01
                ],
                [
                    6.85,
                    6.78,
                    3.36,
                    1.11,
                    0.27,
                    0.05,
                    0.01
                ],
                [
                    3.48,
                    3.45,
                    1.71,
                    0.56,
                    0.14,
                    0.03,
                    0.0
                ],
                [
                    1.41,
                    1.4,
                    0.69,
                    0.23,
                    0.06,
                    0.01,
                    0.0
                ],
                [
                    0.48,
                    0.47,
                    0.24,
                    0.08,
                    0.02,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 2.03 vs 0.99.",
            "lambdas": {
                "home": 2.0321648227530975,
                "away": 0.990743147439599
            },
            "home_metrics": {
                "xg": 2.0321648227530975,
                "xga": 0.990743147439599,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 0.990743147439599,
                "xga": 2.0321648227530975,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        },
        {
            "home": "Crystal Palace",
            "away": "Nottingham Forest",
            "probabilities": {
                "home_win": 28.168568015098572,
                "draw": 39.71450626850128,
                "away_win": 32.11692273616791
            },
            "poisson_1x2": {
                "home_win": 28.168568015098572,
                "draw": 39.71450626850128,
                "away_win": 32.11692273616791
            },
            "exact_score": {
                "score": "1-1",
                "probability": 12.715934363208689
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 12.715934363208689
                }
            ],
            "poisson_matrix": [
                [
                    7.69,
                    10.41,
                    7.65,
                    3.65,
                    1.31,
                    0.37,
                    0.09
                ],
                [
                    8.51,
                    12.67,
                    8.91,
                    4.25,
                    1.52,
                    0.44,
                    0.1
                ],
                [
                    5.06,
                    7.25,
                    5.19,
                    2.47,
                    0.89,
                    0.25,
                    0.06
                ],
                [
                    1.97,
                    2.81,
                    2.01,
                    0.96,
                    0.34,
                    0.1,
                    0.02
                ],
                [
                    0.57,
                    0.82,
                    0.59,
                    0.28,
                    0.1,
                    0.03,
                    0.01
                ],
                [
                    0.13,
                    0.19,
                    0.14,
                    0.07,
                    0.02,
                    0.01,
                    0.0
                ],
                [
                    0.03,
                    0.04,
                    0.03,
                    0.01,
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.16 vs 1.43.",
            "lambdas": {
                "home": 1.1646569568337566,
                "away": 1.4313649686468535
            },
            "home_metrics": {
                "xg": 1.1646569568337566,
                "xga": 1.4313649686468535,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 1.4313649686468535,
                "xga": 1.1646569568337566,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        },
        {
            "home": "Hull City",
            "away": "Everton",
            "probabilities": {
                "home_win": 4.350053891539574,
                "draw": 11.92639172077179,
                "away_win": 83.72355103492737
            },
            "poisson_1x2": {
                "home_win": 4.350053891539574,
                "draw": 11.92639172077179,
                "away_win": 83.72355103492737
            },
            "exact_score": {
                "score": "0-4",
                "probability": 20.55958481300776
            },
            "top3_scores": [
                {
                    "score": "0-4",
                    "probability": 20.55958481300776
                }
            ],
            "poisson_matrix": [
                [
                    1.13,
                    4.52,
                    10.81,
                    15.89,
                    17.52,
                    15.45,
                    11.36
                ],
                [
                    0.29,
                    1.32,
                    2.86,
                    4.2,
                    4.63,
                    4.08,
                    3.0
                ],
                [
                    0.04,
                    0.17,
                    0.38,
                    0.55,
                    0.61,
                    0.54,
                    0.4
                ],
                [
                    0.0,
                    0.02,
                    0.03,
                    0.05,
                    0.05,
                    0.05,
                    0.03
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
            "analysis": "Partido dominado por tasa 0.26 vs 4.41.",
            "lambdas": {
                "home": 0.2642520109875316,
                "away": 4.409953394238823
            },
            "home_metrics": {
                "xg": 0.2642520109875316,
                "xga": 4.409953394238823,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 4.409953394238823,
                "xga": 0.2642520109875316,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        },
        {
            "home": "Liverpool",
            "away": "Manchester City",
            "probabilities": {
                "home_win": 38.35349678993225,
                "draw": 21.087898313999176,
                "away_win": 40.558603405952454
            },
            "poisson_1x2": {
                "home_win": 38.35349678993225,
                "draw": 21.087898313999176,
                "away_win": 40.558603405952454
            },
            "exact_score": {
                "score": "1-1",
                "probability": 11.776611431927767
            },
            "top3_scores": [
                {
                    "score": "1-1",
                    "probability": 11.776611431927767
                }
            ],
            "poisson_matrix": [
                [
                    6.04,
                    9.33,
                    7.92,
                    4.35,
                    1.79,
                    0.59,
                    0.16
                ],
                [
                    6.83,
                    11.7,
                    9.47,
                    5.2,
                    2.14,
                    0.71,
                    0.19
                ],
                [
                    4.17,
                    6.87,
                    5.66,
                    3.11,
                    1.28,
                    0.42,
                    0.12
                ],
                [
                    1.66,
                    2.74,
                    2.26,
                    1.24,
                    0.51,
                    0.17,
                    0.05
                ],
                [
                    0.5,
                    0.82,
                    0.68,
                    0.37,
                    0.15,
                    0.05,
                    0.01
                ],
                [
                    0.12,
                    0.2,
                    0.16,
                    0.09,
                    0.04,
                    0.01,
                    0.0
                ],
                [
                    0.02,
                    0.04,
                    0.03,
                    0.02,
                    0.01,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.20 vs 1.65.",
            "lambdas": {
                "home": 1.1961195679806218,
                "away": 1.6477940785248941
            },
            "home_metrics": {
                "xg": 1.1961195679806218,
                "xga": 1.6477940785248941,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 1.6477940785248941,
                "xga": 1.1961195679806218,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        },
        {
            "home": "Coventry City",
            "away": "Newcastle United",
            "probabilities": {
                "home_win": 4.350053891539574,
                "draw": 11.92639172077179,
                "away_win": 83.72355103492737
            },
            "poisson_1x2": {
                "home_win": 4.350053891539574,
                "draw": 11.92639172077179,
                "away_win": 83.72355103492737
            },
            "exact_score": {
                "score": "0-5",
                "probability": 24.469537785768075
            },
            "top3_scores": [
                {
                    "score": "0-5",
                    "probability": 24.469537785768075
                }
            ],
            "poisson_matrix": [
                [
                    0.38,
                    1.89,
                    6.0,
                    11.39,
                    16.23,
                    18.5,
                    17.57
                ],
                [
                    0.12,
                    0.7,
                    1.97,
                    3.74,
                    5.33,
                    6.07,
                    5.77
                ],
                [
                    0.02,
                    0.11,
                    0.32,
                    0.61,
                    0.87,
                    1.0,
                    0.95
                ],
                [
                    0.0,
                    0.01,
                    0.04,
                    0.07,
                    0.1,
                    0.11,
                    0.1
                ],
                [
                    0.0,
                    0.0,
                    0.0,
                    0.01,
                    0.01,
                    0.01,
                    0.01
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
            "analysis": "Partido dominado por tasa 0.33 vs 5.70.",
            "lambdas": {
                "home": 0.3281498464768317,
                "away": 5.699204152901667
            },
            "home_metrics": {
                "xg": 0.3281498464768317,
                "xga": 5.699204152901667,
                "ppg": 1.5,
                "win_rate": 50.0
            },
            "away_metrics": {
                "xg": 5.699204152901667,
                "xga": 0.3281498464768317,
                "ppg": 1.5,
                "win_rate": 50.0
            }
        }
    ]
};
