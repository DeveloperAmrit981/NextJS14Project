"use client"

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <>
      
     <form action= {addPost} className="flex flex-col gap-5 ">
     <h1 className="text-3xl font-bold text-gray-300 mb-5 ">Add New Post :</h1>

            <input className="p-2 text-lg bg-cyan-950" type = "text" name="userId" placeholder="userID"  />
            <input className="p-2 text-lg bg-cyan-950" type = "text" name="img" placeholder="Inage source"/>
            <input className="p-2 text-lg bg-cyan-950" type = "text" name="slug" placeholder="slug"/>
            <input className="p-2 text-lg bg-cyan-950" type = "text" name="title" placeholder="title" />
            <input className="p-2 text-lg bg-cyan-950" type = "text" name="dateadded" placeholder="Date Added"/>
            <textarea type="text" name="desc" placeholder="desc" rows={8} className="p-2 text-lg bg-cyan-950" />
            <button type="submit" className="bg-blue-700 p-3 text-white  hover:bg-blue-800">Create Post</button>
            
        </form>

        </>
  );
};

export default AdminPostForm;