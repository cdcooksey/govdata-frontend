import { moduleForModel, test } from 'ember-qunit';

moduleForModel('consumer-complaint-subproduct', 'Unit | Model | consumer complaint subproduct', {
  // Specify the other units that are required for this test.
  needs: ['model:consumer-complaint']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
