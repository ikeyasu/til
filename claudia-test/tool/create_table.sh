#!/bin/bash

cd `dirname $0`
set -e

aws dynamodb create-table --cli-input-json file://claudia-test-sequences.json
aws dynamodb create-table --cli-input-json file://claudia-test-data.json
