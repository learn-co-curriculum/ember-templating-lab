import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    viewMore: function() {
      this.toggleProperty('viewMore');
    }
  }
});
