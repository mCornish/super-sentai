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
            },
            {
                text: "Incompatible ice cream?",
                name: 'Dimitri',
                mood: 'Confused'
            },
            {
                text: "The fate of Rocky Road and birch beer.",
                name: 'Dimitri',
                mood: 'Sad'
            },
            {
                text: "The plight of lemon and milk!",
                name: 'Dimitri',
                mood: 'Angry'
            },
            {
                text: "More like orange juice and milk.",
                name: 'Dimitri',
                mood: 'Sad'
            },
            {
                text: "I'm sorry, Dimitri, but I'm going to have to stop you right there. What in the world are you talking about?",
                name: "Me"
            },
            {
                text: "I want us to be less like orange juice and milk and more like whatever goes with milk.",
                name: 'Dimitri'
            },
            {
                text: "How do I do that?",
                name: "Me"
            },
            {
                text: "I've come up with all sorts of games to play with him. I thought he liked the games since he hasn't run away like the rest of the interns have!",
                name: 'Dimitri'
            },
            {
                text: "What games do you play with him? Twister? Monopoly?",
                name: "Me"
            },
            {
                text: "More like twist-yer-hands-around-his-neck and monopolize-his-airways. Usually, that game drives people away, but not Marcel! He must be a fan!",
                name: 'Dimitri'
            },
            {
                text: "I think that's more of a testament to his resilience than how much he likes your games. Um, you're not actually choking any of the interns, are you?",
                name: "Me"
            },
            {
                text: "Nah, I'm all about the menacing stalking and evil eye stares. I don't touch them with my bare hands. Usually.",
                name: 'Dimitri'
            },
            {
                text: "Knife-throwing, on the other hand...I definitely do that! Marcel's pretty good at dodging knives. It's a surprise since he usually run EVE's left arm so sluggishly.",
                name: 'Dimitri'
            },
            {
                text: "You really think he's still here because he's resilient, not because he's a fan of my game? What do you think I should do about that? I want him to like my games. I'd hate to think that he's bored of them.",
                name: 'Dimitri',
                mood: 'Sad'
            },
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