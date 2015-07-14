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
        morale: 0
    });

    var psychoId = Actors.insert({
        name: 'Dimitri',
        position: 'Right Arm',
        morale: 0
    });

    var marcelId = Actors.insert({
        name: 'Marcel',
        position: 'Left Leg',
        morale: 0
    });

    var sassyId = Actors.insert({
        name: 'Giselle',
        position: 'Right Leg',
        morale: 0
    });

    // create a convo
    Convos.insert({
        actor: psychoId,
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
                        {
                            text: 'I don\'t know',
                            response: {
                                text: 'Then I do. Simpleton.'
                            }
                        }
                    ]
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