import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('consumer-complaints', function() {
    this.route('consumer-complaint-company',    { path: 'consumer-complaint-company/:id' });
    this.route('consumer-complaint-product',    { path: 'consumer-complaint-product/:id' });
    this.route('consumer-complaint-subproduct', { path: 'consumer-complaint-subproduct/:id' });
    this.route('consumer-complaint-issue',      { path: 'consumer-complaint-issue/:id' });
    this.route('consumer-complaint-subissue',   { path: 'consumer-complaint-subissue/:id' });
  });
});

export default Router;
