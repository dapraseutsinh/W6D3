const UsersSearch = requires('./users_search');

$( document ).ready(function () {
  $('nav.users-search').each( (idx, el) => new UsersSearch(el, {}) );
});


function UsersSearch (el, args) {
  this.$el = $(el);
  this.$input = this.$el.find('input[name=username]');
  this.$ul = this.$el.find('.users');
}
