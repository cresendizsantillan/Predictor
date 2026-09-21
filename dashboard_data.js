const dashboardData = {
    "metadata": {
        "title": "Lobo Picks Predictor (MLE + XGBoost)",
        "matchweek": 6,
        "matchweek_dates": "10-12 Octubre 2026",
        "teams_loaded": 29,
        "matches_count": 3,
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
        "Ipswich": {
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
        "Leeds": {
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
        "Man City": {
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
        "Man United": {
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
        "Newcastle": {
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
        "Nott'm Forest": {
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
        "Tottenham": {
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
        }
    },
    "matches": [
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
        }
    ]
};
