#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
make test
make setup
make status
