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
        mood: 'neutral',
        morale: 0
    });

    var psychoId = Actors.insert({
        name: 'Dimitri',
        position: 'Right Arm',
        mood: 'neutral',
        morale: 0
    });

    var marcelId = Actors.insert({
        name: 'Marcel',
        position: 'Left Leg',
        mood: 'neutral',
        morale: 0
    });

    var sassyId = Actors.insert({
        name: 'Giselle',
        position: 'Right Leg',
        mood: 'neutral',
        morale: 0
    });

    // create a convo
    Convos.insert({
        actor: psychoId,
        greeting: 'Hi, {{name}}.',
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
        actor: sassyId,
        greeting: 'Have you seen the sky today?',
        choices: [
            {
                text: 'Hi',
                response: {
                    text: 'I asked you a question.',
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
                text: 'What?',
                response: {
                    text: 'Did you not hear me? Or are you simply stupid?',
                    choices: [

                    ]
                }
            }
        ]
    });

    for (var i = 0; i < 30; i++) {

    }
}