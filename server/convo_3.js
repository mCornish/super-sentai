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
                }
            ],
            // have talked to Kai
            kaiConvo: {
                dialogue: [
                    {
                        text: "Kai.",
                        name: 'Me'
                    },
                    {
                        text: "Oh? Did she say anything interesting?",
                        name: 'Dimitri',
                        mood: 'Neutral'
                    },
                    {
                        text: "Kai was Kai.",
                        name: 'Me'
                    },
                    {
                        text: "What did you say to her?",
                        name: 'Dimitri'
                    },
                    {
                        text: "I was trying to solve what's going on between Her and Giselle. I know you and Marcel have your problems too.",
                        name: 'Me'
                    },
                    {
                        text: "And you think you're just the one to solve them, eh?",
                        name: 'Dimitri',
                        mood: 'Happy'
                    },
                    {
                        text: "I don't know if I can solve all of them, but I can try. Let's talk about what's going on with you and Marcel.",
                        name: 'Me'
                    },
                    {
                        text: "Jumping into that already? You haven't even talked with Marcel yet.",
                        name: 'Dimitri'
                    },
                    {
                        text: "I'm trying to fix thing up with you first",
                        name: 'Me'
                    },
                    {
                        text: "Fix, fix, fix. Everything and everyong is a thing to be fixed.",
                        name: 'Dimitri'
                    },
                    {
                        text: "Funny way of looking at life, isn't it? Since you're so into fixing things, what do you suppose I should do about Marcel? He acts like so many of the others, all afraid of me and stuff, just because I like to play games.",
                        name: 'Dimitri',
                        mood: 'Neutral'
                    },
                    {
                        text: "Well, what kind of games are you playing with him?",
                        name: 'Me'
                    },
                    {
                        text: "All the popular ones like press-knife-top-to-throat and wave-toy-gun-in-face. I know the last game would be better with a real gun but I'm not allowed to get one of those since I used to be a villain and all.",
                        name: 'Dimitri'
                    },
                    {
                        text: "Society can be so cruel",
                        name: 'Dimitri',
                        mood: 'Sad'
                    },
                    {
                        text: "Not every villain went through the same reformation program you did, Dimitri. Let's keep that in mind.",
                        name: 'Me'
                    },
                    {
                        text: "And, um, if those are the games you're playing with Marcel, I think that's part of the problem right there.",
                        name: 'Me'
                    },
                    {
                        text: "He's the only intern we've had that's been able to last through all of my games! I'm happy to share a torso with him.",
                        name: 'Dimitri',
                        mood: 'Happy'
                    },
                    {
                        text: "I can't wait to discover the perfect gmae to crush him with.",
                        name: 'Dimitri'
                    },
                    {
                        text: "Not literally, right?",
                        name: 'Me'
                    },
                    {
                        text: "I don't know! Should it be literal? SHould I come up with something to smooth Marel into a pancake? My school teachers always said I was a creative lad. I should use more of that creativity.",
                        name: 'Dimitri'
                    },
                    {
                        text: "I ought to create a game that'll wow the skin off Marcel. I knew I could count on you to help me out of this dilemma, Cap'n. Good, good, good!",
                        name: 'Dimitri'
                    },
                    {
                        text: "Wait. You're getting ahead of yourself. What I mean was...",
                        name: 'Me'
                    }
                ], // end dialogue
                choices: [
                    {
                        text: 'Tell him to change his games',
                        points: '1',
                        dialogue: [
                            {
                                text: "You should play different games with Marcel. I don't think him tolerating your games is a sign of his enjoyment. It's more a sign of his dedication to getting paid.",
                                name: 'Me'
                            },
                            {
                                text: "So he doesn't like the games that I play with him?",
                                name: 'Dimitri',
                                mood: 'Sad'
                            },
                            {
                                text: "Have you tried asking him more directly about what he's like to play? I think if you tried talking to him more, you'd have better results.",
                                name: 'Me'
                            },
                            {
                                text: "There's plenty of games out there that are less...er, how should I say it...violent.",
                                name: 'Me'
                            },
                            {
                                text: "VIOLENT?!",
                                name: 'Dimitri',
                                mood: 'Angry'
                            },
                            {
                                text: "There's nothing violent about my games. They're playful. These are all child-friendly games that I played with my friends while growing up. Marcel's an adult. He should be able to handle them.",
                                name: 'Dimitri'
                            },
                            {
                                text: "...you played these games as a child?",
                                name: 'Me'
                            },
                            {
                                text: "Yes! I used to love revving up chainsaws and chasing my friends with them. The best part is when you rev it up right by their ear.",
                                name: 'Dimitri'
                            },
                            {
                                text: "Ah, the memories...",
                                name: 'Dimitri',
                                mood: 'Happy'
                            },
                            {
                                text: "We're all from different walks of life. What's child-friendly to you might not necessarily be for anyone else. Trust me, I'm sure if you talk to Marcel more about what he's into, he'll be more welcoming to you.",
                                name: 'Me'
                            },
                            {
                                text: "You'll have more fun with him when he's a willing participant in your games. As lazy as he is, Marcel is still one of the best interns we've ever had.",
                                name: 'Me'
                            },
                            {
                                text: "I've never thought about it that it. I need to do some more thinking. Please, go talk to someone else for a while.",
                                name: 'Dimitri'
                            }
                        ]
                    },
                    {
                        text: 'Tell him to make his games more intense',
                        dialogue: [
                            {
                                text: "You should wow more than the skin off of Marcel.",
                                name: 'Me'
                            },
                            {
                                text: "But if he doesn't have any skin, what else is there to wow off of him?",
                                name: 'Dimitri'
                            },
                            {
                                text: "Muscles. Tendons. Bones.",
                                name: 'Me'
                            },
                            {
                                text: "The bones! I could be like a giant and crush his bones into bread.",
                                name: 'Dimitri'
                            },
                            {
                                text: "Do you think Marcel bread would go over well at dinner?",
                                name: 'Dimitri',
                                mood: 'Confused'
                            },
                            {
                                text: "I'm sure it would.",
                                name: 'Me'
                            },
                            {
                                text: "I'll have to save a slice for whatever's left of Marcel. I'm sure he'd like a bite.",
                                name: 'Dimitri',
                                mood: 'Happy'
                            },
                            {
                                text: "I've got a lot of planning to do. I'll talk to you later Cap'n!",
                                name: 'Dimitri'
                            }
                        ]
                    }
                ]
            } // end kaiConvo
        }, // end haveTalked
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
            }
        ],
        choices: [
            {
                text: "Tell him to make his games worse",
                dialogue: [
                    {
                        text: "You should make your games worse to get his attention.",
                        name: 'Me'
                    },
                    {
                        text: "You think I should invite Mr. Machete to play?",
                        name: 'Dimitri',
                        mood: 'Confused'
                    },
                    {
                        text: "Is Mr. Machete—",
                        name: 'Me'
                    },
                    {
                        text: "My most trusted machete, yes!",
                        name: 'Dimitri',
                        mood: 'Happy'
                    },
                    {
                        text: "Yeah, that should definitely get Marcel's attention.",
                        name: 'Me'
                    },
                    {
                        text: "Thank you for the advice. I'm sure Marcel will love this.",
                        name: 'Dimitri'
                    },
                    {
                        text: "I'm going to go check on the others now.",
                        name: 'Me'
                    },
                    {
                        text: "Toodles, Cap'n {{name}}! Good luck with rallying the troops!",
                        name: 'Dimitri'
                    }
                ]
            },
            {
                text: "Tell him to make his games less violent",
                points: '1',
                dialogue: [
                    {
                        text: "You should try making your games less violent. Or, better yet, see if Marcel has any ideas on how to make the game better.",
                        name: 'Me'
                    },
                    {
                        text: "But I'm creative enough on my own.",
                        name: 'Dimitri',
                        mood: 'Confused'
                    },
                    {
                        text: "I think it would help improve your friendship if you sit down with Marcel and try to work on the game with him. That way, you can both agree on the rules and there won't be any misunderstandings.",
                        name: 'Me'
                    },
                    {
                        text: "But shouldn't he have already read the waiver? If he read it in detail, he would've already known all the rules.",
                        name: 'Dimitri'
                    },
                    {
                        text: "The waiver is over 200 pages long.",
                        name: 'Me'
                    },
                    {
                        text: "Yeah, that's the one!",
                        name: 'Dimitri',
                        mood: 'Happy'
                    },
                    {
                        text: "Not even I read that in its entirety.",
                        name: 'Me'
                    },
                    {
                        text: "You're slackin', Cap'n. Don't let anyone else hear you say that.",
                        name: 'Dimitri',
                        mood: 'Neutral'
                    },
                    {
                        text: "Good idea. Sorry.",
                        name: 'Me'
                    },
                    {
                        text: "S'alright with me. Not so alright with all those interns we've lost.",
                        name: 'Dimitri'

                    },
                    {
                        text: "By lost, you mean that they simply left, right? Not that they were lost in any other way?",
                        name: 'Me'
                    },
                    {
                        text: "Of course, Cap'n! Of course.",
                        name: 'Dimitri',
                        mood: 'Happy'
                    },
                    {
                        text: "I'm going to go talk to the others now.",
                        name: 'Me'
                    },
                    {
                        text: "Great! Keep doing what you're doing. Toodles, Cap'n {{name}}! Good luck with rallying the troops!",
                        name: 'Dimitri'
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