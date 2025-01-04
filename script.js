// Get references to HTML elements
const movieList = document.getElementById('movie-list');
const searchInput = document.getElementById('search');
const movieDetailsContainer = document.getElementById('main');

// Attach an input event listener for the search input
searchInput.addEventListener('input', handleSearchInput);
// searchInput.addEventListener('input', handleSearchInput1);

// Initialize movie data and display all movies
let movieData = movies; // Assuming you have a `movies` array
displayMovies(movies);

// Handle search input and filter movies
function handleSearchInput() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movieData.filter(movie => {
        // Create a string containing movie details for searching
        const movieDataString = `${movie.title} ${movie.genre} ${movie.director} ${movie.cast.join(' ')}`.toLowerCase();
        return movieDataString.includes(searchTerm);
    });
    displayMovies(filteredMovies);
}

// Display movies in the movie list
function displayMovies(movies) {
    const movieCardsHTML = movies.map(createMovieCardHTML).join('');
    movieList.innerHTML = movieCardsHTML;
}

// Create HTML for a movie card
function createMovieCardHTML(movie) {
    return `
        <div class="movie-card" onclick="handleMovieClick(this);"> <!-- Add onclick event -->
            <h2>${movie.title}</h2>
            <img src="${movie.image}" alt="${movie.title} Poster" style="width:100%;">
            <p>Genre: ${movie.genre}</p>
            <p>Director: ${movie.director}</p>
            <p>Release Year: ${movie.releaseYear}</p>
        </div>
    `;
}

// Handle clicking on a movie card
function handleMovieClick(element) {
    console.log(element)
    const clickedMovieCard = element;
    if (clickedMovieCard) {
        const clickedMovieTitle = clickedMovieCard.querySelector('h2').textContent;
        const selectedMovie = movieData.find(movie => movie.title === clickedMovieTitle);

        if (selectedMovie) {
            displayMovieDetails(selectedMovie);
        }
    }
}

// Display movie details
function displayMovieDetails(movie) {
    const movieDetailsHTML = `
        <button onclick="window.location.reload();">Back</button>
        <h2>${movie.title}</h2>
        <img src="${movie.image}">
        <p>Genre: ${movie.genre}</p>
        <p>Director: ${movie.director}</p>
        <p>Release Year: ${movie.releaseYear}</p>
        <p>Plot: ${movie.plot}</p>
        <p>Cast: ${movie.cast.join(', ')}</p>
    `;
    movieDetailsContainer.innerHTML = movieDetailsHTML;
}


// Handle search input and filter movies - Another way
function findMovies(movie){
    const searchTerm = searchInput.value.toLowerCase();
    const movieDataString = `${movie.title} ${movie.genre} ${movie.director} ${movie.cast.join(' ')}`.toLowerCase();
    return movieDataString.includes(searchTerm)
}

function handleSearchInput1() {
    // const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movieData.filter(findMovies);
    displayMovies(filteredMovies);
    // console.log("handleSearchInput1")
}