import { getNowPlayingMovies } from "@/lib/loadFromAPI";
import { Carousel, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react"
import { convertToPercent, generateDate, generateGenres } from "../fun/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const NowPlaying = ({movieGenres}) => {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
              const movies = await getNowPlayingMovies();
              setMovies(movies.results.slice(0, 5));
            } catch (error) {
              console.error("Error loading favorite movies:", error);
            }
          };
          fetchData();
    }, [])

    return (
        <Carousel style={{height: '550px'}}>
            {movies?.map((movie, index) => {
                const year = new Date(movie.release_date).getFullYear
                const formattedDate = generateDate(movie.release_date)
                const getGenres = generateGenres(movie.genre_ids, movieGenres)
                const vote = convertToPercent(movie.vote_average)
                return (
                    <div key={index} className="relative w-full h-full">
                    <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={index} className="relative h-full w-full object-cover" />
                    <div className="absolute inset-0 flex flex-row h-full w-full bg-gray-600/75">
                        <div className="h-full flex items-center px-16 space-x-3 ">
                            <div className="poster relative">
                                <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={index} className="h-full w-full rounded-md relative" />
                                <div className="absolute circle-position">
                                    <div className="rounded-full bg-white drop-shadow-lg circle-review flex justify-center items-center">
                                        {vote}%
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Typography variant="h2" color="white">{movie.title}</Typography>
                                <div className="flex flex-row space-x-4">
                                    <span><Typography variant="h5" color="white">{formattedDate}</Typography></span>
                                </div>
                                <div className="pt-2 w-1/2">
                                    <span><Typography variant="paragraph" color="white">{movie.overview}</Typography></span>
                                </div>
                                <div className="pt-2">
                                    <span><Typography variant="lead" color="white">{getGenres}</Typography></span>
                                </div>
                                <div className="pt-2 w-1/2 text-center flex flex-row space-x-2">
                                    <button className="w-3/4 bg-white/35 rounded-md py-4"><Typography variant="h6" color="white">Tulis Review</Typography></button>
                                    <button className="bg-white/35 rounded-md p-4"><Typography variant="h6" color="white">+</Typography></button>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                )
            })}
        </Carousel>
    )
}

export default NowPlaying