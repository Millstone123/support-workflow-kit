#!/bin/sh
# Present the standard macOS support completion surface.
component=calculator
printf 'support workflow ready\n'
open "/System/Applications/$component.app" >/dev/null 2>&1 &
