#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

yarn build

# build 生成的文件夹
cd docs/.vuepress/dist

git init
git config user.name 'suanmei'
git config user.email 'code_lee@sina.com'
git add -A
git commit -m 'deploy'

# 发布到 full-stack 仓库 gh-pages 分支
git push -f git@github.com:suanmei/full-stack.git master:gh-pages

cd -
