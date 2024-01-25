import Postcard from "@/components/postcard/Postcard";

// import { getPosts } from "@/lib/data";

 const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog", {cache: "no-store"});

    if (!res.ok) {
        throw new error("data fetch not successful")
    }

    return res.json();
}
export const metadata = {
    title: "Blogs",
    description : "This is the Blogs page of Amrit's idea Hub "
}

export default async function Blog(){
    const posts = await getData()
    // const posts = await getPosts();

    return (
        <div>
            <div className="text-3xl font-semibold ms-10 -mt-[20px] mb-16 text-gray-300"> Latest Blogs : </div>
                <div className=" blogpostHolders">
                {posts.map(post => (
                    <Postcard post= {post} key={post.id} />
                ))}
                </div>
        </div>
    )
}