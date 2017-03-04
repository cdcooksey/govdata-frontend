import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        console.log('consumer-complaint-company route model was called');
        console.log(params);
        // this.get('store').query('consumer-complaint', params);
        return this.get('store').query('consumer-complaint', { consumer_complaint_company_id: params.id } );
    },

    setupController(controller, model) {
        // This is how to overwrite using model() in the view
        Ember.set(controller, 'consumer-complaints', model);
    }
});
