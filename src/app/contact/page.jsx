"use client"

 const metadata = {
    title: "Contact",
    description : "This is the Contact page of Amrit's idea Hub "
}

import Image from "next/image"

export default function Contact(){

    return (
        <>
        <div className="text-3xl font-semibold text-center text-pretty pb-10">Reach out to us for a free consaultation:</div>
        <div className=" md:flex gap-2">

            <div className="flex-1 md:flex hidden ">
                <Image
                    src="/contact.png"
                    height= {500}
                    width={500}
                    alt="this is an image"
                />
            </div>

            <div className="flex-1">
                <form action="" className="flex flex-col gap-4 md:px-10 text-lg">
                    <input className="px-5 py-1 input rounded" type="text" name="name" id="" placeholder="Full Name" />
                    <input className="px-5 py-1 input rounded" type="email" name="email" id="" placeholder="Email address" />
                    <input className="px-5 py-1 input rounded" type="tel" name="phone" id="" placeholder="Phone number" />
                    <textarea className="px-5 py-1 input rounded" name="message" cols="" rows="8" placeholder="Your message..."></textarea>

                    <button  className="bg-blue-700 rounded-full mt-5 py-2 text-xl font-bold " type="submit">Send</button>
                </form>
            </div>
            
        </div>
        </>
    )
}