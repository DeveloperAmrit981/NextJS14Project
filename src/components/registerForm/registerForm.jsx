"use client"
import { register } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {useFormState} from "react-dom"

const RegisterForm = () => {

    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push('/login')
    }, state?.success, router)

  return (
    <form action= {formAction} className=" flex flex-col gap-7 ">
    <div className="mx-auto flex flex-col gap-2">
        <label htmlFor = "username" className="text-xl font-semibold"> Username :</label>
        <input id="username" type="text" placeholder="username" name="username" className="px-2 py-1 rounded text-black min-w-[300px]" />
   </div>

  <div className="mx-auto flex flex-col gap-2 ">
       <label htmlFor = "email" className="text-xl font-semibold" > Email :</label>
       <input id="email" type="text" placeholder="email" name="email" className="px-2 py-1 rounded text-black min-w-[300px]" />
  </div>

   <div className="mx-auto flex flex-col gap-2">
       <label htmlFor= "passwrod" className="text-xl font-semibold" > Password :</label>
       <input id="password" type="password" placeholder="password" name="password" className="px-2 py-1 rounded text-black min-w-[300px]" />
   </div>

   <div className="mx-auto flex flex-col gap-2">
       <label htmlFor= "repassword" className="text-xl font-semibold"> Confirm Password :</label>
       <input id="repassword" type="password" placeholder="confirm password" name="passwordRepeat" className="px-2 py-1 rounded text-black min-w-[300px]" />
   </div>

   <div  className="text-center mt-10">
       <button  className="text-xl font-semibold bg-blue-700 px-5 py-2 rounded">Register</button> <br/>
       {state?.error}
   </div>
   
   <Link href='/login' className="text-center text-2xl font-semibold">
    Have an Account <p className="text-red-500 font-bold text-lg underline hover:text-red-300">Login</p>
   </Link>
</form>
  )
}

export default RegisterForm