#!/bin/bash
if [ ! -e /solution/out ]; then
    mkdir -p solution && touch solution/out
    docker ps > solution/out
else
    docker ps > solution/out
fi