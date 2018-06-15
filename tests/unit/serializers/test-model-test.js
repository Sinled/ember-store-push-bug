import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | test model', function(hooks) {
  setupTest(hooks);


  test('it serializes created record', function(assert) {
    const store = this.owner.lookup('service:store');
    let record;
    run(() => {
      record = store.createRecord('test-model');
    });

    assert.deepEqual(record.serialize(), { someNumberField: 1 });
  });

  test('it serializes pushed record', function(assert) {
    const store = this.owner.lookup('service:store');
    run(() => {
      store.push({ data: { id: '1', type: 'test-model' } });
    });
    const record = store.peekRecord('test-model', 1);

    assert.deepEqual(record.serialize(), { someNumberField: 1 });
  });
});
