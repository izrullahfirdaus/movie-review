import { getMovieVideo } from "@/lib/loadFromAPI"
import { Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"

const MovieTrailer = ({movie}) => {
    const [movieTrailer, setMovieTrailer] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMovieVideo(movie.id)
                setMovieTrailer(data)
            } catch (error) {
                console.error("Error loading favorite movies:", error);
            }
        }
        fetchData()
    }, [])
    return (
        <div className="flex flex-col space-y-2 text-center">
            <div className="trailers-thumbnail bg-gray-600 rounded-lg drop-shadow-lg flex items-center justify-center">
                <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="movie-backdrop" className="w-full h-full rounded-lg absolute" />
                <Typography variant="paragraph" className="relative" color="white">icon button play disini</Typography>
            </div>
            <Typography variant="h6">{movie.title}</Typography>
            <Typography variant="paragraph">{movieTrailer?.name}</Typography>
        </div>
    )
}

export default MovieTrailer