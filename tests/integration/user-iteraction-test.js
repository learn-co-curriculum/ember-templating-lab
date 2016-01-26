import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';

describe('Integration: User Interaction', function() {
  var application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('shows the book details when the user clicks on the view book details button', function(){
    visit('/books');
    click('button');
    
    andThen(function() {
      expect(find('li').text()).to.include('author: H.G. Wells');
      expect(find('li').text()).to.include('author: The Master');
      expect(find('li').text()).to.include('author: Madeline L\'Engle');
      expect(find('li').text()).to.include("description: What if 'The Time Machine' was based on a true story?");
      expect(find('li').text()).to.include('description: Get *my* side of the story.');
      expect(find('li').text()).to.include('description: Some kids end up in a parallel universe I think? It\'s been a while but also some religious undertones maybe?');
    });
  });

  it('does not show the book details if a user has not clicked on the view book details button', function(){
    visit('/books');
  
    
    andThen(function() {
      expect(find('li').text()).to.not.include('author: H.G. Wells');
      expect(find('li').text()).to.not.include('author: The Master');
      expect(find('li').text()).to.not.include('author: Madeline L\'Engle');
      expect(find('li').text()).to.not.include('description: What if "The Time Machine" was based on a true story?');
      expect(find('li').text()).to.not.include('description: Get *my* side of the story.');
      expect(find('li').text()).to.not.include('description: Some kids end up in a parallel universe I think? It\'s been a while but also some religious undertones maybe?');
    });
  });

});