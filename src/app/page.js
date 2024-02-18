"use client";
import Navbar from "@/components/Navbar";
import { getGenresMovie, getNowPlayingMovies } from "@/lib/loadFromAPI";
import { useEffect, useState } from "react";
import NowPlaying from "./home/NowPlaying";
import Trending from "./home/Trending";
import Trailers from "./home/Trailers";
import PopularMovies from "./home/PopularMovies";
import ComingSoon from "./home/ComingSoon";

export default function Home() {
  // const [favoriteMovies, setFavoriteMovies] = useState(null);
  const [movieGenres, setMovieGenres] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const movies = await getNowPlayingMovies;
        const movGen = await getGenresMovie();
        // setFavoriteMovies(movies.results.slice(0, 5));
        setMovieGenres(movGen.genres);
      } catch (error) {
        console.error("Error loading favorite movies:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <NowPlaying movieGenres={movieGenres} />
      <Trending genres={movieGenres} />
      <Trailers />
      <PopularMovies />
      <ComingSoon />
      <main>
        Hello to MovieReview
        <div>
          {/* {favoriteMovies?.map((movie, index) => (
            <div key={index}>
              <p>{movie.title}</p>
            </div>
          ))} */}
        </div>
      </main>
    </>
  );
}
