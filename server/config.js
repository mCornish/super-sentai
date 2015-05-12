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