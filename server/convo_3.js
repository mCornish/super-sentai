if (Players.find().count() === 0) {

    // ----------------------
    // DIMITRI
    // ----------------------
    Convos.insert({
        actor: dimitriId,
        turn: 3,
        // have talked to Dimitri
        haveTalked: {
            dialogue: [
                {
                    text: "Back to talk more about ice cream?",
                    mood: 'Happy',
                    name: 'Dimitri'
                },
                {
                    text: "I'd like to talk about more relevant issues.",
                    name: 'Me'
                },
                {
                    text: "Good! Ice cream is a melted conversation topic now. Who have you talked to? I wasn't paying attention.",
                    name: 'Dimitri'
                },
                {
                    text: "Kai.",
                    name: "Me"
                },
                {
                    text: "Oh? Did she say anything interesting?",
                    name: 'Dimitri'
                }
            ],
            // have talked to Kai
            kaiConvo: [

            ]
        },
        // haven't talked to Dimitri
        dialogue: [
            {
                text: "Hello, Cap'n {{name}}! Lovely day to see you.",
                mood: 'Happy',
                name: 'Dimitri'
            },
            {
                text: "It won't be lovely for long if we don't all get in the robot.",
                name: 'Me'
            },
            {
                text: "I'm sure we'll get in EVE in due time. Whether or not we can defeat that monster together—that's up for debate.",
                name: 'Dimitri'
            },
            {
                text: "I wanted to talk to you about what's going on between you and Marcel.",
                name: "Me"
            },
            {
                text: "When I talked to him, he mentioned that he's having a hard time working with us since he has to watch his back so much.",
                name: 'Me',
                check: 'haveTalkedMarcel'
            },
            {
                text: "Whenever I see him near you, he kind of cowers.",
                name: 'Me',
                check: '!haveTalkedMarcel'
            },
            {
                text: "Do you know why that is?",
                name: 'Me'
            }
        ],
        choices: [
            {
                text: 'Humor him.',
                dialogue: [
                    {
                        text: "Okay, sure...my favorite flavor is vanilla. It goes good with mostly everything.",
                        name: 'Dimitri'
                    }
                ]
            },
            {
                text: 'Tell him to focus.',
                dialogue: [
                    {
                        text: "Dimitri, I need you to focus. We've talked about your issues with focusing before.",
                        name: 'Me'
                    },
                    {
                        text: "Yeah, we have...",
                        name: 'Dimitri',
                        mood: 'Neutral'
                    },
                    {
                        text: "What do you think I should do about all the fighting?",
                        name: 'Me'
                    },
                    {
                        text: "Give everyone a bowl of ice cream.",
                        name: 'Dimitri',
                        mood: 'Happy'
                    }
                ],
                choices: [
                    {
                        text: 'So?',
                        dialogue: [
                            {
                                text: 'Fine.',
                                name: 'Dimitri'
                            }
                        ]
                    },
                    {
                        text: 'Sorry',
                        dialogue: [
                            {
                                text: 'You are forgiven.',
                                name: 'Dimitri'
                            }
                        ]
                    }
                ]
            }
        ]
    });


    // ----------------------
    // GISELLE
    // ----------------------
    Convos.insert({
        actor: giselleId,
        turn: 1,
        dialogue: [
            {
                text: "Hi, {{name}}. It's turn one.",
                name: 'Giselle'
            }
        ],
        choices: [
            {
                text: 'Happy',
                dialogue: [
                    {
                        text: "I'm happy you said that.",
                        mood: 'Happy',
                        name: 'Giselle'
                    }
                ]
            },
            {
                text: 'Sad',
                dialogue: [
                    {
                        text: "I'm sad you said that.",
                        mood: 'Sad',
                        name: 'Giselle'
                    }
                ]
            },
            {
                text: 'Angry',
                dialogue: [
                    {
                        text: "I'm angry you said that.",
                        mood: 'Angry',
                        name: 'Giselle'
                    }
                ]
            },
            {
                text: 'Surprised',
                dialogue: [
                    {
                        text: "I'm surprised you said that.",
                        mood: 'Surprised',
                        name: 'Giselle'
                    }
                ]
            }
        ]
    });


    // ----------------------
    // MARCEL
    // ----------------------
    Convos.insert({
        actor: marcelId,
        turn: 1,
        dialogue: [
            {
                text: "Hi, {{name}}. It's turn one.",
                name: 'Marcel'
            }
        ],
        choices: [
            {
                text: 'Happy',
                dialogue: [
                    {
                        text: "I'm happy you said that.",
                        mood: 'Happy',
                        name: 'Giselle'
                    }
                ]
            },
            {
                text: 'Sad',
                dialogue: [
                    {
                        text: "I'm sad you said that.",
                        mood: 'Sad',
                        name: 'Marcel'
                    }
                ]
            },
            {
                text: 'Angry',
                dialogue: [
                    {
                        text: "I'm angry you said that.",
                        mood: 'Angry',
                        name: 'Marcel'
                    }
                ]
            },
            {
                text: 'Surprised',
                dialogue: [
                    {
                        text: "I'm surprised you said that.",
                        mood: 'Surprised',
                        name: 'Marcel'
                    }
                ]
            }
        ]
    });


    // ----------------------
    // KAI
    // ----------------------
    Convos.insert({
        actor: kaiId,
        turn: 3,
        greeting: 'Hi, {{name}}. It\'s turn three.',
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