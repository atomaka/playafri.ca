#!/bin/bash

rm -rf build/
mkdir -p build/assets

cp index.html build/
cp -r assets/* build/assets

AWS_DEFAULT_REGION=us-east-2 aws s3 cp --recursive ./build s3://playafri.ca/
