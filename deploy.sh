#!/usr/bin/env sh

# build
npm run build

eval "$(ssh-agent -s)"
ssh-add .ssh/id_rsa

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git remote set-url origin git@github.com:Felix1G/fks-website.git
git push -u -f origin main:gh-pages

cd -