#!/bin/bash

_dockerDir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

exec docker compose -p abstraction-landing-page-fe \
    -f "$_dockerDir/compose.yaml" \
    -f "$_dockerDir/compose.dev.yaml" \
    "$@"
