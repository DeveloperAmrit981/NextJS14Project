"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";


export const addPost = async (blogData) => {
 

    const {userId, desc, img, slug, title, dateadded} = Object.fromEntries(blogData);
    
    try {
      connectToDb
      const newPost = new Post({
        userId, desc, img, slug, title, dateadded
      });

      await newPost.save();
      console.log("Added to database")
      revalidatePath("/blog");
    } catch (error) {
      console.log(error);
      return { error: "Something went wrong"};
    }
  }

  export const deletePost = async (userData) => {
   

    const {id} = Object.fromEntries(userData);
    
    try {
      connectToDb()
      
      await Post.findByIdAndDelete(id);
      console.log("deleted from database")
      revalidatePath("/blog");
    } catch (error) {
      console.log(error);
      return { error: "Something went wrong"};
    }
  }

  export const addUser = async (prevState,formData) => {
    const { username, email, password, img, isAdmin } = Object.fromEntries(formData);
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      connectToDb();
      const newUser = new User({
        username,
        email,
        password : hashedPassword,
        img,
        isAdmin
      });
  
      await newUser.save();
      console.log("saved to db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.deleteMany({ userId: id });
      await User.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };


 export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
}

export const handleLogout = async () => {
  "use server"
  await signOut()
}

export const register = async ( previousState,formData) => {
  const {username, password, email , passwordRepeat} = Object.fromEntries(formData);
  console.log(username, password, email , passwordRepeat)

  if(password !== passwordRepeat){
    // return "Password do not match"
    return { error: "Passwords do not match"}
  }

  try {
    connectToDb();
    const user =await  User.findOne({username})

    if(user){
      return { error: "Username alresdy exist"}
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password : hashedPassword,
    })

    await newUser.save();
    console.log("saved to database");

    return {success: true};
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong"}
  }
}

export const handlelogin = async (  loginData) => {
  const {username, password } = Object.fromEntries(loginData);
 
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return {error: "incorrect username or password"};
    }
    throw err;
  }
};