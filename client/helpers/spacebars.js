Template.registerHelper('pluralize', function(n, thing) {
    if (n === 1) {
        return '1 ' + thing;
    } else {
        return n + ' ' + thing + 's';
    }
});

Template.registerHelper('activeRouteClass', function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();

    var active = _.any(args, function(name) {
        return Router.current() && Router.current().route.getName() === name
    });

    return active && 'active';
});