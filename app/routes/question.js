import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer() {
      var params = {
        author: this.controller.get('author'),
        title: this.controller.get('title'),
        answer: this.controller.get('answer')
      };
      this.controller.set('author', '');
      this.controller.set('title', '');
      this.controller.set('answer', '');
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    }
  }
});
