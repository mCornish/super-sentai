if (Players.find().count() === 0) {

    kaiId = Actors.insert({
        name: 'Kai',
        position: 'Left Leg'
    });

    dimitriId = Actors.insert({
        name: 'Dimitri',
        position: 'Right Arm'
    });

    marcelId = Actors.insert({
        name: 'Marcel',
        position: 'Left Arm'
    });

    giselleId = Actors.insert({
        name: 'Giselle',
        position: 'Right Leg'
    });

}