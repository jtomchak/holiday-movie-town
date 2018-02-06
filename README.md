# holiday-movie-town

1. Go to github and create a new repo. **DO NOT** click any additional details!
2. Follow the directions provided on github to create the project locally, add remote and push your first commit.
3. **IF YOU DO NOT GET THE INSTRUCTIONS** you clicked extra stuff!!! _it gets the hose again_
4. We want to set up a new project here so we'll run `npm init -y` inside the project
5. Create a blank HTML5 scaffald index.html in folder 'src' and app.js in folder 'src'
6. Add a single script tag to your index.html
   `<script src="./app.js"></script>`
7. We are gonna need some packages to install!!!
8. `npm install jquery bootstrap babel-core babel-loader babel-preset-es2015 sass-loader node-sass webpack css-loader style-loader file-loader webpack-dev-server -D`
9. Download and Copy the webpack.config.js from slack or the repo into the root of our application. Pretty please.
10. And your scripts in your package.json needs to have the following:

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack-dev-server --open"
  },
```

11. Add a `.gitignore` to the root of your project and add the following lines to that file. pretty please, cherries and things.

```js
/node_modules
/dist
```

12. in the terminal cmd -> `npm install bootstrap-sass sass-loader`

13. add a style.scss to your src folder with the following

```
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/bootstrap";

$holiday-background-color: #f07c05;
$text-color: #faf7f7;

body {
  background: $holiday-background-color;
  color: $text-color;
}
```

14. Update our app.js file to import jQuery and our style.scss file. Sweet, and update our onload method to onReady

```js
$(document).ready(function() {
  //same as window onload
  console.log("Holiday Town Movies!!!");
});
```

15. Let's add 3 boxes to our indexpage using bootstrap layout
    Be sure to put them in a row, that lives in a container. Pretty please.

```HTML
<div class="col-md-4 col-sm-6">
        <div class="box-bg">
          <h3>Column 2</h3>
          <p>Lorem ipsum dolor..</p>
          <p>Ut enim ad..</p>
        </div>
      </div>
```

16. Create a fetch request, wrapped in function. and handle the resolve or reject from the fetch call. Console.log out the payload in json so we know that it's working, or failing. :-(
    `const movieURL = "https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=christmas&include_adult=false&sort_by=created_at.asc&page=1"`

17. Now we want to loop over the results of each movie and create a div element, append an image element to it with the poster url, and finally append that create element to the class div 'movies' that is also our bootstrap row.

18. Sweet!!! Images!!! but why are then off set ? :-( Here we want to leverage column resets [Bootstrap Docs](https://getbootstrap.com/docs/3.3/css/) by applying a column reset at responsive breakpoints, we get them to align correctly. Double Sweet.

19. Ok. I think we've had it for the day.

20. Add filter to our moviesList before mapping to remove any movie object that does not have a movie poster. grrrrr.

21. Now we've got our movies up, and showing thumbnail and title as a class caption. Rad. Looks good in md-col, but what about xsm, sm, and lg. So let's fix that!

22. Adding in release data and description, and a call to action button for details

23. We added col for xs, sm, and lg. This includes clearfix for 2 col layout aka sm/xs.

24. **Part B** We want to change out the herf tag for an actual button tag so we can have an onclick event to call getMovieDetails

```js
.append(
                $("<button>")
                  .attr("class", "btn btn-info btn-md")
                  .attr("type", "button")
                  .text("Details")
                  .click(function() {
                    console.log(movie.title);
                    getMoviesDetails(movie.id); //<-------TO BE MADE
                  })
              )
```

23. **Part C?** Rad. Now we need to have a function to fetch the extended details of our movie that the user clicked on. It's going to be a lot like our getMoives function

```js
const getMoviesDetails = movieId => {
  const movieDetailsURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=2434d246ec60c162a86db597467ef4ed`;
  fetch(movieDetailsURL)
    .then(res => res.json())
    .then(payload => {
      console.log(payload);
      //Present Modal!!!!
      presentMovieDetailsModal(payload); //<-----Need to make this guy next!
    })
    .catch(err => console.log(err));
};
```

24. # Modals!! `npm install -D bootstrap-loader html-webpack-plugin resolve-url-loader url-loader` Gonna need some things first!

25. Update our index with a modal class attr. See Index below

```html
 <!--Modal in Action  -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">

        <!-- Modal Content HERE -->
        <div class="modal-content">
          <!-- modal header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Movie Details!!!!</h4>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <p>Movies Details Here!!!!</p>
          </div>
          <!-- Modal FOOTER -->
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        <!-- End of Modal Content -->
      </div>
    </div>
```

25. Now that we have the HTML to present the modal we need the actual code to invoke it, with the specific movie info that was returned from getMovieDetails function.
    **Be sure to call `.modal()` on the modal element to get it to open properly**

```js
//Present Modal for Movie!!!
const presentMovieDetailsModal = movie => {
  $(".modal-title:first").text(movie.title);
  $(".movieDetails-overview:first").text(movie.overview);
  $(".movieDetails-img:first").attr(
    "src",
    "https://image.tmdb.org/t/p/w500/" + movie.poster_path
  );
  $(".movieDetails-tagline:first").text(movie.tagline);
  $("#movieDetails-modal").modal();
};
```

26. Now that you have a modal working. Rad. Good job. We want to fetch the data for each poster individually. Below is the APIURL you'll need to get the details of a specific movie

```js
//Note the Movie Id needs to be concated before you can fetch!!!!
https://api.themoviedb.org/3/movie/<MOVIE-ID>?api_key=2434d246ec60c162a86db597467ef4ed
```

27. You can attach a click event directly on an element as it is created. Sadly you can't attach an event listener on an element before it's appended to the DOM.

```js
.click(function() {
  console.log(movie.id);
  //
})
```
