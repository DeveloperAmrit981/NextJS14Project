"use client"
import { use } from "express/lib/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {handleLogout} from "@/lib/action"
import { auth } from "@/lib/auth";

function  Links ({session}) {
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blogs",
            path: "/blog"
        },
    ];
    const pathName = usePathname();

    const [open, setOpen] = useState(false);

    // temporary
    const isAdmin = true;

  return (
    <div >
        {/* for bigger screens nav links */}
    <div className="lg:flex gap-6 text-lg font-semibold items-center hidden ">
        {links.map(link => (
            <Link 
                href = {link.path} 
                key= {link.title} 
                className={`${pathName === link.path && "active px-8 text-xl py-2 rounded-full"}`}>
                    {link.title} 
            </Link>
        ))}
        {
            session ? (
                <>
                {isAdmin && 
                    <Link
                    href = "/admin" 
                    key= "admin"
                    className={`${pathName === "/admin" && "active px-8 py-2 rounded-full"}`}>
                        Admin 
                    </Link>
                    
                }
                <form action={handleLogout}>
                    <button className="logout px-6 py-2 rounded-full ml-8 font-semibold">Log out</button>
                </form>
                
                </>
            )

            :(
                <Link
                href = "/login" 
                key= "login"
                className={`${pathName === "/login" && "active px-8 py-2 rounded-full"}`}>
                    Log in 
                </Link>
            )
        }
    </div>

        {/* for mobile toggle icon */}
    <button 
    className="text-5xl pb-3 lg:hidden "
    onClick={()=> setOpen(prevstate => !prevstate)}
    >
        &#9776; 
    </button>
    

        {/* for mobile toggle menu */}
    {
        open && (
            
            <div className="absolute right-0 bg-slate-700 rounded-[10px] flex flex-col  text-lg lg:hidden font-semibold items-start py-5   ">
                {links.map(link => (
                    <Link 
                        href = {link.path} 
                        key= {link.title} 
                        onClick={() =>setOpen(false) }
                        className={`px-8 text-xl py-2 ${pathName === link.path && "active w-full "} `}>
                            {link.title} 
                    </Link>
                ))}
                {
                    session ? (
                        <>
                        {isAdmin && 
                            <Link
                            href = "/admin" 
                            key= "admin"
                            onClick={() =>setOpen(false) }
                            className={`px-8 text-xl py-2 ${pathName === "/admin" && "active w-full "}`}>
                                Admin 
                            </Link>
                            
                        }
                        <form action={handleLogout}>
                            <button className=" logout px-6 py-2 mx-3 mt-3 rounded-full  font-semibold">Log out</button>
                        </form>
                        </>
                    )

                    :(
                        <Link
                        href = "/login" 
                        key= "login"
                        className={`${pathName === "/login" && "active px-8 py-2 rounded-full"}`}>
                            Log in 
                        </Link>
                    )
                }
            </div>
        )
    }
    </div>
  )
}

export default Links