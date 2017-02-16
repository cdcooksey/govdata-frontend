import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consumer-complaint', 'Unit | Model | consumer complaint', {
  // Specify the other units that are required for this test.
  needs: ['model:consumer-complaint-company', 'model:consumer-complaint-product', 'model:consumer-complaint-subproduct', 'model:consumer-complaint-issue', 'model:consumer-complaint-subissue']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
