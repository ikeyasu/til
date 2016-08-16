'use strict'

import ApiBuilder from 'claudia-api-builder';
const api = new ApiBuilder();
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME_SEQ = 'claudia-test-sequences'

module.exports = api;

api.get('/hello', function () {
  return 'hello world';
});


api.post('/seq/{name}', function (request) {
  'use strict';
  let params = {
    TableName: TABLE_NAME_SEQ,
    Item: {
      name: request.body.name,
      current_number: 0
    }
  };
  // return dynamo result directly
  return dynamoDb.put(params).promise();
}, { success: 201 }); // Return HTTP status 201 - Created when successful

api.get('/seq/{name}', function (request) {
  'use strict';
  let name, params;
  name = request.pathParams.name;
  params = {
    TableName: TABLE_NAME_SEQ,
    Key: {
      name: name
    }
  };

  // post-process dynamo result before returning
  return dynamoDb.get(params).promise().then(function (response) {
    return response.Item;
  });
});
