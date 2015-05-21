Template.giftsList.onRendered(function() {
    this.find('[data-hook="gifts"]')._uihooks = {
        insertElement: function (node, next) {
            $(node)
                .hide()
                .insertBefore(next)
                .fadeIn();
        },
        moveElement: function (node, next) {
            var $node = $(node), $next = $(next);
            var oldTop = $node.offset().top;
            var height = $node.outerHeight(true);

            // find all the elements between next and node
            var $inBetween = $next.nextUntil(node);
            if ($inBetween.length === 0)
                $inBetween = $node.nextUntil(next);

            // now put node in place
            $node.insertBefore(next);

            // measure new top
            var newTop = $node.offset().top;

            // move node *back* to where it was before
            $node
                .removeClass('animate')
                .css('top', oldTop - newTop);

            // push every other element down (or up) to put them back
            $inBetween
                .removeClass('animate')
                .css('top', oldTop < newTop ? height : -1 * height);

            // force a redraw
            $node.offset();

            // reset everything to 0, animated
            $node.addClass('animate').css('top', 0);
            $inBetween.addClass('animate').css('top', 0);

            //var $node = $(node), $next = $(next);
            //var oldLeft = $node.offset().left;
            //var width = $node.outerWidth(true);
            //
            //// find all the elements between next and node
            //var $inBetween = $next.nextUntil(node);
            //if ($inBetween.length === 0)
            //    $inBetween = $node.nextUntil(next);
            //
            //// now put node in place
            //$node.insertBefore(next);
            //
            //// measure new top
            //var newLeft = $node.offset().left;
            //
            //// move node *back* to where it was before
            //$node
            //    .removeClass('animate')
            //    .css('left', oldLeft - newLeft);
            //
            //// push every other element down (or up) to put them back
            //$inBetween
            //    .removeClass('animate')
            //    .css('left', oldLeft < newLeft ? width : -1 * width);
            //
            //// force a redraw
            //$node.offset();
            //
            //// reset everything to 0, animated
            //$node.addClass('animate').css('left', 0);
            //$inBetween.addClass('animate').css('left', 0);
        },
        removeElement: function(node) {
            $(node).fadeOut(function() {
                $(this).remove();
            });
        }
    };

    var startOfDay = new Date().setHours(0,0,0,0);

    Session.setDefault('minAge', 0);
    Session.setDefault('maxAge', 500);
    Session.setDefault('minPrice', 0);
    Session.setDefault('maxPrice', 100000);
    Session.set('submitted', startOfDay);
});

Template.giftsList.helpers({
    filteredGifts: function() {
        var ageQuery = {},
            priceQuery = {},
            submittedQuery = {},
            minAge = Session.get('minAge'),
            maxAge = Session.get('maxAge'),
            minPrice = Session.get('minPrice'),
            maxPrice = Session.get('maxPrice'),
            submitted = Session.get('submitted');

        if ( (! isNaN(minAge) && ! isNaN(maxAge)) && (minAge >= 0 && maxAge >= 1) ) {
            ageQuery = { $and: [ { age: { $gte: minAge } }, { age: { $lte: maxAge } } ] };
        }
        if (! isNaN(minPrice) && ! isNaN(maxPrice)) {
            priceQuery = { $and: [ { price: { $gte: minPrice } }, { price: { $lte: maxPrice } } ] };
        }
        if (submitted) {
            submittedQuery = { submitted: { $gte: new Date(submitted) } };
        }

        if (ageQuery || priceQuery || submittedQuery) {
            return Gifts.find( { $and: [ ageQuery, priceQuery, submittedQuery ] } );
        }
    }
});

Template.giftsList.events({
    'change [data-hook="age"]': function(e) {
        e.preventDefault();
        var minAge = null,
            maxAge = null,
            hyphen = null;
        var ageValue = $(e.target).val().toLowerCase();

        switch (ageValue) {
            case 'any':
                minAge = null;
                maxAge = null;
                break;
            case 'newborn':
                minAge = 0;
                maxAge = 1;
                break;
            case '50+':
                minAge = 51;
                maxAge = 100;
                break;
            default:
                hyphen = ageValue.indexOf('-');
                minAge = parseInt(ageValue.substr(0, hyphen));
                maxAge = parseInt(ageValue.substr(hyphen + 1));
                break;
        }

        Session.set('minAge', minAge);
        Session.set('maxAge', maxAge);
    },
    'change [data-hook="min-price"]': function(e) {
        e.preventDefault();
        var minPrice = parseFloat($(e.target).val());

        Session.set('minPrice', minPrice);
    },
    'change [data-hook="max-price"]': function(e) {
        e.preventDefault();
        var maxPrice = parseFloat($(e.target).val());

        Session.set('maxPrice', maxPrice);
    },
    'change [data-hook=submitted]': function(e) {
        e.preventDefault();
        var submitted = null,
            submittedValue = $(e.target).val().toLowerCase();

        switch (submittedValue) {
            case 'today':
                // beginning of day
                submitted = moment().subtract(1, 'days').toDate();
                break;
            case 'this week':
                submitted = moment().subtract(1, 'weeks').toDate();
                break;
            case 'this month':
                submitted = moment().subtract(1, 'months').toDate();
                break;
            case 'this year':
                submitted = moment().subtract(1, 'years').toDate();
                break;
        }

        Session.set('submitted', submitted);
    }
});