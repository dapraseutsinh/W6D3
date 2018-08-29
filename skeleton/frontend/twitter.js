const followToggle = requires('./follow_toggle');

$( document ).ready(function () {
  $('button.follow-toggle').each( (idx, el) => new FollowToggle(el, {}) );
});
