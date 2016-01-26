import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{id: 1, title: "A Concise History of Programming", author: "H.G. Wells", description: "What if 'The Time Machine' was based on a true story?"},
      {id: 2, title: "A Brief History of the Time War", author: "The Master", description: "Get *my* side of the story."},
      {id: 3, title: "A Wrinkle in Time", author: "Madeline L'Engle", description: "Some kids end up in a parallel universe I think? It's been a while but also some religious undertones maybe?"}];
    }
});
