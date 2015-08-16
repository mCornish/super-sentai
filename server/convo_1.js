if (Players.find().count() === 0) {

    // ----------------------
    // DIMITRI
    // ----------------------
    Convos.insert({
        actor: dimitriId,
        turn: 1,
        dialogue: [
            {
                text: "Heyyy, Cap'n {{name}}. What's going on with you this fine morning?",
                mood: 'Happy',
                name: 'Dimitri'
            },
            {
                text: "It's not going to be a fine morning for very long if we don't get out there soon.",
                name: 'Me'
            },
            {
                text: "Why the rush? It's not every day that the five of us get to hang out like this. We're always rushing off to this mission and that mission instead of enjoying our time together. I like this! Everyone's so happy.",
                name: 'Dimitri'
            },
            {
                text: "I glance around the room. Everyone other than Dimitri is fuming in their own way. Giselle and Kai refuse to even look in each other's direction."
            },
            {
                text: "As usual, Marcel is keeping his distance from Dimitri. Dimitri must believe in a radically different definition of happy than I do."
            },
            {
                text: "What's with the long face? Don't you like this too?",
                mood: 'Neutral',
                name: 'Dimitri'
            },
            {
                text: "I'm trying to figure out what I can do to get everyone to stop fighting.",
                name: 'Me'
            },
            {
                text: "What's your favorite flavor of ice cream?",
                mood: 'Happy',
                name: 'Dimitri'
            },
            {
                text: "Ice cream has nothing to do with anything.",
                name: 'Me'
            },
            {
                text: "Ice cream has everything to do with everything. Ice cream keeps the world going round.",
                name: 'Dimitri'
            },
            {
                text: "Do you know something I don't know?",
                name: 'Me'
            },
            {
                text: "Knowledge is power. So help me get a little more powerful by telling me what kind of ice cream you like best. Pretty please with a cherry on top?",
                name: 'Dimitri'
            }
        ],
        choices: [
            {
                text: 'Humor him.',
                dialogue: [
                    {
                        text: "Okay, sure...my favorite flavor is vanilla. It goes good with mostly everything.",
                        name: 'Me'
                    },
                    {
                        text: "And what kind of toppings do you like?.",
                        name: 'Dimitri'
                    },
                    {
                        text: "Sprinkles are fine. What does this have to do with anything, though? I love ice cream as much as the next person, but we've kind of got a monstrous problem on our hands at the moment.",
                        name: 'Me'
                    },
                    {
                        text: "I thought you of all people would understand the importance of ice cream.",
                        name: 'Dimitri',
                        mood: 'Sad'
                    },
                    {
                        text: "I can't understand it if you won't explain it to me. We don't have a whole lot of time here.",
                        name: 'Me'
                    },
                    {
                        text: "No one has time for Dimitri.",
                        name: 'Dimitri'
                    },
                    {
                        text: "You know that's not true.",
                        name: 'Me'
                    },
                    {
                        text: "Everyone's off doing their own thing, and then there's me. Me, all alone.",
                        name: 'Dimitri'
                    },
                    {
                        text: "You're right. Vanilla ice cream does go good with everything. What about moose tracks or rocky road? What toppings go with those?",
                        name: 'Dimitri',
                        mood: 'Neutral'
                    }
                ],
                choices: [
                    {
                        text: 'Nothing goes with them.',
                        affect: 'Point-',
                        dialogue: [
                            {
                                text: "Those flavors stand fine on their own. Moose tracks is that peanut butter and chocolate blend, right? It's a stand-alone flavor.",
                                name: "Me"
                            },
                            {
                                text: "Those flavors stand fine on their own. Moose tracks is that peanut butter and chocolate blend, right? It's a stand-alone flavor.",
                                name: "Me"
                            }
                        ]
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
}