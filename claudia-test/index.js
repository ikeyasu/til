'use strict'

let ApiBuilder = require('claudia-api-builder');
let api = new ApiBuilder();

module.exports = api;

api.get('/hello', function () {
  return 'hello world 2';
});
