// Fixture data
if (Players.find().count() === 0) {
    var now = new Date().getTime();

    // create two players
    Players.insert({
        score: 0,
        turns: 5
    });

    Players.insert({
        score: 0,
        turns: 5
    });


    // create two actors
    var kaiId = Actors.insert({
        name: 'Kai',
        position: 'Left Arm',
        mood: 'Neutral',
        morale: 0
    });

    var dimitriId = Actors.insert({
        name: 'Dimitri',
        position: 'Right Arm',
        mood: 'Neutral',
        morale: 0
    });

    var marcelId = Actors.insert({
        name: 'Marcel',
        position: 'Left Leg',
        mood: 'Neutral',
        morale: 0
    });

    var giselleId = Actors.insert({
        name: 'Giselle',
        position: 'Right Leg',
        mood: 'Neutral',
        morale: 0
    });

    // ----------------------
    // TURN ONE CONVERSATIONS
    // ----------------------
    Convos.insert({
        actor: dimitriId,
        turn: 1,
        greeting: 'Hi, {{name}}. It\'s turn one.',
        choices: [
            {
                text: 'Happy',
                mood: 'Happy',
                response: {
                    text: 'I\'m happy you said that.',
                    choices: [
                        {
                            text: 'So?',
                            response: {
                                text: 'Fine.'
                            }
                        },
                        {
                            text: 'Sorry.',
                            response: {
                                text: 'You are forgiven.'
                            }
                        }
                    ]
                }
            },
            {
                text: 'Sad',
                mood: 'Sad',
                response: {
                    text: 'I\'m sad you said that.'
                }
            },
            {
                text: 'Angry',
                mood: 'Angry',
                response: {
                    text: 'I\'m angry you said that.'
                }
            },
            {
                text: 'Surprised',
                mood: 'Surprised',
                response: {
                    text: 'I\'m surprised you said that.'
                }
            }
        ]
    });

    Convos.insert({
        actor: giselleId,
        turn: 1,
        greeting: 'Hi, {{name}}. It\'s turn one.',
        choices: [
            {
                text: 'Happy',
                mood: 'Happy',
                response: {
                    text: 'I\'m happy you said that.',
                    choices: [
                        {
                            text: 'So?',
                            response: {
                                text: 'Fine.'
                            }
                        },
                        {
                            text: 'Sorry.',
                            response: {
                                text: 'You are forgiven.'
                            }
                        }
                    ]
                }
            },
            {
                text: 'Sad',
                mood: 'Sad',
                response: {
                    text: 'I\'m sad you said that.'
                }
            },
            {
                text: 'Angry',
                mood: 'Angry',
                response: {
                    text: 'I\'m angry you said that.'
                }
            },
            {
                text: 'Surprised',
                mood: 'Surprised',
                response: {
                    text: 'I\'m surprised you said that.'
                }
            }
        ]
    });

    Convos.insert({
        actor: marcelId,
        turn: 1,
        greeting: 'Hi, {{name}}. It\'s turn one.',
        choices: [
            {
                text: 'Happy',
                mood: 'Happy',
                response: {
                    text: 'I\'m happy you said that.',
                    choices: [
                        {
                            text: 'So?',
                            response: {
                                text: 'Fine.'
                            }
                        },
                        {
                            text: 'Sorry.',
                            response: {
                                text: 'You are forgiven.'
                            }
                        }
                    ]
                }
            },
            {
                text: 'Sad',
                mood: 'Sad',
                response: {
                    text: 'I\'m sad you said that.'
                }
            },
            {
                text: 'Angry',
                mood: 'Angry',
                response: {
                    text: 'I\'m angry you said that.'
                }
            },
            {
                text: 'Surprised',
                mood: 'Surprised',
                response: {
                    text: 'I\'m surprised you said that.'
                }
            }
        ]
    });

    Convos.insert({
        actor: kaiId,
        turn: 1,
        greeting: 'Hi, {{name}}. It\'s turn one.',
        choices: [
            {
                text: 'Happy',
                mood: 'Happy',
                response: {
                    text: 'I\'m happy you said that.',
                    choices: [
                        {
                            text: 'So?',
                            response: {
                                text: 'Fine.'
                            }
                        },
                        {
                            text: 'Sorry.',
                            response: {
                                text: 'You are forgiven.'
                            }
                        }
                    ]
                }
            },
            {
                text: 'Sad',
                mood: 'Sad',
                response: {
                    text: 'I\'m sad you said that.'
                }
            },
            {
                text: 'Angry',
                mood: 'Angry',
                response: {
                    text: 'I\'m angry you said that.'
                }
            },
            {
                text: 'Surprised',
                mood: 'Surprised',
                response: {
                    text: 'I\'m surprised you said that.'
                }
            }
        ]
    });


    // ----------------------
    // TURN TWO CONVERSATIONS
    // ----------------------
    Convos.insert({
        actor: dimitriId,
        turn: 2,
        greeting: 'Hi, {{name}}. It\'s turn two.',
        choices: [
            {
                text: 'Happy',
                mood: 'Happy',
                response: {
                    text: 'I\'m happy you said that.',
                    choices: [
                        {
                            text: 'So?',
                            response: {
                                text: 'Fine.'
                            }
                        },
                        {
                            text: 'Sorry.',
                            response: {
                                text: 'You are forgiven.'
                            }
                        }
                    ]
                }
            },
            {
                text: 'Sad',
                mood: 'Sad',
                response: {
                    text: 'I\'m sad you said that.'
                }
            },
            {
                text: 'Angry',
                mood: 'Angry',
                response: {
                    text: 'I\'m angry you said that.'
                }
            },
            {
                text: 'Surprised',
                mood: 'Surprised',
                response: {
                    text: 'I\'m surprised you said that.'
                }
            }
        ]
    });

    Convos.insert({
        actor: giselleId,
        turn: 2,
        greeting: 'Hi, {{name}}. It\'s turn two.',
        choices: [
            {
                text: 'Happy',
                mood: 'Happy',
                response: {
                    text: 'I\'m happy you said that.',
                    choices: [
                        {
                            text: 'So?',
                            response: {
                                text: 'Fine.'
                            }
                        },
                        {
                            text: 'Sorry.',
                            response: {
                                text: 'You are forgiven.'
                            }
                        }
                    ]
                }
            },
            {
                text: 'Sad',
                mood: 'Sad',
                response: {
                    text: 'I\'m sad you said that.'
                }
            },
            {
                text: 'Angry',
                mood: 'Angry',
                response: {
                    text: 'I\'m angry you said that.'
                }
            },
            {
                text: 'Surprised',
                mood: 'Surprised',
                response: {
                    text: 'I\'m surprised you said that.'
                }
            }
        ]
    });

    Convos.insert({
        actor: marcelId,
        turn: 2,
        greeting: 'Hi, {{name}}. It\'s turn two.',
        choices: [
            {
                text: 'Happy',
                mood: 'Happy',
                response: {
                    text: 'I\'m happy you said that.',
                    choices: [
                        {
                            text: 'So?',
                            response: {
                                text: 'Fine.'
                            }
                        },
                        {
                            text: 'Sorry.',
                            response: {
                                text: 'You are forgiven.'
                            }
                        }
                    ]
                }
            },
            {
                text: 'Sad',
                mood: 'Sad',
                response: {
                    text: 'I\'m sad you said that.'
                }
            },
            {
                text: 'Angry',
                mood: 'Angry',
                response: {
                    text: 'I\'m angry you said that.'
                }
            },
            {
                text: 'Surprised',
                mood: 'Surprised',
                response: {
                    text: 'I\'m surprised you said that.'
                }
            }
        ]
    });

    Convos.insert({
        actor: kaiId,
        turn: 2,
        greeting: 'Hi, {{name}}. It\'s turn two.',
        choices: [
            {
                text: 'Happy',
                mood: 'Happy',
                response: {
                    text: 'I\'m happy you said that.',
                    choices: [
                        {
                            text: 'So?',
                            response: {
                                text: 'Fine.'
                            }
                        },
                        {
                            text: 'Sorry.',
                            response: {
                                text: 'You are forgiven.'
                            }
                        }
                    ]
                }
            },
            {
                text: 'Sad',
                mood: 'Sad',
                response: {
                    text: 'I\'m sad you said that.'
                }
            },
            {
                text: 'Angry',
                mood: 'Angry',
                response: {
                    text: 'I\'m angry you said that.'
                }
            },
            {
                text: 'Surprised',
                mood: 'Surprised',
                response: {
                    text: 'I\'m surprised you said that.'
                }
            }
        ]
    });

}