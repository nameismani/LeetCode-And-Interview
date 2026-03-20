const data = [
  {
    name: "Vikram Vedha",
    movie: {
      name: "Natpe Thunai",
      movie: {
        name: "PT Sir",
        movie: {
          name: "Meesaya Muruku",
          movie: {
            name: "Appspamtestmovie 3",
          },
        },
      },
    },
  },
];

// Function to flatten and search for movie names
const searchMovies = (data, searchQuery) => {
  const matchingMovies = [];

  // Loop through each item in the data array
  data.forEach((val) => {
    // If the movie name matches the search query, add it to the matchingMovies array
    if (val.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      matchingMovies.push(val.name);
    }

    // If the "movie" property is an object (nested structure), recurse into it
    if (val.movie && typeof val.movie === "object") {
      matchingMovies.push(...searchMovies([val.movie], searchQuery)); // Recursively call with the nested movie array
    }
  });

  return matchingMovies;
};

// Example usage: Search for movies containing 'thunai'
const searchQuery = "sir";
const result = searchMovies(data, searchQuery);

console.log(result); // Output will include movies containing 'thunai'
