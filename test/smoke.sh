#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
./bin/test
./bin/test
