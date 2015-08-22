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