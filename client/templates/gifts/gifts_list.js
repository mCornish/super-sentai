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

    Session.set('minAge', null);
    Session.set('maxAge', null);
    Session.set('minPrice', null);
    Session.set('maxPrice', null);
});

Template.giftsList.helpers({
    filteredGifts: function() {
        var ageQuery, priceQuery;
        var minAge = Session.get('minAge') || 0;
        var maxAge = Session.get('maxAge') || 500;
        var minPrice = Session.get('minPrice') || 0;
        var maxPrice = Session.get('maxPrice') || 100000;

        if (! isNaN(minAge) && ! isNaN(maxAge))
            ageQuery = { $and: [ { age: { $gte: minAge } }, { age: { $lte: maxAge } } ] };
        if (! isNaN(minPrice) && ! isNaN(maxPrice))
            priceQuery = { $and: [ { price: { $gte: minPrice } }, { price: { $lte: maxPrice } } ] };

        if (ageQuery || priceQuery)
            return Gifts.find( { $and: [ ageQuery, priceQuery ] } );
    }
});

Template.giftsList.events({
    'change [data-hook="submitted"]': function(e) {
        e.preventDefault();
        var submitted = $(e.target).val();

        filter.submitted = submitted;
        filterGifts();
    },
    'change [data-hook="age"]': function(e) {
        e.preventDefault();
        var minAge, maxAge, hyphen;
        var ageValue = $(e.target).val().toLowerCase();

        if (ageValue === 'any') {
            minAge = null;
            maxAge = null;
        }
        else if (ageValue === 'newborn') {
            minAge = 0;
            maxAge = 1;
        } else if (ageValue === '50+') {
            minAge = 51;
            maxAge = 100;
        } else {
            hyphen = ageValue.indexOf('-');
            minAge = parseInt(ageValue.substr(0, hyphen));
            maxAge = parseInt(ageValue.substr(hyphen + 1));
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
    }
});