class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$el.on('submit', this.submit.bind(this));


  }

  function submit(event) {
    event.preventDefault();
    const data = this.$el.serializeJSON();
    APIUtil.createTweet(data).then(tweet => this.handleSuccess(tweet));
  }

  function clearInput() {

  }

  function handleSuccess() {
    // call clear input
  }

}

module.exports = TweetCompose;
