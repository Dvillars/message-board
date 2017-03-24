import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    saveQuestion() {
      var params = {
        author: this.controller.get('author'),
        title: this.controller.get('title'),
        question: this.controller.get('question')
      };
      this.controller.set('author', "");
      this.controller.set('title', "");
      this.controller.set('question', "");
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
