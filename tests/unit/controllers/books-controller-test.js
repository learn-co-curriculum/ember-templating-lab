/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'controller:books',
  'BooksController',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    it('exists', function() {
      let controller = this.subject();
      expect(controller).to.be.ok;
    });

    it('has an action, viewMore, that sets the viewMore property to when triggered', function() {
      let controller = this.subject();    
      controller.send('viewMore');
      expect(controller.get('viewMore')).to.be.true;
    });
  });
