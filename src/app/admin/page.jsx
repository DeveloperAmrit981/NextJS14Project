import AdminPostForm from "@/components/adminPostForm/adminPostForm"
import AdminPosts from "@/components/adminPosts/adminPosts"
import AdminUserForm from "@/components/adminUserForm/adminUserForm"
import AdminUsers from "@/components/adminUsers/adminUsers"
import { Suspense } from "react"

export const metadata = {
    title: "Admin",
    description : "This is the Admin panel page of Amrit's idea Hub "
}

export default function Admin(){
    return (
        <div className="flex flex-col gap-20">
           <div className="lg:flex justify-between gap-10">
                <div className="flex-1 bg-gray-800 p-3">
                    <Suspense fallback = {<div>Loading...</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className="flex-1 bg-gray-800 p-3">
                    <AdminPostForm />
                </div>
           </div> 

           <div className="lg:flex justify-between gap-10">
                <div className="flex-1 bg-gray-800 p-3">
                    <Suspense fallback = {<div>Loading...</div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className="flex-1 bg-gray-800 p-3">
                    <AdminUserForm />
                </div>
           </div> 
        </div>
    )
}