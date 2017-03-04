import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('consumer-complaints');
  // this.route('consumer-complaints-companies', { path: 'consumer-complaints/:consumer_complaint_company_id' } )
});

export default Router;
