import assert from 'power-assert';
import api from '../src/index.js';

describe('My test', () => {
  it('It should return something', (done) => {
    api.router({
      context: {
        path: '/hello',
        method: 'GET'
      },
      queryString: {},
      env: {}
    }, {
      done: (err, result) => {
        assert(err === null);
        assert(result.toString() === 'hello world');
        done();
      }
    });
  });
});
