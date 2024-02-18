const url = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGFhYWIzNjBlODcxMGU4ZjU5OTU3NmRlOTE0ZmNkMCIsInN1YiI6IjVmMzBjNGRiZjFiNTcxMDAzM2VlNjU5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UrID1qxJMt914X_UKdrLZkE-8SNKHci_aFMS3gJSt7A",
  },
};

export const getFavoriteMovies = async () => {
  try {
    const response = await fetch(
      `${url}/movie/popular?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch favorite movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching favorite movies: " + error.message);
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      `${url}/movie/now_playing?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch favorite movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching favorite movies: " + error.message);
  }
};

export const getGenresMovie = async () => {
  try {
    const response = await fetch(
      `${url}/genre/movie/list?language=en`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch favorite movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching favorite movies: " + error.message);
  }
};

export const getTrendingMovies = async (trending) => {
  try {
    const response = await fetch(
      `${url}/trending/movie/${trending}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch favorite movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching favorite movies: " + error.message);
  }
};

export const getComingSoonMovie = async () => {
  try {
    const response = await fetch(
      `${url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2024-03-01&region=usa&sort_by=popularity.desc&with_watch_monetization_types=flaterate}`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch favorite movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching favorite movies: " + error.message);
  }
};

export const getPopularMovie = async (type) => {
  try {
    const rand = Math.floor(Math.random() * 10) + 1;
    console.log("tipenya", type);
    const response = await fetch(
      `${url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${rand}&region=usa&sort_by=popularity.desc&with_watch_monetization_types=${type}`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch favorite movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch favorite movies");
  }
};

export const getMovieVideo = async (id) => {
  try {
    const response = await fetch(
      `${url}/movie/${id}/videos?language=en-US'`,
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch favorite movies");
    }
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    throw new Error("Failed to fetch favorite movies: ", error);
  }
};
