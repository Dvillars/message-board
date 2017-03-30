import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  saveAnswer() {
      var params = {
        answer: this.get('answer'),
        title: this.get('title'),
        author: this.get('author'),
        question: this.get('question')
      };
      console.log(params.question);
      this.sendAction('saveAnswer', params);
    }
  }
});
