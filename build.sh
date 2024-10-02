#!/bin/sh
cd ../
mkdir output


# rsync를 사용하여 /vite.config.ts를 제외하고 파일 복사
rsync -av --exclude='vite.config.ts' ./Garlic-Toast/ ./output/

# output 디렉토리를 Garlic-Toast로 복사
rsync -av ./output/ ./Garlic-Toast/