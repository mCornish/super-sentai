if (Players.find().count() === 0) {

    // ----------------------
    // DIMITRI
    // ----------------------
    Convos.insert({
        actor: dimitriId,
        turn: 2,
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
                        text: "Maybe I should've talked to someone else. Time is too precious to waste talking about ice cream."
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
        turn: 2,
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
        turn: 2,
        dialogue: [
            {
                text: "Ah, it's you.",
                name: 'Marcel'
            },
            {
                text: "Happy to see you, too, Marcel.",
                name: 'Me'
            },
            {
                text: "Why would you be happy? This city's about to be decimated.",
                name: 'Marcel'
            },
            {
                text: "You really think this city's about to be destroyed?.",
                name: 'Me'
            },
            {
                text: "I'm facing the facts. This team is a mess and I highly doubt you've successfully rounded up all the troops. I'm just being realistic.",
                name: 'Marcel'
            },
            {
                text: "Sounds more like pessimism to me.",
                name: 'Me'
            },
            {
                text: "Is there a difference?",
                name: 'Marcel',
                mood: 'Confused'
            },
            {
                text: "Of course there is. The glass isn't always half empty.",
                name: 'Me'
            },
            {
                text: "The glass is 50 percent, that's all. And it looks like the monster is going to hit this building at any second.",
                name: 'Marcel',
                mood: 'Neutral'
            },
            {
                text: "In that case, we should cut straight to the point.",
                name: 'Me'
            },
            {
                text: "Let me guess: You're going to try and force a problem out of me and then try to solve it.",
                name: 'Marcel'
            },
            {
                text: "Yeah, that's the point of all of this.",
                name: 'Me'
            },
            {
                text: "My only problems in life right now are writing college papers and choosing the easiest professors.",
                name: 'Marcel'
            },
            {
                text: "Not the monster out there?",
                name: 'Me'
            },
            {
                text: "I'll get to that once I figure out what to write my paper on.",
                name: 'Marcel'
            },
            {
                text: "What's the topic?.",
                name: 'Me'
            },
            {
                text: "I thought you wanted to cut straight to the point?",
                name: 'Marcel',
                mood: 'Happy'
            },
            {
                text: "Fine. We'll get back to that later.",
                name: 'Me'
            },
            {
                text: "What have you been talking about with all of the others?",
                name: 'Marcel',
                mood: 'Neutral'
            },
            {
                text: "Just trying to work through some issues.",
                name: 'Me'
            },
            {
                text: "Heh, I doubt that's been working out for you. You can't talk to someone like Dimitri. And Giselle and Kai? They're both so full of themselves.",
                name: 'Marcel'
            }
        ],
        choices: [
            {
                text: "And you aren't?",
                points: 1,
                dialogue: [
                    {
                        text: "And you aren't?",
                        name: 'Me'
                    },
                    {
                        text: "Excuse me?",
                        name: 'Marcel',
                        mood: 'Angry'
                    },
                    {
                        text: "You've been uppity with me from the moment I walked over here. You're more similar to the rest of us than you think.",
                        name: 'Me'
                    },
                    {
                        text: "If you remember that, you might have an easier time getting along with us. It's not a you versus us situation. It's an us versus giant monsters situation.",
                        name: 'Me'
                    },
                    {
                        text: "You can think whatever you want about me.",
                        name: 'Marcel',
                        mood: 'Neutral'
                    },
                    {
                        text: "Think about what I said. I like you, Marcel. I wouldn't have hired you if I didn't.",
                        name: 'Me'
                    },
                    {
                        text: "Whatever",
                        name: 'Marcel'
                    },
                    {
                        text: "There, you got to put in your two cents. Now can you go? I have just enough time to finish a paper that's due tomorrow.",
                        name: 'Marcel'
                    },
                    {
                        text: "I'm glad you're so diligent about your studies. What keeps you from being as dedicated to this team?",
                        name: 'Me'
                    },
                    {
                        text: "I'm not getting paid.",
                        name: 'Marcel'
                    },
                    {
                        text: "No, your contract says that you're getting your stipend after you finish working with us..",
                        name: 'Me'
                    },
                    {
                        text: "And I'm doing all I can to stay with you guys, including not being killed by Dimitri. It's a wonder that I'm even standing here in front of you. You've got to do something about him. Not just for my sake, but for the sake of all the interns that might join you after me.",
                        name: 'Marcel'
                    },
                    {
                        text: "If we offer you a fulltime employment, then we won't have any interns after you..",
                        name: 'Me'
                    },
                    {
                        text: "If I accept the offer, that is.",
                        name: 'Marcel'
                    },
                    {
                        text: "You wouldn't?",
                        name: 'Me'
                    },
                    {
                        text: "Probably not, considering Dimitri's behavior.",
                        name: 'Marcel'
                    },
                    {
                        text: "What's he doing?",
                        name: 'Me'
                    },
                    {
                        text: "You haven't noticed? He's been trying to kill me since the day I got here.",
                        name: 'Marcel'
                    },
                    {
                        text: "Oh, right. We talked about that. He's got an interesting definition for \"game\".",
                        name: 'Me',
                        check: 'haveTalkedDimitri'
                    },
                    {
                        text: "I wouldn't say that he's trying to kill you so much that he doesn't know what your limits are. Dimitri's not the best with murky boundaries.",
                        name: 'Me'
                    },
                    {
                        text: "Running away screaming is a murky boundary?",
                        name: 'Marcel',
                        mood: 'Confused'
                    },
                    {
                        text: "Dimitri is...different.",
                        name: 'Me'
                    },
                    {
                        text: "He's been playing dangerous \"games\" like this since he was a child.",
                        name: 'Me',
                        mood: 'haveTalkedDimitri'
                    },
                    {
                        text: "This is why we have that waiver.",
                        name: 'Me'
                    },
                    {
                        text: "Right, and all of that money at the end of the internship.",
                        name: 'Marcel',
                        mood: 'Neutral'
                    },
                    {
                        text: "Since you insist on being so helpful, what do you want me to do about him? When he's trying to play a game like \"dodge the knife\" or \"run from the taser,\" what am I supposed to do?",
                        name: 'Marcel'
                    },
                    {
                        text: "Hm, he could take your screaming as a sign that you're interested in what he's playing. On the other hand, he could want you to step up and challenge him back.",
                        name: 'Me'
                    },
                    {
                        text: "Which one should I do?.",
                        name: 'Me'
                    }
                ],
                choices: [
                    {
                        text: "Show no interest",
                        points: 1,
                        dialogue: [
                            {
                                text: "You should act like you're bored.",
                                name: "Me"
                            },
                            {
                                text: "Won't that just make him worse?",
                                name: "Marcel",
                                mood: 'Confused'
                            },
                            {
                                text: "So far, he gets worse the more scared the interns seem. What if you try doing the opposite? Then, you could redirect his attention; get him to play something nicer like backgammon.",
                                name: "Me"
                            },
                            {
                                text: "I don't play backgammon.",
                                name: "Marcel"
                            },
                            {
                                text: "Ask him to help you out with one of your papers. Ask him for an interview. Use this internship opportunity to it's fullest.",
                                name: "Me"
                            },
                            {
                                text: "It's not every day that you work alongside a reformed villain. We're one of the few super hero teams that has one.",
                                name: "Me"
                            },
                            {
                                text: "And our image suffers for it.",
                                name: "Marcel",
                                mood: 'Neutral'
                            },
                            {
                                text: "We can handle it.",
                                name: "Me"
                            },
                            {
                                text: "Have you checked our Twitter feed?",
                                name: "Marcel"
                            },
                            {
                                text: "No. I think you're the only one of us who looks at that.",
                                name: "Me"
                            },
                            {
                                text: "That's because I manage it. I'd recommend taking our public image a little more seriously.",
                                name: "Marcel"
                            },
                            {
                                text: "Talk to Giselle about that. She'll take care of whatever social media issues we're having.",
                                name: "Me",
                                check: 'haveTalkedGiselle'
                            },
                            {
                                text: "I might do that.",
                                name: "Marcel",
                                check: 'haveTalkedGiselle'
                            },
                            {
                                text: "I guess it couldn't hurt to try acting bored.",
                                name: "Marcel"
                            },
                            {
                                text: "Then again, it could hurt quite a bit.",
                                name: "Marcel",
                                mood: 'Sad'
                            },
                            {
                                text: "I'll act as a mediator until we're sure he won't react...strangely.",
                                name: "Me"
                            },
                            {
                                text: "He always reacts strangely.",
                                name: "Marcel",
                                mood: 'Neutral'
                            },
                            {
                                text: "I meant that I'll make sure he doesn't kill you. I was trying to be subtle.",
                                name: "Me"
                            },
                            {
                                text: "Gee, thanks.",
                                name: "Marcel"
                            },
                            {
                                text: "Do you think you're ready to fight that monster?",
                                name: "Me"
                            },
                            {
                                text: "Do I have a choice?",
                                name: "Marcel"
                            },
                            {
                                text: "Not really.",
                                name: "Me"
                            },
                            {
                                text: "Then I guess we'll find out.",
                                name: "Marcel"
                            },
                            {
                                text: "Alright. Guess I'll see you on the battlefield, then.",
                                name: "Me"
                            },
                            {
                                text: "You shall.",
                                name: "Marcel"
                            }
                        ]
                    },
                    {
                        text: "Attack him back",
                        points: -1,
                        dialogue: [
                            {
                                text: "You should attack him back.",
                                name: "Me"
                            },
                            {
                                text: "That doesn't sound safe.",
                                name: "Marcel",
                                mood: 'Confused'
                            },
                            {
                                text: "It'll confuse him so much that he'll back off. And when I say attack, by the way, I don't mean actually hurt him. He hasn't ever hurt you, right?",
                                name: "Me"
                            },
                            {
                                text: "Only mentally.",
                                name: "Marcel"
                            },
                            {
                                text: "Right! So put on a menacing smile and give Dimitri a taste of his own medicine",
                                name: "Me"
                            },
                            {
                                text: "I guess it's worth a shot.",
                                name: "Marcel"
                            },
                            {
                                text: "Do you think you're ready to fight that monster?",
                                name: "Me"
                            },
                            {
                                text: "Do I have a choice?",
                                name: "Marcel"
                            },
                            {
                                text: "Not really.",
                                name: "Me"
                            },
                            {
                                text: "Then I guess we'll find out.",
                                name: "Marcel"
                            },
                            {
                                text: "Alright. Guess I'll see you on the battlefield, then.",
                                name: "Me"
                            },
                            {
                                text: "You shall.",
                                name: "Marcel"
                            }
                        ]
                    }
                ]
            },
            {
                text: "I can still try",
                points: 0,
                dialogue: [
                    {
                        text: "Nothing will stop me from trying.",
                        name: 'Me'
                    },
                    {
                        text: "Forever the optimist, I see.",
                        name: 'Marcel'
                    },
                    {
                        text: "I feel like I don't have much choice. If I stood around acting as glum as the rest of you, then Neo Loch Rock City would've been obliterated a long time ago.",
                        name: 'Me'
                    },
                    {
                        text: "Good luck getting through to them. Giselle's going to be too busy checking her nails. Kai's going to be ready to punch you. Remember what they did to the wall?",
                        name: 'Marcel'
                    },
                    {
                        text: "And Dimitri, well, you know exactly how Dimitri is.",
                        name: 'Marcel',
                        mood: 'Angry'
                    },
                    {
                        text: "Happy and lovable?",
                        name: 'Me'
                    },
                    {
                        text: "Dangerous.",
                        name: 'Marcel'
                    },
                    {
                        text: "There, you got to put in your two cents. Now can you go? I have just enough time to finish a paper that's due tomorrow.",
                        name: 'Marcel'
                    },
                    {
                        text: "I'm glad you're so diligent about your studies. What keeps you from being as dedicated to this team?",
                        name: 'Me'
                    },
                    {
                        text: "I'm not getting paid.",
                        name: 'Marcel'
                    },
                    {
                        text: "No, your contract says that you're getting your stipend after you finish working with us..",
                        name: 'Me'
                    },
                    {
                        text: "And I'm doing all I can to stay with you guys, including not being killed by Dimitri. It's a wonder that I'm even standing here in front of you. You've got to do something about him. Not just for my sake, but for the sake of all the interns that might join you after me.",
                        name: 'Marcel'
                    },
                    {
                        text: "If we offer you a fulltime employment, then we won't have any interns after you..",
                        name: 'Me'
                    },
                    {
                        text: "If I accept the offer, that is.",
                        name: 'Marcel'
                    },
                    {
                        text: "You wouldn't?",
                        name: 'Me'
                    },
                    {
                        text: "Probably not, considering Dimitri's behavior.",
                        name: 'Marcel'
                    },
                    {
                        text: "What's he doing?",
                        name: 'Me'
                    },
                    {
                        text: "You haven't noticed? He's been trying to kill me since the day I got here.",
                        name: 'Marcel'
                    },
                    {
                        text: "Oh, right. We talked about that. He's got an interesting definition for \"game\".",
                        name: 'Me',
                        check: 'haveTalkedDimitri'
                    },
                    {
                        text: "I wouldn't say that he's trying to kill you so much that he doesn't know what your limits are. Dimitri's not the best with murky boundaries.",
                        name: 'Me'
                    },
                    {
                        text: "Running away screaming is a murky boundary?",
                        name: 'Marcel',
                        mood: 'Confused'
                    },
                    {
                        text: "Dimitri is...different.",
                        name: 'Me'
                    },
                    {
                        text: "He's been playing dangerous \"games\" like this since he was a child.",
                        name: 'Me',
                        mood: 'haveTalkedDimitri'
                    },
                    {
                        text: "This is why we have that waiver.",
                        name: 'Me'
                    },
                    {
                        text: "Right, and all of that money at the end of the internship.",
                        name: 'Marcel',
                        mood: 'Neutral'
                    },
                    {
                        text: "Since you insist on being so helpful, what do you want me to do about him? When he's trying to play a game like \"dodge the knife\" or \"run from the taser,\" what am I supposed to do?",
                        name: 'Marcel'
                    },
                    {
                        text: "Hm, he could take your screaming as a sign that you're interested in what he's playing. On the other hand, he could want you to step up and challenge him back.",
                        name: 'Me'
                    },
                    {
                        text: "Which one should I do?.",
                        name: 'Me'
                    }
                ],
                choices: [
                    {
                        text: "Show no interest",
                        points: 1,
                        dialogue: [
                            {
                                text: "You should act like you're bored.",
                                name: "Me"
                            },
                            {
                                text: "Won't that just make him worse?",
                                name: "Marcel",
                                mood: 'Confused'
                            },
                            {
                                text: "So far, he gets worse the more scared the interns seem. What if you try doing the opposite? Then, you could redirect his attention; get him to play something nicer like backgammon.",
                                name: "Me"
                            },
                            {
                                text: "I don't play backgammon.",
                                name: "Marcel"
                            },
                            {
                                text: "Ask him to help you out with one of your papers. Ask him for an interview. Use this internship opportunity to it's fullest.",
                                name: "Me"
                            },
                            {
                                text: "It's not every day that you work alongside a reformed villain. We're one of the few super hero teams that has one.",
                                name: "Me"
                            },
                            {
                                text: "And our image suffers for it.",
                                name: "Marcel",
                                mood: 'Neutral'
                            },
                            {
                                text: "We can handle it.",
                                name: "Me"
                            },
                            {
                                text: "Have you checked our Twitter feed?",
                                name: "Marcel"
                            },
                            {
                                text: "No. I think you're the only one of us who looks at that.",
                                name: "Me"
                            },
                            {
                                text: "That's because I manage it. I'd recommend taking our public image a little more seriously.",
                                name: "Marcel"
                            },
                            {
                                text: "Talk to Giselle about that. She'll take care of whatever social media issues we're having.",
                                name: "Me",
                                check: 'haveTalkedGiselle'
                            },
                            {
                                text: "I might do that.",
                                name: "Marcel",
                                check: 'haveTalkedGiselle'
                            },
                            {
                                text: "I guess it couldn't hurt to try acting bored.",
                                name: "Marcel"
                            },
                            {
                                text: "Then again, it could hurt quite a bit.",
                                name: "Marcel",
                                mood: 'Sad'
                            },
                            {
                                text: "I'll act as a mediator until we're sure he won't react...strangely.",
                                name: "Me"
                            },
                            {
                                text: "He always reacts strangely.",
                                name: "Marcel",
                                mood: 'Neutral'
                            },
                            {
                                text: "I meant that I'll make sure he doesn't kill you. I was trying to be subtle.",
                                name: "Me"
                            },
                            {
                                text: "Gee, thanks.",
                                name: "Marcel"
                            },
                            {
                                text: "Do you think you're ready to fight that monster?",
                                name: "Me"
                            },
                            {
                                text: "Do I have a choice?",
                                name: "Marcel"
                            },
                            {
                                text: "Not really.",
                                name: "Me"
                            },
                            {
                                text: "Then I guess we'll find out.",
                                name: "Marcel"
                            },
                            {
                                text: "Alright. Guess I'll see you on the battlefield, then.",
                                name: "Me"
                            },
                            {
                                text: "You shall.",
                                name: "Marcel"
                            }
                        ]
                    },
                    {
                        text: "Attack him back",
                        points: -1,
                        dialogue: [
                            {
                                text: "You should attack him back.",
                                name: "Me"
                            },
                            {
                                text: "That doesn't sound safe.",
                                name: "Marcel",
                                mood: 'Confused'
                            },
                            {
                                text: "It'll confuse him so much that he'll back off. And when I say attack, by the way, I don't mean actually hurt him. He hasn't ever hurt you, right?",
                                name: "Me"
                            },
                            {
                                text: "Only mentally.",
                                name: "Marcel"
                            },
                            {
                                text: "Right! So put on a menacing smile and give Dimitri a taste of his own medicine",
                                name: "Me"
                            },
                            {
                                text: "I guess it's worth a shot.",
                                name: "Marcel"
                            },
                            {
                                text: "Do you think you're ready to fight that monster?",
                                name: "Me"
                            },
                            {
                                text: "Do I have a choice?",
                                name: "Marcel"
                            },
                            {
                                text: "Not really.",
                                name: "Me"
                            },
                            {
                                text: "Then I guess we'll find out.",
                                name: "Marcel"
                            },
                            {
                                text: "Alright. Guess I'll see you on the battlefield, then.",
                                name: "Me"
                            },
                            {
                                text: "You shall.",
                                name: "Marcel"
                            }
                        ]
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
        turn: 2,
        dialogue: [
            {
                text: "Let me guess: You're here to convince me to hold hands with everyone and sing Kumbaya. That's not my style!",
                name: 'Kai',
                mood: 'Angry'
            },
            {
                text: "I pretty much figured that out after you punch a hole in the wall.",
                name: 'Me'
            },
            {
                text: "I get a little mad sometimes. So what?",
                name: 'Kai'
            },
            {
                text: "\"A little\" mad doesn't lower property value.",
                name: 'Me'
            },
            {
                text: "So I get angry. Big deal. You here to lecture me? Cause that would be a waste of time for both of us.",
                name: 'Kai'
            },
            {
                text: "I'm not the one that needs the lecutre, anyway. You should be lecturing those other dummies...especially Giselle. She's the one who started this whole mess.",
                name: 'Kai',
                mood: 'Neutral'
            },
            {
                text: "What did she do?",
                name: 'Me'
            },
            {
                text: "By the time I finish explaining, that monster will have digested us and will have a monster family on the new monster-Earth.",
                name: 'Kai',
                mood: 'Angry'
            },
            {
                text: "Just tell me what happened.",
                name: 'Me'
            },
            {
                text: "Is that an order?",
                name: 'Kai'
            },
            {
                text: "Look, I'm not trying to be bossy. I'm just trying to save our city, same as always.",
                name: 'Me'
            },
            {
                text: "No, you're being bossy. You're always bossy!",
                name: 'Kai'
            },
            {
                text: "Like when?",
                name: 'Me'
            },
            {
                text: "Remember how none of us wanted to accept a villain on our team? None of us accept you! Now we all have to watch our backs whenever Dimitri is around. You FORCED us to take him in!",
                name: 'Kai'
            },
            {
                text: "Dimitri is a good guy. I'm sorry if I was a bit of a jerk, but there was a spot that had to be filled and he was a good fit.",
                name: 'Me'
            },
            {
                text: "How is a villain a good fit for a super hero team?",
                name: 'Kai'
            },
            {
                text: "Let's get back to the heart of the issue. What's going on with you and Giselle? I thought you two were best friends.",
                name: 'Me'
            },
            {
                text: "...",
                name: 'Kai',
                mood: 'Neutral'
            },
            {
                text: "Me too.",
                name: 'Kai',
                mood: 'Sad'
            },
            {
                text: "But now she's just a jerk! All she cares about is partying and having a good time. We're super heroes. We have responsibilities. Did you know she was club hopping until 4am this morning?",
                name: 'Kai',
                mood: 'Angry'
            },
            {
                text: "How are we supposed to rely on someone like that?",
                name: 'Kai',
                mood: 'Neutral'
            }
        ],
        choices: [
            {
                text: "You're exaggerating",
                points: 0,
                dialogue: [
                    {
                        text: "This doesn't sound like that big of a deal. You're making a mountain out of a mole hill.",
                        name: 'Me'
                    },
                    {
                        text: "It's way more than a mountain. I've been putting up with her for too long.",
                        name: 'Kai',
                        mood: 'Angry'
                    },
                    {
                        text: "A giant monster is about to kill us all. Doesn't that seem like a bigger issue?",
                        name: 'Me'
                    },
                    {
                        text: "I don't expect you to understand. Why don't you take your \"let's all get along\" crap somewhere else? I'm done listening to it.",
                        name: 'Kai'
                    }
                ],
                choices: [
                    {
                        text: "Put your drama aside",
                        points: -1,
                        dialogue: [
                            {
                                text: "I'm sure you can pretend to like Giselle for thirty minutes. After the monster is dead, you can get right back to it. Who knows, maybe beating something up will make you feel better.",
                                name: "Me"
                            },
                            {
                                text: "Save it. I don't want to hear another word from you. Talk to someone who cares.",
                                name: 'Kai'
                            },
                        ]
                    },
                    {
                        text: "Grow up",
                        points: -1,
                        dialogue: [
                            {
                                text: "Stop being such a big baby.",
                                name: "Me"
                            },
                            {
                                text: "You did NOT just say that! Get out of my face!",
                                name: "Kai"
                            }
                        ]
                    }
                ]
            },
            {
                text: "It doesn't bother me",
                points: 0,
                dialogue: [
                    {
                        text: "What Giselle does in her free time doesn't matter as long as she's still doing her job.",
                        name: 'Me'
                    },
                    {
                        text: "That's the thing, though. All of this partying is having a bad effect on her.",
                        name: 'Kai'
                    },
                    {
                        text: "Since we share EVE's legs, I always end up following her lead. I notice all of her mistakes.",
                        name: 'Kai'
                    },
                    {
                        text: "It pisses me off.",
                        name: 'Kai',
                        mood: 'Angry'
                    },
                    {
                        text: "I can see that. Was there anything specific that she did to make you so angry?",
                        name: 'Me'
                    },
                    {
                        text: "...",
                        name: 'Kai',
                        mood: 'Neutral'
                    },
                    {
                        text: "...",
                        name: 'Kai'
                    },
                    {
                        text: "SHE STOLE THE LAST DONUT!",
                        name: 'Kai',
                        mood: 'Angry'
                    },
                    {
                        text: "Excuse me?",
                        name: 'Me'
                    },
                    {
                        text: "I bought a box of donuts and she took the last one without asking or even saying anything! Whoever buys th box has the right to the last donut. Everyone knows that!",
                        name: 'Kai',
                        mood: 'Neutral'
                    },
                    {
                        text: "How can I possibly trust Giselle after such a betrayal? She an irresponsible thief!",
                        name: 'Kai'
                    }
                ],
                choices: [
                    {
                        text: "You're being ridiculous",
                        points: -1,
                        dialogue: [
                            {
                                text: "I'm sorry, but you're being ridiculous. You're refusing to save lives because of a donut?",
                                name: "Me"
                            },
                            {
                                text: "It's not just because of the donut! Did the rest of this conversation just get sucked out of your little brain? The damn donut was just the last straw!",
                                name: "Kai",
                                mood: 'Angry'
                            },
                            {
                                text: "You know what, Captain? Do me a favor and get out of my face.",
                                name: "Kai"
                            },
                            {
                                text: "You have to admit you're being silly.",
                                name: "Me"
                            },
                            {
                                text: "La la la, I'm not listening.",
                                name: "Kai",
                                mood: 'Neutral'
                            },
                            {
                                text: "Alright, I get the point.",
                                name: "Me"
                            },
                            {
                                text: "LA LA LA!",
                                name: "Kai",
                                mood: 'Angry'
                            },
                            {
                                text: "Fine.",
                                name: "Me"
                            }
                        ]
                    },
                    {
                        text: "Maybe it was a mistake",
                        points: 1,
                        dialogue: [
                            {
                                text: "Maybe Giselle didn't know about the donut rule. It could've been an honest mistake.",
                                name: "Me"
                            },
                            {
                                text: "I don't know. Giselle has seemed pretty malicious lately. Who steals a donut like that?. That's villainous behavior.",
                                name: "Kai",
                                mood: 'Neutral'
                            },
                            {
                                text: "I'll try talking to her about the donut. There might be a reasonable explanation for all of this.",
                                name: "Me"
                            },
                            {
                                text: "She'll just make up a stupid excuse.",
                                name: "Kai",
                                mood: 'Angry'
                            },
                            {
                                text: "Better to talk to her than to make assumptions.",
                                name: "Me"
                            },
                            {
                                text: "Fine. Good luck with that. Just know she's not above lying to you too.",
                                name: "Kai"
                            }
                        ]
                    }
                ]
            }
        ]
    });
}