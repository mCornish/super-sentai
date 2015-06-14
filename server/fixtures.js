// Fixture data
if (Gifts.find().count() === 0) {
    var now = new Date().getTime();

    // create two users
    var janeId = Meteor.users.insert({
        profile: { name: 'Jane Doe' }
    });
    var jane = Meteor.users.findOne(janeId);
    var mikeId = Meteor.users.insert({
        profile: { name: 'Mike Cornish' }
    });
    var mike = Meteor.users.findOne(mikeId);

    var headphonesId = Gifts.insert({
        title: 'Perfect Movie Headphones',
        userId: mike._id,
        author: mike.profile.name,
        image: 'http://ecx.images-amazon.com/images/I/41encHjQnhL._SY450_.jpg',
        link: 'http://www.amazon.com/dp/B002TLT10S/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=3OUL68SBBBXSI&coliid=I3MZZGGEXFH3AM&psc=1',
        recipient: 'mom',
        price: 199.99,
        age: 21,
        submitted: new Date(now - 7 * 3600 * 1000),
        commentsCount: 2,
        wanters: [],
        wants: 0
    });

    Comments.insert({
        giftId: headphonesId,
        userId: jane._id,
        author: jane.profile.name,
        submitted: new Date(now - 5 * 3600 * 1000),
        body: 'I need these headphones!'
    });

    Comments.insert({
        giftId: headphonesId,
        userId: mike._id,
        author: mike.profile.name,
        submitted: new Date(now - 5 * 3600 * 1000),
        body: 'Grab them while you can. They\'re high quality for that price.'
    });

    Gifts.insert({
        title: 'The husband loves these',
        userId: jane._id,
        author: jane.profile.name,
        image: 'http://ecx.images-amazon.com/images/I/51sfxlEd1AL._SX425_.jpg',
        link: 'http://www.amazon.com/dp/B000XFW6OU/ref=wl_it_dp_o_pC_S_ttl?_encoding=UTF8&colid=3OUL68SBBBXSI&coliid=IDC1G4192VKCA&psc=1',
        recipient: 'dad',
        price: 19.95,
        age: 33,
        submitted: new Date(now - 14 * 3600 * 1000),
        commentsCount: '0',
        wanters: [],
        wants: 0
    });
    Recipients.insert({
        name: 'mom',
        gender: 'female',
        giftCount: 0
    });
    Recipients.insert({
        name: 'dad',
        gender: 'male',
        giftCount: 1
    });
    for (var i = 0; i < 30; i++) {
        Gifts.insert({
            title: 'Test post #' + i,
            userId: mike._id,
            author: mike.profile.name,
            image: 'http://popmusicexperience.co.uk/wp-content/uploads/2013/07/giftvoucherpic.gif',
            link: 'http://google.com/?q=test-' + i,
            recipient: 'male#' + i,
            price: parseFloat(generateRandFloat(5, 1000, 2)),
            age: generateRandInt(1, 100),
            submitted: new Date(now - 14 * 3600 * 1000),
            commentsCount: '0',
            wanters: [],
            wants: 0
        });
        Recipients.insert({
            name: 'male#' + i,
            gender: 'male',
            giftCount: Math.floor(Math.random() * 10 * i)
        });
        Recipients.insert({
            name: 'female#' + i,
            gender: 'female',
            giftCount: Math.floor(Math.random() * 10 * i)
        });
        Recipients.insert({
            name: 'neutral#' + i,
            gender: 'neutral',
            giftCount: Math.floor(Math.random() * 10 * i)
        });
    }


}