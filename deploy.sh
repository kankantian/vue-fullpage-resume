#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.qjwwuye.xyz' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:kankantian.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/kankantian/vue-fullpage-resume.git master:gh-pages
git subtree push --prefix dist origin gh-pages

cd -