# holiday-movie-town

1. Go to github and create a new repo. **DO NOT** click any additional details!
2. Follow the directions provided on github to create the project locally, add remote and push your first commit.
3. **IF YOU DO NOT GET THE INSTRUCTIONS** you clicked extra stuff!!! _it gets the hose again_
4. We want to set up a new project here so we'll run `npm init -y` inside the project
5. Create a blank HTML5 scaffald index.html in folder 'src' and app.js in folder 'src'
6. Add a single script tag to your index.html
   `<script src="./app.js"></script>`
7. Shut up and listen: also change your js file to
   `<script src="./app.bundle.js"></script>`
8. `npm install jquery bootstrap babel-core babel-loader babel-preset-es2015 sass-loader node-sass webpack css-loader style-loader file-loader webpack-dev-server -D`
9. DownTOWN and Copy the webpack.config.js from slack or the repo into the root of our application. Pretty please.
10. rename your script to app.bundle.js, pretty please!
11. And your scripts in your package.json needs to have the following:

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack-dev-server --open"
  },
```

11. Add a `.gitignore` to the root of your project and add the following lines to that file. pretty please, cherries and things.

```
/node_modules
/dist
```
