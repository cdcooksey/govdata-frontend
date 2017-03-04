import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        // debugger;
        console.log(params);
        // alert(params);
        return this.get('store').query('consumer-complaint', params);
    }
});
