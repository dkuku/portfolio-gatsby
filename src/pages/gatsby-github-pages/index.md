---
path: '/gatsby-on-github-pages'
date: '2018-03-30T21:37:00+00:00'
title: "Setup gatsby on github pages main site"
tags: ["gatsby", "react", "github", "github pages"]
excerpt: ""
---
Create new repo with the name `<username>/github.io` and add it as origin.

### Start in master branch.

Create a new branch and push it to github:
```
git checkout -b development
git push origin development
```
Fetch gh-pages branch from github
```
git fetch --all
git checkout gh-pages
```
Delete old master locally and remote and create it from gh-pages 
```
git branch -d master
git push --delete origin master
git checkout -b master
git push origin master
```
Now your website should be accessible from <username>.github.io

Change your default branch in github settings to development

Now all your development should me done in the development branch

### When you want to update it then 
```
npm run deploy
git merge gh-pages master
git fetch --all
git pull origin master
git add public
git commit -m ""
git push origin master
```
