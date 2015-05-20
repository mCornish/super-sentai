ServiceConfiguration.configurations.upsert(
    { service: 'facebook'},
    {
        $set: {
            appId: '955584821127237',
            loginStyle: 'popup',
            secret: 'b3afbb652af09ad1d7249c6ce8b31760'
        }
    }
);

Accounts.onCreateUser(function(options, user) {
    user.emails = [];
    if (user.services.facebook) {
        var facebook = user.services.facebook;
        user.emails.push(facebook.email);
        options.profile.name = facebook.name;
        options.profile.gender = facebook.gender;
        options.profile.locale = facebook.locale;
    } else {
        user.emails.push(user.username);
        user.username = user.username.substr(0, user.username.indexOf('@'));
    }

    user.generosity = 0;
    if (options.profile) {
        user.profile = options.profile;
    }

    console.log(user);
    return user;
});