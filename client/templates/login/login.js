Template.login.onRendered( function() {
    Session.set('creatingUser', false);
    Session.set('userSubmitErrors', {});
});

Template.login.helpers({
    creatingUser: function() {
        return Session.get('creatingUser');
    },
    errorMessage: function(field) {
        return Session.get('userSubmitErrors')[field];
    },
    errorClass: function(field) {
        return !!Session.get('userSubmitErrors')[field] ? 'has-error' : '';
    }
});

Template.login.events({
    'submit form': function(e) {
        e.preventDefault();

        var username = $(e.target).find('[data-hook=username]').val();
        var password = $(e.target).find('[data-hook=password]').val();
        var passwordAgain = $(e.target).find('[data-hook=password-again]').val();

        if (Session.get('creatingUser')) {
            // create new user
            var user = {
                username: username,
                password: password,
                passwordAgain: passwordAgain,
                profile: {
                    created: new Date(),
                    xp: 0
                }
            };

            var errors = validateUser(user);
            if (errors.username || errors.password || errors.passwordAgain)
                return Session.set('userSubmitErrors', errors);

            Accounts.createUser(user, function(error) {
                if (error) {
                    // clear errors
                    Session.set('userSubmitErrors', {});
                    // throw createUser error
                    return throwError(error.reason);
                } else {
                    Router.go('/');
                }
            });
        } else {
            // log in
            var user = {
                username: username,
                password: password
            };

            var errors = validateUser(user);
            if (errors.username || errors.password)
                return Session.set('userSubmitErrors', errors);

            Meteor.loginWithPassword(username, password, function(error) {
                if (error) {
                    // clear errors
                    Session.set('userSubmitErrors', {});
                    // throw login error
                    return throwError(error.reason);
                } else {
                    Router.go('/');
                }
            });
        }
    },
    'click [data-hook="switch-state"]': function(e) {
        e.preventDefault();
        var currentState = Session.get('creatingUser');
        Session.set('creatingUser', !currentState);
    }
});

var validateUser = function(user) {
    var errors = {};
    if (!user.username)
        errors.username = 'Please enter a username';
    if (!user.password)
        errors.password = 'Please enter a password';
    if (Session.get('creatingUser')) {
        if (!user.passwordAgain)
            errors.passwordAgain = 'Please re-enter password';
        if (user.password !== user.passwordAgain)
            errors.passwordAgain = 'Passwords do not match';
    }
    return errors;
};