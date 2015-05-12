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
    console.log(user);

    if (user.services.facebook) {
        var facebook = user.services.facebook;
        options.profile.email = facebook.email;
        options.profile.gender = facebook.gender;
        options.profile.locale = facebook.locale;
    }

    options.createdAt = new Date();
    options.profile.generosity = 0;
    console.log(user);
    if (options.profile)
        user.profile = options.profile;

    return user;
});