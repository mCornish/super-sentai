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

}