
import { addPost, deletePost } from "@/lib/action"


const page = () => {

 return (
    <div>
        <form action= {addPost} className="flex flex-col gap-5 text-black ">
            <input type = "text" name="userId" placeholder="userID"  />
            <input type = "text" name="desc" placeholder="desc"/>
            <input type = "text" name="img" placeholder="img"/>
            <input type = "text" name="slug" placeholder="slug"/>
            <input type = "text" name="title" placeholder="title" />
            <input type = "text" name="dateadded" placeholder="dateadded"/>
            <button type="submit" className="bg-blue-700 p-3 text-white">Create Post</button>
            
        </form>
        <form  action= {deletePost} className="mt-5">
          <input type="text" placeholder="Post id" className=" text-black" name="id"></input>
          <button className="bg-blue-700 p-3">Delete Post</button>
        </form>
    </div>
  )
}

export default page