#!/bin/sh
cd ../
mkdir output
cp -R ./Garlic-Toast/* ./output
rm -f output/vite.config.ts
cp -R ./output ./Garlic-Toast/