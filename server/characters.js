if (Players.find().count() === 0) {

    kaiId = Actors.insert({
        name: 'Kai',
        position: 'Left Leg',
        mood: 'Neutral',
        morale: 0
    });

    dimitriId = Actors.insert({
        name: 'Dimitri',
        position: 'Right Arm',
        mood: 'Neutral',
        morale: 0
    });

    marcelId = Actors.insert({
        name: 'Marcel',
        position: 'Left Arm',
        mood: 'Neutral',
        morale: 0
    });

    giselleId = Actors.insert({
        name: 'Giselle',
        position: 'Right Leg',
        mood: 'Neutral',
        morale: 0
    });

}