import MovieTrailer from "@/components/MovieTrailer"
import { getTrendingMovies } from "@/lib/loadFromAPI"
import { Typography } from "@material-tailwind/react"

const { useState, useEffect } = require("react")

const Trailers = () => {
    const [selectedTrailers, setSelectedTrailers] = useState(null)
    const [movies, setMovies] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTrendingMovies("week")
                setMovies(data.results)
            } catch (error) {
                console.error("Error loading favorite movies:", error);
            }
        }
    fetchData()
        
    }, [])

    return (
        <div className="p-4 flex flex-col">
            <Typography variant="h4" color="">Trailers</Typography>
            <div className="flex flex-row space-x-4">
                <button ><Typography variant="lead" >Day</Typography></button>
                <button ><Typography variant="lead" >Week</Typography></button>
            </div>
            <div className="mt-2 flex flex-row space-x-4 overflow-x-auto">
            {movies?.map((movie, index) => (
                <MovieTrailer movie={movie} key={index} />
            )) }
        </div>
        </div>
        
    )
}

export default Trailers