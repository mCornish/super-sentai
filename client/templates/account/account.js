Template.account.onCreated( function() {
    Session.set('profileSubmitErrors', {});
    Session.set('passwordChange', false);
    Session.set('successMessage', null);
});

Template.account.helpers({
    errorMessage: function(field) {
        return Session.get('profileSubmitErrors')[field];
    },
    errorClass: function(field) {
        return !!Session.get('profileSubmitErrors')[field] ? 'has-error' : '';
    },
    passwordChange: function() {
        return Session.get('passwordChange');
    },
    successMessage: function() {
        return Session.get('successMessage');
    }
});

Template.account.events({
    'submit form': function(e) {
        e.preventDefault();

        var name = $(e.target).find('[name=name]').val(),
            username = $(e.target).find('[name=username]').val(),
            email = $(e.target).find('[name=email]').val(),
            password = $(e.target).find('[name=password]').val(),
            passwordAgain = $(e.target).find('[name=passwordAgain]').val();

        var userProperties = {
            username: username,
            email: email,
            password: password,
            passwordAgain: passwordAgain
        };

        var errors = validateUser(userProperties);
        if (errors.username || errors.email || errors.password || errors.passwordAgain) {
            return Session.set('profileSubmitErrors', errors);
        }

        // create user object with profile data for update
        var user = {
            profile: {
                name: name,
                username: username,
                email: email
            }
        };

        Meteor.users.update(Meteor.userId(), {$set: user}, function(error) {
            if (error) {
                alert(error.reason);
            } else {
                Session.set('successMessage', 'Profile updated');
            }
        });
    },
    // show password-again field when password has a value
    'keypress [data-hook=password]': function() {
        if (Session.equals('passwordChange', false)) {
            Session.set('passwordChange', true);
        }
    },
    // hide password-again field when password blurs with no value
    'blur [data-hook=password]': function(e) {
        console.log($(e.target).val());
        if ( $(e.target).val() === '' ) {
            Session.set('passwordChange', false);
        }
    }
});

var validateUser = function(user) {
    var errors = {};
    if (!user.username) {
        errors.username = 'Please enter a username';
    }
    if (!user.email) {
        errors.email = 'Please enter an email';
    }
    if (Session.get('passwordChange')) {
        if (!user.password) {
            errors.password = 'Please enter a password';
        }
        if (!user.passwordAgain) {
            errors.passwordAgain = 'Please re-enter password';
        }
        if (user.password !== user.passwordAgain) {
            errors.passwordAgain = 'Passwords do not match';
        }
    }
    return errors;
};