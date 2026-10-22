import { module, test } from 'qunit';
import { setupTest } from 'seraphinealmeida/tests/helpers';

module('Unit | Route | my-projects', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:my-projects');
    assert.ok(route);
  });
});
