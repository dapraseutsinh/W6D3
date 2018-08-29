const followToggle = requires('./follow_toggle');
const UsersSearch = requires('./users_search');

$( document ).ready(function () {
  $('button.follow-toggle').each( (idx, el) => new FollowToggle(el, {}) );
});


$( document ).ready(function () {
  $('nav.users-search').each( (idx, el) => new UsersSearch(el, {}) );
});
