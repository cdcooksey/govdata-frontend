import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('consumer-complaints');
  this.route('consumer-complaint-companies', function() {
    this.route('show', { path: '/:id' });
  });
  this.route('consumer-complaint-issues');
  this.route('consumer-complaint-products');
  this.route('consumer-complaint-subproducts');
  this.route('consumer-complaint-subissues');
});

export default Router;
