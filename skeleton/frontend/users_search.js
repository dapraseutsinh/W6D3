


function UsersSearch (el, args) {
  this.$el = $(el);
  this.$input = this.$el.find('input[name=username]');
  this.$ul = this.$el.find('.users');
}

handleInput(event) {
   if (this.$input.val() === '') {
     this.renderResults([]);
     return;
   }
   APIUtil.searchUsers(this.$input.val())
     .then(users => this.renderResults(users));
 }

 function renderResults(users) {
   // // empty ul.users
   // this.$ul.empty();
   // // build li w JQ w a tag to user
   // for (let i = 0; i < users.length; i++) {
   //   const user = users[i];
   //   let $a = $('<a></a>');
   //   $a.text(`@{user.username}`);
   //   $a.attr('href', `/users/${user.id}`);
   //
   //   const$followToggle = $('<button></button');
   //   new FollowToggle($followToggle, {
   //     userId: user.id,
   //     followState: user.followed ? 'followed' : 'unfollowed'
   //   });
   // // append to ul
   //  const $li = $('<li></li>');
   //  $li.append($a);
   //  $li(.append($followToggle));
   //  this.$ul.append($li);

   this.$ul.empty();

for (let i = 0; i < users.length; i++) {
  const user = users[i];

  let $a = $('<a></a>');
  $a.text(`@${user.username}`);
  $a.attr('href', `/users/${user.id}`);

  const $followToggle = $('<button></button>');
  new FollowToggle($followToggle, {
    userId: user.id,
    followState: user.followed ? 'followed' : 'unfollowed'
  });

  const $li = $('<li></li>');
  $li.append($a);
  $li.append($followToggle);

  this.$ul.append($li);
 }
