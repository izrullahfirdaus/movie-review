import { generateDate } from "@/app/fun/helper"
import { Typography } from "@material-tailwind/react"

const MoviePoster = ({movieData, index, textColor}) => {
    const formattedDate = generateDate(movieData.release_date)
    return (
        <div className="flex flex-col p-2 space-y-2">
            <div className="small-movie-poster rounded-lg bg-gray-600">
                <img src={`https://image.tmdb.org/t/p/w1280${movieData.poster_path}`} alt={index} className="object-fill h-full w-full rounded-lg" />
            </div>
            <div className="px-2 flex flex-col">
                <Typography variant="h6" color={textColor}>{movieData.title}</Typography>
                <Typography variant="paragraph" color={textColor}>{formattedDate}</Typography>
            </div>
        </div>
    )
}

export default MoviePoster