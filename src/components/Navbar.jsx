import Link from "next/link"

const Navbar = () => {
    console.log("tes loopp juga")
    return (
        <nav className="bg-gray-800">
            <div className="flex flex-row w-full justify-between p-4">
                <div className="text-white flex flex-row text-white">
                    <h1 className="mx-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold">MOVIE REVIEW</h1>
                    <Link className="mx-2" href={"/movies"}>Movies</Link>
                    <Link className="mx-2" href={"/tv-shows"}>TV Shows</Link>
                    <Link className="mx-2" href={"/people"}>People</Link>
                </div>
                <div>
                    <p>Lainnya</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar