Template.giftsList.helpers({
    gifts: function() {
        return Gifts.find({}, {sort: {submitted: -1}});
    }
});