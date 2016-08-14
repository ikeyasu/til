'use strict'

import ApiBuilder from 'claudia-api-builder';
const api = new ApiBuilder();
module.exports = api;

api.get('/hello', function () {
  return 'hello world';
});
