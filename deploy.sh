#!/bin/sh
set -e

npm run build -- --mode production
git checkout github.io
cp dist/*.* .
git add -A
git commit -am 'deployment'
git push origin github.io
git checkout -