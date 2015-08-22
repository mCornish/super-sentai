if (Players.find().count() === 0) {

    // ----------------------
    // DIMITRI
    // ----------------------
    Convos.insert({
        actor: dimitriId,
        turn: 4,
        greeting: 'Hi, {{name}}. It\'s turn four.',
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
    // GISELLE
    // ----------------------
    Convos.insert({
        actor: giselleId,
        turn: 1,
        dialogue: [
            {
                text: "Hi there, {{name}}.",
                name: 'Giselle'
            },
            {
                text: "How have you been holding up, Giselle?",
                name: 'Me'
            },
            {
                text: "I'm doing alright.",
                name: 'Giselle'
            },
            {
                text: "Not, that's not true.",
                name: 'Giselle',
                mood: 'Sad'
            },
            {
                text: "I'm annoyed more than anything. You try sharing a room with Kai.",
                name: 'Giselle',
                mood: 'Angry'
            },
            {
                text: "Yeah, I could see how that might be tough at times.",
                name: 'Me'
            },
            {
                text: "\"Tough\" is an understatement an understatement.",
                name: 'Giselle'
            },
            {
                text: "I'm a great person to live with—a FANTASTIC person to live with. Kai makes me sound like a monster.",
                name: 'Giselle',
                mood: 'Neutral'
            },
            {
                text: "You're not a monster at all. When people are hurt, they say things they don't mean.",
                name: 'Me'
            },
            {
                text: "And have you talked to Kai to know that she doesn't mean it?",
                name: 'Giselle'
            },
            {
                text: "No, I haven't...but I know Kai, and I know she's your best friend.",
                name: 'Me',
                check: "!haveTalkedKai"
            },
            {
                text: "I have. Kai doesn't hate you.",
                name: 'Me',
                check: "haveTalkedKai"
            },
            {
                text: "Fine, then how do you think I should deal with Kai?",
                name: 'Giselle'
            }
        ],
        choices: [
            {
                text: 'Shout back',
                points: 0,
                dialogue: [
                    {
                        text: "You should shout back as much as possible. When Kai gets all fluffed up and angry, you have to get angry right back.",
                        name: 'Me'
                    },
                    {
                        text: "You're sure that's the best way to deal with Kai?",
                        name: 'Giselle',
                        mood: 'Surprised'
                    },
                    {
                        text: "Yep. Kai will be so thrown off by your aggression that she'll have to listen to you.",
                        name: 'Me'
                    },
                    {
                        text: "And you don't htink that's going to start a screaming match?",
                        name: 'Giselle',
                        mood: 'Neutral'
                    },
                    {
                        text: "Just trust me.",
                        name: 'Me'
                    },
                    {
                        text: "Whatever you do, I think the most important thing to do is to hold your ground. Don't let Kai scream at you and walk away. Be present.",
                        name: 'Me'
                    },
                    {
                        text: "I guess I should invest in a good pair of ear plugs.",
                        name: 'Giselle'
                    },
                    {
                        text: "That might be a good idea. They might help you finally get some sleep.",
                        name: 'Me'
                    },
                    {
                        text: "What? Who said anything about sleep?",
                        name: 'Giselle',
                        mood: 'Surprised'
                    },
                    {
                        text: "I talked to Kai, remember?",
                        name: 'Me',
                        check: 'haveTalkedKai'
                    },
                    {
                        text: "Oh. Right.",
                        name: 'Giselle',
                        check: 'haveTalkedKai'
                    },
                    {
                        text: "I've caught you sleeping at the kitchen table before.",
                        name: 'Me',
                        check: '!haveTalkedKai'
                    },
                    {
                        text: "I was just taking a cat nap.",
                        name: 'Giselle',
                        check: '!haveTalkedKai'
                    },
                    {
                        text: "Or you were sleep deprived",
                        name: 'Me',
                        check: '!haveTalkedKai'
                    },
                    {
                        text: "...maybe.",
                        name: 'Giselle',
                        check: '!haveTalkedKai',
                        mood: 'Neutral'
                    },
                    {
                        text: "What's keeping you awake?",
                        name: 'Me'
                    },
                    {
                        text: "Kai thinks I'm spending all of my time partying. And, fine, I go to parties sometime, but not ALL the time. I also do some important networking for us. Somebody's got to handle our public relations.",
                        name: 'Giselle'
                    },
                    {
                        text: "We have to do that?",
                        name: 'Me'
                    },
                    {
                        text: "Yes! Do you know how badly the media smeared us after we took in Dimitri?",
                        name: 'Giselle',
                        mood: 'Angry'
                    },
                    {
                        text: "The media smears people? What does that even—",
                        name: 'Me'
                    },
                    {
                        text: "You just keep handling the internal relations, Captain. That's what you're good at.",
                        name: 'Giselle',
                        mood: 'Neutral'
                    },
                    {
                        text: "You leave the media to me. No one does PR like Giselle.",
                        name: 'Giselle',
                        mood: 'Happy'
                    },
                    {
                        text: "Have you tried telling that to Kai? Maybe if she knew the important work you were doing, she wouldn't think that you're partying all the time.",
                        name: 'Me'
                    },
                    {
                        text: "I've tried to explain it to her a million times. Kai is...difficult.",
                        name: 'Giselle',
                        mood: 'Neutral'
                    },
                    {
                        text: "How did you explain it? What did you tell her?",
                        name: 'Me'
                    },
                    {
                        text: "The truth: That it isn't any of her business. As long as I handle my business on the battlefield, it shouldn't matter what I've been doing the night before.",
                        name: 'Giselle',
                        mood: 'Smile'
                    },
                    {
                        text: "And how did that work for you?",
                        name: 'Me'
                    },
                    {
                        text: "It didn't. Like I said, Kai is difficult. She blew up bigger than a volcano. Why? You have a better idea?",
                        name: 'Giselle',
                        mood: 'Neutral'
                    }
                ],
                choices: [
                    {
                        text: 'Calmly explain yourself',
                        points: -1,
                        dialogue: [
                            {
                                text: "You should tell Kai what you're actually doing. If you calmly explain the situation, she'll understand.",
                                name: 'Me'
                            },
                            {
                                text: "So you want me to keep trying to talk to Kai?",
                                name: 'Giselle'
                            },
                            {
                                text: "Yes, even if you have to count to ten in your head to get through the conversation. Put yourself in your happy place.",
                                name: 'Me'
                            },
                            {
                                text: "A throne in a palace on my own private island. That'd be nice.",
                                name: 'Giselle',
                                mood: 'Happy'
                            },
                            {
                                text: "Until monsters start coming up from the ocean.",
                                name: 'Giselle',
                                mood: 'Neutral'
                            },
                            {
                                text: "Just give it a try. I think it'll work.",
                                name: 'Me'
                            },
                            {
                                text: "I hope you're right.",
                                name: 'Giselle'
                            },
                            {
                                text: "Are you going to be alright to fight that monster?",
                                name: 'Me'
                            },
                            {
                                text: "I'll be fine. I'm me after all.",
                                name: 'Giselle'
                            },
                            {
                                text: "Alright, see you on the battlefield",
                                name: 'Me'
                            },
                            {
                                text: "See you, Captain.",
                                name: 'Giselle'
                            }
                        ]
                    },
                    {
                        text: 'Loudly explain yourself',
                        points: 1,
                        dialogue: [
                            {
                                text: "If Kai isn't listening, maybe you should speak up. If Kai blows up, you have to blow up right back at her.",
                                name: 'Me'
                            },
                            {
                                text: "You really think that's going to work?",
                                name: 'Giselle',
                                mood: 'Confused'
                            },
                            {
                                text: "It's called fighting fire with fire.",
                                name: 'Me'
                            },
                            {
                                text: "Someone is going to get burned.",
                                name: 'Giselle'
                            },
                            {
                                text: "And if you're loud enough, it won't be you.",
                                name: 'Me'
                            },
                            {
                                text: "If you say so, {{name}. I'll trust your advice.",
                                name: 'Giselle',
                                mood: 'Neutral'
                            },
                            {
                                text: "Just give it a try. I think it'll work.",
                                name: 'Me'
                            },
                            {
                                text: "I hope you're right.",
                                name: 'Giselle'
                            },
                            {
                                text: "Are you going to be alright to fight that monster?",
                                name: 'Me'
                            },
                            {
                                text: "I'll be fine. I'm me after all.",
                                name: 'Giselle'
                            },
                            {
                                text: "Alright, see you on the battlefield",
                                name: 'Me'
                            },
                            {
                                text: "See you, Captain.",
                                name: 'Giselle'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Be gentle',
                points: -1,
                dialogue: [
                    {
                        text: "Be gentle with her. If Kai starts yelling, resist the urge to yell back. It's better to not get into an all-out screaming match. No one wins in that case."
                    },
                    {
                        text: "Hm...",
                        name: 'Giselle'
                    },
                    {
                        text: "Whatever you do, I think the most important thing to do is to hold your ground. Don't let Kai scream at you and walk away. Be present.",
                        name: 'Me'
                    },
                    {
                        text: "I guess I should invest in a good pair of ear plugs.",
                        name: 'Giselle'
                    },
                    {
                        text: "That might be a good idea. They might help you finally get some sleep.",
                        name: 'Me'
                    },
                    {
                        text: "What? Who said anything about sleep?",
                        name: 'Giselle',
                        mood: 'Surprised'
                    },
                    {
                        text: "I talked to Kai, remember?",
                        name: 'Me',
                        check: 'haveTalkedKai'
                    },
                    {
                        text: "Oh. Right.",
                        name: 'Giselle',
                        check: 'haveTalkedKai'
                    },
                    {
                        text: "I've caught you sleeping at the kitchen table before.",
                        name: 'Me',
                        check: '!haveTalkedKai'
                    },
                    {
                        text: "I was just taking a cat nap.",
                        name: 'Giselle',
                        check: '!haveTalkedKai'
                    },
                    {
                        text: "Or you were sleep deprived",
                        name: 'Me',
                        check: '!haveTalkedKai'
                    },
                    {
                        text: "...maybe.",
                        name: 'Giselle',
                        check: '!haveTalkedKai',
                        mood: 'Neutral'
                    },
                    {
                        text: "What's keeping you awake?",
                        name: 'Me'
                    },
                    {
                        text: "Kai thinks I'm spending all of my time partying. And, fine, I go to parties sometime, but not ALL the time. I also do some important networking for us. Somebody's got to handle our public relations.",
                        name: 'Giselle'
                    },
                    {
                        text: "We have to do that?",
                        name: 'Me'
                    },
                    {
                        text: "Yes! Do you know how badly the media smeared us after we took in Dimitri?",
                        name: 'Giselle',
                        mood: 'Angry'
                    },
                    {
                        text: "The media smears people? What does that even—",
                        name: 'Me'
                    },
                    {
                        text: "You just keep handling the internal relations, Captain. That's what you're good at.",
                        name: 'Giselle',
                        mood: 'Neutral'
                    },
                    {
                        text: "You leave the media to me. No one does PR like Giselle.",
                        name: 'Giselle',
                        mood: 'Happy'
                    },
                    {
                        text: "Have you tried telling that to Kai? Maybe if she knew the important work you were doing, she wouldn't think that you're partying all the time.",
                        name: 'Me'
                    },
                    {
                        text: "I've tried to explain it to her a million times. Kai is...difficult.",
                        name: 'Giselle',
                        mood: 'Neutral'
                    },
                    {
                        text: "How did you explain it? What did you tell her?",
                        name: 'Me'
                    },
                    {
                        text: "The truth: That it isn't any of her business. As long as I handle my business on the battlefield, it shouldn't matter what I've been doing the night before.",
                        name: 'Giselle',
                        mood: 'Smile'
                    },
                    {
                        text: "And how did that work for you?",
                        name: 'Me'
                    },
                    {
                        text: "It didn't. Like I said, Kai is difficult. She blew up bigger than a volcano. Why? You have a better idea?",
                        name: 'Giselle',
                        mood: 'Neutral'
                    }
                ],
                choices: [
                    {
                        text: 'Calmly explain yourself',
                        points: -1,
                        dialogue: [
                            {
                                text: "You should tell Kai what you're actually doing. If you calmly explain the situation, she'll understand.",
                                name: 'Me'
                            },
                            {
                                text: "So you want me to keep trying to talk to Kai?",
                                name: 'Giselle'
                            },
                            {
                                text: "Yes, even if you have to count to ten in your head to get through the conversation. Put yourself in your happy place.",
                                name: 'Me'
                            },
                            {
                                text: "A throne in a palace on my own private island. That'd be nice.",
                                name: 'Giselle',
                                mood: 'Happy'
                            },
                            {
                                text: "Until monsters start coming up from the ocean.",
                                name: 'Giselle',
                                mood: 'Neutral'
                            },
                            {
                                text: "Just give it a try. I think it'll work.",
                                name: 'Me'
                            },
                            {
                                text: "I hope you're right.",
                                name: 'Giselle'
                            },
                            {
                                text: "Are you going to be alright to fight that monster?",
                                name: 'Me'
                            },
                            {
                                text: "I'll be fine. I'm me after all.",
                                name: 'Giselle'
                            },
                            {
                                text: "Alright, see you on the battlefield",
                                name: 'Me'
                            },
                            {
                                text: "See you, Captain.",
                                name: 'Giselle'
                            }
                        ]
                    },
                    {
                        text: 'Loudly explain yourself',
                        points: 1,
                        dialogue: [
                            {
                                text: "If Kai isn't listening, maybe you should speak up. If Kai blows up, you have to blow up right back at her.",
                                name: 'Me'
                            },
                            {
                                text: "You really think that's going to work?",
                                name: 'Giselle',
                                mood: 'Confused'
                            },
                            {
                                text: "It's called fighting fire with fire.",
                                name: 'Me'
                            },
                            {
                                text: "Someone is going to get burned.",
                                name: 'Giselle'
                            },
                            {
                                text: "And if you're loud enough, it won't be you.",
                                name: 'Me'
                            },
                            {
                                text: "If you say so, {{name}. I'll trust your advice.",
                                name: 'Giselle',
                                mood: 'Neutral'
                            },
                            {
                                text: "Just give it a try. I think it'll work.",
                                name: 'Me'
                            },
                            {
                                text: "I hope you're right.",
                                name: 'Giselle'
                            },
                            {
                                text: "Are you going to be alright to fight that monster?",
                                name: 'Me'
                            },
                            {
                                text: "I'll be fine. I'm me after all.",
                                name: 'Giselle'
                            },
                            {
                                text: "Alright, see you on the battlefield",
                                name: 'Me'
                            },
                            {
                                text: "See you, Captain.",
                                name: 'Giselle'
                            }
                        ]
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
        turn: 4,
        greeting: 'Hi, {{name}}. It\'s turn four.',
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
    // KAI
    // ----------------------
    Convos.insert({
        actor: kaiId,
        turn: 4,
        greeting: 'Hi, {{name}}. It\'s turn four.',
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