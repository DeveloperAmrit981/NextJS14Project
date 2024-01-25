"use client"
import {handlelogin}  from  "@/lib/action"
import { useFormState } from "react-dom";
import Link from "next/link";



const LoginForm = () => {
    const [state, formAction] = useFormState(handlelogin, undefined);

  return (
    <form action= {handlelogin} className="text-xl flex flex-col gap-10 ">
                <div className="flex items-center justify-between">
                    <label htmlFor="username"> Username : </label>
                    <input id="username" type="text" placeholder="username" name="username" className="px-5 text-black rounded py-1"/>
                </div>

                <div className="flex  items-center justify-between">
                    <label htmlFor="password"> Password : </label>
                    <input id="password" type="password" placeholder="password" name="password" className="px-5 text-black rounded py-1"/>
                </div>

                <div>
                    <button  className="px-5 py-2 bg-blue-800 rounded-lg  hover:bg-blue-500">Log in</button>
                   
                </div>
                
                <Link href="/register">
                     {"Don't have an account?"} <b className="text-red-500 underline">Register</b>
                 </Link>


            </form>
  )
}

export default LoginForm;