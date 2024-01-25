import error from "@/app/error"
import { getUser } from "@/lib/data";
import Image from "next/image";

// const getData = async (userid) => {
//   const res = await fetch( `https://jsonplaceholder.typicode.com/users/${userid}`, {cache: "no-store"} )

//   if (!res.ok) {
//     throw new error("failed")
//   }

//   return res.json();
// }

const Postuser = async ({user}) => {
  // const userdata = await getData(userid);
  const userdata = await getUser(user)
  
  return (
    <>
    <div className="md:flex gap-5 mt-3 sm:mt-0 justify-between">
        <div className="text-xl font-semibold">Author : </div>
        <div className="text-lg">{userdata.username}</div>
    </div>
    </>
  )
}

const Userimg = async ({user}) => {
  const userdata = await getUser(user)
 
  
  return (
    <div><Image className="rounded-full" alt="" src= { userdata.img ? userdata.img: "/noavatar.png"} width={70} height={70}/></div>
  )
}
  

export  {Postuser, Userimg};