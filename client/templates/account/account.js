Template.account.helpers({

});

Template.account.events({
    'click [data-hook=reset-password]': function() {
        var confirm = window.confirm('Are you sure you want to reset your password?');

        if (confirm === true) {
            Accounts.forgotPassword({email: Meteor.user().emails[0]}, function(error) {
                if (error) {
                    alert(error.reason);
                } else {
                    alert('email sent');
                }
            });
        }
    }
});