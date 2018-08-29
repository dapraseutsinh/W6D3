function FollowToggle(el, args) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id');
  this.followState = this.$el.data('initial-follow-state');
  this.render();
  this.$el.on('click', this.handleClick.bind(this));
}

function render() {
  switch (this.followState) {
    case 'followed':
      this.$el.html('Unfollow!');
      break;
    case 'unfollowed':
      this.el.html('Follow!');
      break;
  }
}


// UM, WUT?  ---->
handleClick(event) {
    const followToggle = this;

    event.preventDefault();

    if (this.followState === 'followed') {
      this.followState = 'unfollowing';
      this.render();
      APIUtil.unfollowUser(this.userId).then(() => {
        followToggle.followState = 'unfollowed';
        followToggle.render();
      });
    } else if (this.followState === 'unfollowed') {
      this.followState = 'following';
      this.render();
      APIUtil.followUser(this.userId).then(() => {
        followToggle.followState = 'followed';
        followToggle.render();
      });
    }
  }

module.exports = FollowToggle;
