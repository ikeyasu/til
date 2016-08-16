#!/bin/bash

cd `dirname $0`
set -e

aws dynamodb delete-table --table-name claudia-test-sequences
aws dynamodb delete-table --table-name claudia-test-data
