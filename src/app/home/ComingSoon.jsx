import { useState } from "react"
import { handleSelectedButton } from "../fun/helper"
import { Typography } from "@material-tailwind/react"


const ComingSoon = () => {
    const buttons = [
        {label: "Movies", name: "movies"},
        {label: "TV", name:"tv"}
    ]
    const [selectedButton, setSelectedButton] = useState(buttons[0])
    
    return (
        <div className="p-4 space-x-4">
            <Typography variant="h4">Coming Soon</Typography>
            <div className="flex flex-row space-x-4">
                {buttons.map((button, index) => {
                    const textColor = button.name === selectedButton.name ? "red" : "black"
                    return (
                        <button onClick={() => handleSelectedButton(button, setSelectedButton)} key={index}><Typography variant="lead" color={textColor}>{button.label}</Typography></button>
                    )
                })}
            </div>
            <div className="mt-2 flex flex-row space-x-4 overflow-x-auto">
                {/* {movies?.map((movie, index) => {
                    return (
                        <MoviePoster movieData={movie} index={index} key={index} textColor={"black"} />
                    )
                })} */}

            </div>

        </div>
    )
}

export default ComingSoon