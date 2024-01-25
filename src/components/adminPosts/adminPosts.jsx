import { getPosts } from "@/lib/data";

import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div >
      <h1 className="text-3xl font-bold text-gray-300 mb-5">Posts : </h1>
      
      {[...posts].reverse().map((post) => (
        <div className="flex justify-between p-3 items-center" key={post.id}>
          <div className="flex items-center gap-5" >
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
              className="h-20 w-20 rounded-3xl "
            />
            <span >{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="bg-red-800 px-3 rounded-lg hover:bg-red-500" >Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;