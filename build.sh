#!/bin/sh
cd ../ || exit 1  # 상위 디렉토리로 이동, 실패 시 종료
mkdir -p output    # output 디렉토리 생성, 이미 존재하면 무시
find ./Garlic-Toast/ -type f ! -name 'vite.config.ts' -exec cp {} ./output/ \;  # 파일 복사
cp -R ./output/* ./Garlic-Toast/  # output의 내용만 복사
