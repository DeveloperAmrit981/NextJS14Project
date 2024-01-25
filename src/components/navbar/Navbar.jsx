import { auth } from "@/lib/auth"
import Links from "./links/Links"
import Link from "next/link"


export const  Navbar = async() => {

  const session = await auth();
  
  return (
    <div className="flex  justify-between py-8 items-center">
        <Link href="/" className="md:text-5xl text-4xl  font-semibold cursive "> Amrit's <br  /> Idea Hub </Link>
        <div>
           <Links session = {session} /> 
        </div>
    </div>
  )
}
