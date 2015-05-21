Template.find.onRendered(function() {
    Session.set('gender', null);
    Session.set('recipient', null);
    Session.set('age', null);
    Session.set('minPrice', null);
    Session.set('maxPrice', null);
    Session.set('stepOne', true);
    Session.set('stepTwo', false);
    Session.set('stepThree', false);

    // check whether we got a gender from the route
    Session.set('hasGender', Router.current().data().routeGender != null);
});

Template.find.helpers({
    updatedRecipients: function() {
        if (Session.get('gender')) {
            return Recipients.find(
                {$or: [ {gender: Session.get('gender')}, {gender: 'neutral'} ] },
                {limit: 11, sort: {giftCount: -1}}
            )
        }
    },
    stepOne: function() {
        return Session.get('stepOne');
    },
    stepTwo: function() {
        return Session.get('stepTwo');
    },
    stepThree: function() {
        return Session.get('stepThree');
    },
    gender: function() {
        return Session.get('gender') || Router.current().data().routeGender;
    },
    recipient: function() {
        return Session.get('recipient');
    },
    age: function() {
        return Session.get('age');
    },
    minPrice: function() {
        return Session.get('minPrice');
    },
    maxPrice: function() {
        return Session.get('maxPrice');
    },
    genderPossessive: function() {
        // try to get text from Router
        var routeText = Router.current().data().genderPossessive;
        if (routeText)
            return routeText;

        // try to get text from Session
        var sessionGender = Session.get('gender');
        if (sessionGender) {
            if (sessionGender === 'male')
                return 'His';
            return 'Her';
        }

        // if we don't know gender, return default text
        return 'Her/His';
    }
});

Template.find.events({
    'change [data-hook=gender]': function(e) {
        e.preventDefault();

        var gender = $(e.target).val();

        Session.set('gender', gender);
        Session.set('hasGender', true);

        // show next step if recipient has been selected
        if (Session.get('recipient'))
            Session.set('stepTwo', true);
    },
    'change [data-hook=recipient]': function(e) {
        e.preventDefault();

        var recipient = $(e.target).val();

        Session.set('recipient', recipient);

        // show next step if gender has been defined
        if (Session.get('hasGender'))
            Session.set('stepTwo', true);
    },
    'change [data-hook=age]': function(e) {
        e.preventDefault();

        var age = $(e.target).val();

        Session.set('age', age);

        Session.set('stepThree', true);
    },
    'keypress [data-hook=min-price]': function(e) {
        var character = String.fromCharCode(e.which);
        var minPrice = $(e.target).val() + character;

        Session.set('minPrice', minPrice);

        if (Session.get('maxPrice'))
            Session.set('stepThree', true);
    },
    'change [data-hook=min-price]': function(e) {
        e.preventDefault();
        var minPrice = $(e.target).val();

        Session.set('minPrice', minPrice);

        if (Session.get('maxPrice'))
            Session.set('stepThree', true);
    },
    'keypress [data-hook=max-price]': function(e) {
        var character = String.fromCharCode(e.which);
        var maxPrice = $(e.target).val() + character;

        Session.set('maxPrice', maxPrice);

        if (Session.get('minPrice'))
            Session.set('stepThree', true);
    },
    'change [data-hook=max-price]': function(e) {
        e.preventDefault();
        var maxPrice = $(e.target).val();

        Session.set('maxPrice', maxPrice);

        if (Session.get('minPrice'))
            Session.set('stepThree', true);
    }
});
