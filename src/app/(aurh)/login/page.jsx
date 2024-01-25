import LoginForm from "@/components/loginForm/loginForm"
import {handleGithubLogin} from "@/lib/action"


export default async function Login(){
    

    return (
        <div className="max-w-[450px]  text-center mx-auto bg-slate-700 p-5">
            <form action={handleGithubLogin} className="py-10 text-3xl">
              <button className="py-2 px-7 rounded-lg bg-green-800 hover:bg-green-500">Login with GitHub &rarr;</button>
            </form>

            <div className="pb-10">--OR--</div>

            <LoginForm />
        </div>
    )
}