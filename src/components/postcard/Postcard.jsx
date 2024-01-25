import Image from "next/image"
import Link from "next/link"

const Postcard = ({post}) => {
  return (
    <div className="flex flex-col p-3 rounded-lg postcard shadow-lg shadow-slate-500" >
       <div>
           {post.img && <Image className="postcardImg min-w-full " src= {post.img} alt="" height = {300} width = {250}  />}
       </div>

       <div className="text-right pt-2">
           {post.dateadded}
        </div>

        <div className="flex text-left flex-col gap-1 p-3 ">
            <p className="text-2xl font-bold truncate">{post.title} </p>
            <p className="text-lg text-gray-300 truncate-3-lines">{post.desc}</p>
            <Link className="mt-2 text-blue-400 hover:text-white" href={`/blog/${post.slug}`} alt= "" >
              <span className="underline ">Read More</span> &nbsp; 
              <span className="text-red-500 font-bold">&#x27A1;</span> 
            </Link>
        </div>
    </div>
  )
}

export default Postcard