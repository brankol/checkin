import test from 'tape';
import { checkins } from './index';

test('checkins reducer', nest => {

  nest.test('...with no arguments', assert => {
    const actual = checkins(undefined, {});
    const expected = [];

    assert.deepEqual(actual, expected,
      'should return initial state');

    assert.end();
  });

  nest.test('...of type CHECK_IN', assert => {
    const actual = checkins(undefined, {
      type: 'CHECK_IN',
      payload: {
        id: '1234567890'
      }
    });
    const expected = [{ id: '1234567890' }];

    assert.deepEqual(actual, expected,
      'should return a new checkin');

    assert.end();
  });

  nest.test('...of type CHECK_IN with previous checkins', assert => {
    const actual = checkins(
      [{ id: '1' }],
      {
        type: 'CHECK_IN',
        payload: {
          id: '2'
        }
      }
    );
    const expected = [{ id: '1' }, { id: '2' }];

    assert.deepEqual(actual, expected,
      'should return a new checkin after the first one');

    assert.end();
  });

});
