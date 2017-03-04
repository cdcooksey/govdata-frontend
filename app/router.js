import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('consumer-complaints', function() {
    this.route('consumer-complaint-company', { path: 'consumer-complaint-company/:id' });
  });
});

export default Router;
