import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  title: DS.attr(),
  answer: DS.hasMany('answer', {async: true})
});
