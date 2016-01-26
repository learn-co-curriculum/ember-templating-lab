/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import Ember from 'ember';

describe('Acceptance: Routing', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('can visit the home page', function() {
    visit('/');

    andThen(function() {
      expect(find('h1').text()).to.eq("Flatiron Ember Book Store");
    });
  });

  it('can visit the home page and see the link to /books', function() {
    visit('/');

    andThen(function() {
      let link = $("div#books p a");
      expect(link.text()).to.eq('View all our amazing books!');
      expect(link.attr('href')).to.eq('/books');
    });
  });


  it('can visit the home page and click the link to /books', function() {
    visit('/');
    click("#books a");
    
    andThen(function() {
      expect(currentPath()).to.equal('books');
      expect(find('h3').text()).to.include("A Concise History of Programming");
      expect(find('h3').text()).to.include("A Brief History of the Time War");
      expect(find('h3').text()).to.include("A Wrinkle in Time");
    });
  });
});
