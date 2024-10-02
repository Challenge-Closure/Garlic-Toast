#!/bin/sh
cd ../
mkdir -p output

# vite.config.ts를 제외하고 파일 복사
find ./Garlic-Toast -type f ! -name 'vite.config.ts' -exec cp --parents {} ./output/ \;

# output 디렉토리를 Garlic-Toast로 복사
cp -R ./output/* ./Garlic-Toast/
