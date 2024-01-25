
import Image from "next/image";
import {Postuser, Userimg} from "@/components/user/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`)

  if (!res.ok) {
      throw new Error("data fetch not successful")
  }

  return res.json();
}

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  
  // const post = await getData(slug)
 const post = await getPost(slug);
  return  {
  title: post.title,
  description : post.desc
};
}





export default async function SinglePostPage({params}) {
 const {slug} = params;
 
 const post = await getData(slug)
// const post = await getPost(slug);


  
  return (
    <>
    <div className="text-3xl font-semibold text-center -mt-[30px]">{post.title}</div>
    <div className="md:flex flex-row p-5">
      <div className="basis-1/2 md:px-10 pt-5">
        {post.img && <Image className=" w-full rounded-lg  " alt="" src= {post.img}  width={200} height={200}/>}
      </div>

      <div className="basis-1/2 pt-5">
        <div className="md:flex gap-10 mb-10">
          <Userimg user = {post.userId} />
          <div className="flex gap-1 flex-col">
            <Suspense fallback = {<div>Loading...</div>}>
              <Postuser user = {post.userId}/>
            </Suspense>
            <div className="md:flex gap-6 mt-3 sm:mt-0 justify-between">
                <div className="text-xl font-semibold">Published : </div>
                <div className="text-lg">{post.dateadded}</div>
            </div>
          </div>
        </div>

        <div className="text-start text-xl text-gray-200 drop-cap">
         {post.desc}
        </div>
      </div>
    </div>
    </>
  )
}