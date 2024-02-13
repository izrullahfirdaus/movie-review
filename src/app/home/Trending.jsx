import MoviePoster from "@/components/MoviePoster"
import { getTrendingMovies } from "@/lib/loadFromAPI"
import { Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"

const Trending = ({genres}) => {
    const [movies, setMovies] = useState(null)
    const [trendingType, setTrendingType] = useState("day")
    const hanldeTrending = (value) => {
        setTrendingType(value)
    }
    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await getTrendingMovies(trendingType)
                setMovies(data.results)
            } catch (error) {
                console.error("Error loading favorite movies:", error);
            }
        }

        fetchData()        
    }, [trendingType])
    return  (
        <div className="p-4 mt-2 flex flex-col">
            <Typography variant="h4">Trending</Typography>
            <div className="flex flex-row space-x-4">
                <button onClick={() => hanldeTrending("day")}>Day</button>
                <button onClick={() => hanldeTrending("week")}>Week</button>
            </div>
            <div className="mt-2 flex flex-row space-x-4 overflow-x-auto">
                {movies?.map((movie, index) => {
                    return (
                        <MoviePoster movieData={movie} index={index} key={index} />
                    )
                })}

            </div>
        </div>
    )
}

export default Trending