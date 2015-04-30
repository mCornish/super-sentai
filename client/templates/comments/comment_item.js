Template.commentItem.helpers({
    submittedMoment: function() {
        return moment(this.submitted).fromNow();
    }
});