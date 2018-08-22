Refer following for deployment to Heroku
https://codeburst.io/quick-n-clean-way-to-deploy-vue-webpack-apps-on-heroku-b522d3904bc8

This project now has two git remote 
heroku
origin

The heroku remote is only for deployment purpose whereas origin holds all source code

How to deploy 
step 1 : npm run build:prod
step 2 : git subtree push --prefix dist heroku master

What is changed
1. Added new package.json to dist folder to install express
2. Added server.js file in the dist folder
3. Modified start script in the root package.json to for start
