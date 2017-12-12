import "jquery";
import "./style.scss";

// window.onload = function() {
//   console.log("HELLO WORLD THIS IS BETTER MORE");
// };

$(document).ready(function() {
  //set up some variables to capture our movie datá
  let moviesList = [];
  let currentMoviesPage = 0;
  let totalMoviePages = 1;

  //Get Moives HTTP request
  const getMovies = () => {
    const movieURL =
      "https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=christmas&include_adult=false&sort_by=created_at.asc&page=1";

    fetch(movieURL)
      .then(res => res.json())
      .then(payload => {
        moviesList = payload.results;
        totalMoviePages = payload.total_pages;
        console.log(payload.results);
        //Now we have our data. HO HO HO.
        createPosters();
      })
      .catch(err => console.log(err));
  };

  const createPosters = () => {
    //get element from DOM to stick our movies in!
    const moviePosters = moviesList
      .map(function(movie) {
        var divCol = $("<div>").attr("class", "col-md-4");

        var divThumbnail = $("<div>")
          .attr("class", "thumbnail")
          .append(
            $("<img>")
              .attr(
                "src",
                "https://image.tmdb.org/t/p/w500/" + movie.poster_path
              )
              .attr("class", "poster_image")
          );
        divCol.append(divThumbnail);
        return divCol;
      })
      .map(appendElementWithVisibleSpacing);
  };

  const appendElementWithVisibleSpacing = (movieElement, index) => {
    //create md & lg clearfix for columns
    const divVisibleSpaceMDLG = $("<div>").attr(
      "class",
      "clearfix visible-md-block visible-lg-block"
    );
    //put div in moives class div
    $(".movies").append(movieElement);
    //ever 3rd add a clearfix to MD or LG
    if (index && (index + 1) % 3 === 0) {
      $(".movies").append(divVisibleSpaceMDLG);
    }
  };

  getMovies();
});
