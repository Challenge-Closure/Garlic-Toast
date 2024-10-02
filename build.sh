#!/bin/sh
cd ../garlic-demo || exit 1  # garlic-demo 디렉토리로 이동
mkdir -p output                # output 디렉토리 생성
find ../Garlic-Toast -type f ! -name 'vite.config.ts' -exec cp {} ./output/ \;  # Garlic-Toast에서 파일 복사
