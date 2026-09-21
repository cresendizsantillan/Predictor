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
        "Coventry City": {
            "gf_per90": 0.0,
            "ga_per90": 2.52,
            "xg_per90": 0.01,
            "xga_per90": 0.39,
            "ppg": 0.0,
            "win_rate": 0.0,
            "draw_rate": 0.0,
            "loss_rate": 100.0,
            "xg_diff": -0.38,
            "total_matches": 4
        },
        "Bournemouth": {
            "gf_per90": 1.5,
            "ga_per90": 1.39,
            "xg_per90": 6.52,
            "xga_per90": 0.25,
            "ppg": 1.39,
            "win_rate": 29.7,
            "draw_rate": 49.7,
            "loss_rate": 20.6,
            "xg_diff": 6.27,
            "total_matches": 156
        },
        "Fulham": {
            "gf_per90": 1.2,
            "ga_per90": 1.4,
            "xg_per90": 5.08,
            "xga_per90": 0.25,
            "ppg": 1.19,
            "win_rate": 33.0,
            "draw_rate": 20.3,
            "loss_rate": 46.7,
            "xg_diff": 4.83,
            "total_matches": 156
        },
        "Newcastle United": {
            "gf_per90": 1.57,
            "ga_per90": 1.54,
            "xg_per90": 6.73,
            "xga_per90": 0.28,
            "ppg": 1.35,
            "win_rate": 38.1,
            "draw_rate": 21.1,
            "loss_rate": 40.8,
            "xg_diff": 6.45,
            "total_matches": 194
        },
        "Leeds United": {
            "gf_per90": 1.4,
            "ga_per90": 1.27,
            "xg_per90": 6.0,
            "xga_per90": 0.23,
            "ppg": 1.44,
            "win_rate": 34.3,
            "draw_rate": 40.5,
            "loss_rate": 25.1,
            "xg_diff": 5.78,
            "total_matches": 118
        },
        "Hull City": {
            "gf_per90": 1.25,
            "ga_per90": 0.52,
            "xg_per90": 4.65,
            "xga_per90": 0.11,
            "ppg": 1.97,
            "win_rate": 48.7,
            "draw_rate": 51.3,
            "loss_rate": 0.0,
            "xg_diff": 4.54,
            "total_matches": 4
        },
        "Ipswich Town": {
            "gf_per90": 1.35,
            "ga_per90": 2.36,
            "xg_per90": 5.69,
            "xga_per90": 0.43,
            "ppg": 1.03,
            "win_rate": 30.3,
            "draw_rate": 11.6,
            "loss_rate": 58.1,
            "xg_diff": 5.27,
            "total_matches": 42
        },
        "Manchester City": {
            "gf_per90": 2.01,
            "ga_per90": 0.87,
            "xg_per90": 8.16,
            "xga_per90": 0.17,
            "ppg": 2.2,
            "win_rate": 66.5,
            "draw_rate": 20.9,
            "loss_rate": 12.6,
            "xg_diff": 7.99,
            "total_matches": 194
        },
        "Nottingham Forest": {
            "gf_per90": 1.35,
            "ga_per90": 1.25,
            "xg_per90": 5.72,
            "xga_per90": 0.22,
            "ppg": 1.29,
            "win_rate": 32.2,
            "draw_rate": 32.5,
            "loss_rate": 35.3,
            "xg_diff": 5.5,
            "total_matches": 156
        },
        "Liverpool": {
            "gf_per90": 1.75,
            "ga_per90": 1.29,
            "xg_per90": 7.24,
            "xga_per90": 0.24,
            "ppg": 1.64,
            "win_rate": 43.4,
            "draw_rate": 33.9,
            "loss_rate": 22.7,
            "xg_diff": 7.0,
            "total_matches": 194
        },
        "Chelsea": {
            "gf_per90": 1.64,
            "ga_per90": 1.54,
            "xg_per90": 7.37,
            "xga_per90": 0.28,
            "ppg": 1.44,
            "win_rate": 39.8,
            "draw_rate": 24.5,
            "loss_rate": 35.6,
            "xg_diff": 7.09,
            "total_matches": 194
        },
        "Everton": {
            "gf_per90": 1.24,
            "ga_per90": 1.25,
            "xg_per90": 5.21,
            "xga_per90": 0.22,
            "ppg": 1.28,
            "win_rate": 30.2,
            "draw_rate": 37.0,
            "loss_rate": 32.8,
            "xg_diff": 4.98,
            "total_matches": 194
        },
        "Aston Villa": {
            "gf_per90": 1.35,
            "ga_per90": 1.42,
            "xg_per90": 6.02,
            "xga_per90": 0.25,
            "ppg": 1.46,
            "win_rate": 41.6,
            "draw_rate": 21.7,
            "loss_rate": 36.7,
            "xg_diff": 5.76,
            "total_matches": 194
        },
        "Brighton": {
            "gf_per90": 1.73,
            "ga_per90": 1.28,
            "xg_per90": 7.17,
            "xga_per90": 0.24,
            "ppg": 1.49,
            "win_rate": 40.7,
            "draw_rate": 26.8,
            "loss_rate": 32.5,
            "xg_diff": 6.93,
            "total_matches": 194
        },
        "Arsenal": {
            "gf_per90": 1.88,
            "ga_per90": 0.68,
            "xg_per90": 7.57,
            "xga_per90": 0.13,
            "ppg": 2.32,
            "win_rate": 71.4,
            "draw_rate": 17.3,
            "loss_rate": 11.2,
            "xg_diff": 7.44,
            "total_matches": 194
        },
        "Manchester United": {
            "gf_per90": 1.71,
            "ga_per90": 1.37,
            "xg_per90": 7.35,
            "xga_per90": 0.25,
            "ppg": 1.65,
            "win_rate": 46.1,
            "draw_rate": 26.3,
            "loss_rate": 27.6,
            "xg_diff": 7.1,
            "total_matches": 194
        },
        "Brentford": {
            "gf_per90": 1.52,
            "ga_per90": 1.32,
            "xg_per90": 6.5,
            "xga_per90": 0.24,
            "ppg": 1.39,
            "win_rate": 33.4,
            "draw_rate": 39.2,
            "loss_rate": 27.4,
            "xg_diff": 6.26,
            "total_matches": 194
        },
        "Tottenham Hotspur": {
            "gf_per90": 1.09,
            "ga_per90": 1.54,
            "xg_per90": 4.68,
            "xga_per90": 0.28,
            "ppg": 0.96,
            "win_rate": 22.3,
            "draw_rate": 29.5,
            "loss_rate": 48.3,
            "xg_diff": 4.41,
            "total_matches": 194
        },
        "Sunderland": {
            "gf_per90": 1.05,
            "ga_per90": 1.32,
            "xg_per90": 4.51,
            "xga_per90": 0.23,
            "ppg": 1.33,
            "win_rate": 34.6,
            "draw_rate": 29.4,
            "loss_rate": 36.1,
            "xg_diff": 4.28,
            "total_matches": 42
        },
        "Crystal Palace": {
            "gf_per90": 1.22,
            "ga_per90": 1.65,
            "xg_per90": 5.19,
            "xga_per90": 0.3,
            "ppg": 1.12,
            "win_rate": 28.2,
            "draw_rate": 27.0,
            "loss_rate": 44.8,
            "xg_diff": 4.89,
            "total_matches": 194
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
                "xg": 7.57,
                "xga": 0.13,
                "ppg": 2.32,
                "win_rate": 71.4
            },
            "away_metrics": {
                "xg": 6.0,
                "xga": 0.23,
                "ppg": 1.44,
                "win_rate": 34.3
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
                "xg": 6.02,
                "xga": 0.25,
                "ppg": 1.46,
                "win_rate": 41.6
            },
            "away_metrics": {
                "xg": 6.5,
                "xga": 0.24,
                "ppg": 1.39,
                "win_rate": 33.4
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
                "xg": 7.37,
                "xga": 0.28,
                "ppg": 1.44,
                "win_rate": 39.8
            },
            "away_metrics": {
                "xg": 6.52,
                "xga": 0.25,
                "ppg": 1.39,
                "win_rate": 29.7
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
                "xg": 5.69,
                "xga": 0.43,
                "ppg": 1.03,
                "win_rate": 30.3
            },
            "away_metrics": {
                "xg": 5.08,
                "xga": 0.25,
                "ppg": 1.19,
                "win_rate": 33.0
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
                "xg": 4.51,
                "xga": 0.23,
                "ppg": 1.33,
                "win_rate": 34.6
            },
            "away_metrics": {
                "xg": 7.17,
                "xga": 0.24,
                "ppg": 1.49,
                "win_rate": 40.7
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
                "xg": 7.35,
                "xga": 0.25,
                "ppg": 1.65,
                "win_rate": 46.1
            },
            "away_metrics": {
                "xg": 4.68,
                "xga": 0.28,
                "ppg": 0.96,
                "win_rate": 22.3
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
                "xg": 5.19,
                "xga": 0.3,
                "ppg": 1.12,
                "win_rate": 28.2
            },
            "away_metrics": {
                "xg": 5.72,
                "xga": 0.22,
                "ppg": 1.29,
                "win_rate": 32.2
            }
        },
        {
            "home": "Hull City",
            "away": "Everton",
            "probabilities": {
                "home_win": 44.731685519218445,
                "draw": 39.13540840148926,
                "away_win": 16.132906079292297
            },
            "poisson_1x2": {
                "home_win": 44.731685519218445,
                "draw": 39.13540840148926,
                "away_win": 16.132906079292297
            },
            "exact_score": {
                "score": "1-0",
                "probability": 22.12148854306198
            },
            "top3_scores": [
                {
                    "score": "1-0",
                    "probability": 22.12148854306198
                }
            ],
            "poisson_matrix": [
                [
                    21.83,
                    10.53,
                    2.61,
                    0.43,
                    0.05,
                    0.01,
                    0.0
                ],
                [
                    22.11,
                    11.26,
                    2.71,
                    0.44,
                    0.05,
                    0.01,
                    0.0
                ],
                [
                    11.73,
                    5.76,
                    1.41,
                    0.23,
                    0.03,
                    0.0,
                    0.0
                ],
                [
                    4.07,
                    2.0,
                    0.49,
                    0.08,
                    0.01,
                    0.0,
                    0.0
                ],
                [
                    1.06,
                    0.52,
                    0.13,
                    0.02,
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.22,
                    0.11,
                    0.03,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ],
                [
                    0.04,
                    0.02,
                    0.0,
                    0.0,
                    0.0,
                    0.0,
                    0.0
                ]
            ],
            "analysis": "Partido dominado por tasa 1.04 vs 0.49.",
            "lambdas": {
                "home": 1.0413692259737035,
                "away": 0.49093530417084125
            },
            "home_metrics": {
                "xg": 4.65,
                "xga": 0.11,
                "ppg": 1.97,
                "win_rate": 48.7
            },
            "away_metrics": {
                "xg": 5.21,
                "xga": 0.22,
                "ppg": 1.28,
                "win_rate": 30.2
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
                "xg": 7.24,
                "xga": 0.24,
                "ppg": 1.64,
                "win_rate": 43.4
            },
            "away_metrics": {
                "xg": 8.16,
                "xga": 0.17,
                "ppg": 2.2,
                "win_rate": 66.5
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
                "score": "0-2",
                "probability": 27.752031130868577
            },
            "top3_scores": [
                {
                    "score": "0-2",
                    "probability": 27.752031130868577
                }
            ],
            "poisson_matrix": [
                [
                    11.1,
                    23.62,
                    27.25,
                    20.12,
                    11.15,
                    4.94,
                    1.82
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
            "analysis": "Partido dominado por tasa 0.00 vs 2.22.",
            "lambdas": {
                "home": 1.126037238399197e-06,
                "away": 2.215910171750705
            },
            "home_metrics": {
                "xg": 0.01,
                "xga": 0.39,
                "ppg": 0.0,
                "win_rate": 0.0
            },
            "away_metrics": {
                "xg": 6.73,
                "xga": 0.28,
                "ppg": 1.35,
                "win_rate": 38.1
            }
        }
    ]
};
