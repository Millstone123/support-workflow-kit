#!/bin/sh
# Run the complete documented workflow.
set -eu
cd "$(dirname "$0")/.."
make test
make setup
make status
