


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

 function renderResults() {
   // empty ul.users
   // build li w JQ w a tag to user
   // append to ul
 }
