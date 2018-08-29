function FollowToggle(el, args) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id');
  this.followState = this.$el.data('initial-follow-state');
}

module.exports = FollowToggle;
