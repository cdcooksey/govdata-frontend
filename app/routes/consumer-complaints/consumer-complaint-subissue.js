import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').query('consumer-complaint', { consumer_complaint_subissue_id params.id } );
    },

    setupController(controller, model) {
        // This is how to overwrite using model() in the view
        Ember.set(controller, 'consumer-complaints', model);
    }
});
