import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').findRecord('consumer-complaint-company', 'a74f29cc-9d15-4217-930e-ba034e61056f')
    }
});
