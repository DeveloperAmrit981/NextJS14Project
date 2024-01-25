import Link from "next/link"

const Footer = () => {
    return (
        <div className=" grayscale md:flex items-center justify-between">
            <div>
                <Link href="/" className="md:text-5xl text-5xl  font-semibold cursive "> Developer Amrit </Link>
            </div>

            <div className="text-2xl   cursive font-extralight">
                Bringing ideas to Life
            </div>
        </div>
    )
}

export default Footer