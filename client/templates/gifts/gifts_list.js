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

    // Make sure select has correct value based on query string
    var minAge = Router.current().params.query.minAge;
    var maxAge = Router.current().params.query.maxAge;
    var ageString = '';
    if (minAge && maxAge) {
        if (minAge == 0) {
            ageString = 'Newborn';
        } else if (minAge == 51) {
            ageString = '50+';
        } else {
            ageString = minAge + ' - ' + maxAge;
        }
        $('[data-hook="age"]').val(ageString);
    }
});

Template.giftsList.helpers({

});

Template.giftsList.events({
    'change [data-hook="age"]': function(e) {
        e.preventDefault();
        var minAge, maxAge, hyphen;
        var ageValue = $(e.target).val();

        if (ageValue === 'Newborn') {
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

        //if ( isNaN(minAge) || isNaN(maxAge) ) {
        //    Router.go('/find');
        //} else {
        //    Router.go('/find?minAge=' + minAge + '&' + 'maxAge=' + maxAge);
        //}

        Session.set('filter', {'minAge': minAge, 'maxAge': maxAge});

        filterGifts();
    }
});

filterGifts = function() {
    filter = Session.get('filter');
    if (filter) {
        var queryString = '';
        if ( !( isNaN(filter.minAge) || isNaN(filter.maxAge)) )
            queryString += '&minAge=' + filter.minAge + '&maxAge=' + filter.maxAge;
    }

    if (queryString != '') {
        Router.go('/find?' + queryString);
    } else {
        Router.go('/find');
    }
};