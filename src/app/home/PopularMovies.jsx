import { getPopularMovie } from "@/lib/loadFromAPI"
import { Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import MoviePoster from "@/components/MoviePoster"
const PopularMovies = () => {
    const popularTypes = [
        {label: "Streaming", name: "streaming", query: "flaterate"},
        {label: "On TV", name: "ontv", query: "buy"},
        {label: "Rent", name: "rent", query: "rent"},
        {label: "In Theatres", name: "intheaters", query: "flaterate"},
    ]
    const [selectedButton, setSelectedButton] = useState(popularTypes[0])
    const [movies, setMovies] = useState(null)

    const handleSelected = (value) => {
        setSelectedButton(value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPopularMovie(selectedButton.query)
                setMovies(data.results)
            } catch (error) {
                console.error("Error loading favorite movies:", error);
            }
        }

        fetchData()
    }, [selectedButton])
    return (
        <div className="p-4 space-x-4">
            <Typography variant="h4">Trending</Typography>
            <div className="flex flex-row space-x-4">
                {popularTypes.map((popular, index) => {
                    const textColor = popular.name === selectedButton.name ? "red" : "black"
                    return (
                        <button onClick={() => handleSelected(popular)} key={index}><Typography variant="lead" color={textColor}>{popular.label}</Typography></button>
                    )
                })}
            </div>
            <div className="mt-2 flex flex-row space-x-4 overflow-x-auto">
                {movies?.map((movie, index) => {
                    return (
                        <MoviePoster movieData={movie} index={index} key={index} textColor={"black"} />
                    )
                })}

            </div>

        </div>
    )
}

export default PopularMovies