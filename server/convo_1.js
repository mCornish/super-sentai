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
                text: 'Humor him',
                points: '1',
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
                        text: 'Nothing goes with them',
                        points: '-1',
                        dialogue: [
                            {
                                text: "Those flavors stand fine on their own. Moose tracks is that peanut butter and chocolate blend, right? It's a stand-alone flavor.",
                                name: "Me"
                            },
                            {
                                text: "Because it'll clash with anything else?",
                                name: "Dimitri",
                                mood: 'Sad'
                            },
                            {
                                text: "Yeah, the flavors are too strong. The peanut butter's too dominant. Sorry for asking this again, but what exactly does ice cream have to do with this situation?",
                                name: "Me"
                            },
                            {
                                text: "It has a ton to do with it.",
                                name: "Dimitri",
                                mood: 'Happy'
                            },
                            {
                                text: "Ice cream is relevant to any situation! But you've got more folks to talk to, don'chya? You should go on and do that before they get antsy.",
                                name: "Dimitri"
                            },
                            {
                                text: "Thanks.",
                                name: "Me"
                            }
                        ]
                    },
                    {
                        text: 'Any topping',
                        dialogue: [
                            {
                                text: 'Theoretically, you could apply any topping to any flavor of ice cream. No one\'s stopping you from putting blueberry syrup on Moose Tracks if you really want to.',
                                name: 'Me'
                            },
                            {
                                text: "It'd be...unique, seeing how it'd be chocolate, peanut butter, and blueberry. If that's what you're into, though, then more power to you.",
                                name: 'Me'
                            },
                            {
                                text: "Good point!",
                                name: 'Dimitri',
                                mood: 'Happy'
                            },
                            {
                                text: "What does this have to do with the situation at hand, though?",
                                name: 'Me'
                            },
                            {
                                text: "Ice cream has everything to do with it.",
                                name: 'Dimitri'
                            },
                            {
                                text: "If you've got ice cream that can't go with any of the other toppings, then that's a big problem. There's no use fighting to put toppings on an ice cream that won't blend with anything else.",
                                name: 'Dimitri',
                                mood: 'Neutral'
                            },
                            {
                                text: "Think about it, Cap'n!",
                                name: 'Dimitri',
                                mood: 'Happy'
                            },
                            {
                                text: "Now, you should get to talking to some of the other fine folks lounging around here. I don't want to take up all of your time.",
                                name: 'Dimitri',
                                mood: 'Neutral'
                            },
                            {
                                text: "Thanks.",
                                name: 'Me'
                            },
                            {
                                text: "...I think?",
                                name: 'Me'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Tell him to focus',
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
                    },
                    {
                        text: "So people can just eat it angrily? I don't think ice cream is a cure-all for the issue we're having.",
                        name: 'Me'
                    },
                    {
                        text: "Maybe talking to Dimitri first was a mistake. Time is too precious to waste talking about ice cream."
                    },
                    {
                        text: "It's not like we have time for an ice cream party, either.",
                        name: 'Me'
                    },
                    {
                        text: "But will we live long enough to have one after that monster gets to us?",
                        name: 'Dimitri',
                        mood: 'Neutral'
                    },
                    {
                        text: "The monster may have an ice cream part of his own with our squishy remains. Delicious!",
                        name: 'Dimitri',
                        mood: 'Happy'
                    },
                    {
                        text: "Delicious for the monster, sure. For us? Not so much.",
                        name: 'Me'
                    },
                    {
                        text: "You should run along now and start chatting up the others. You've got a bunch of stuff to handle, don'chya?",
                        name: 'Dimitri'
                    },
                    {
                        text: "I don't envy you one bit. Good luck, Cap'n {{name}}!",
                        name: 'Dimitri'
                    },
                    {
                        text: "Thanks.",
                        name: 'Me'
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