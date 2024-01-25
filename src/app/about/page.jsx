import Image from "next/image"

export const metadata = {
    title: "About",
    description : "This is the about page of Amrit's idea Hub "
}

export default function Contact(){
    return (
        <div className="md:flex items-center gap-2">
            <div className="flex-1 flex flex-col gap-10">
                <div className="text-3xl font-semibold text-blue-800">
                    <h2>About Agency</h2>
                </div>

                <div className="text-5xl font-semibold">
                    <p>
                        We create digital ideas 
                        that are bigger, bolder, 
                        braver and better.
                    </p>
                </div>

                <div className="text-2xl text-gray-400">
                    <p>
                        Our company excels in digital innovation, giving ideas a life.
                         Each project reflects our commitment to excellence, merging aesthetic 
                        appeal with functional superiority to resonate deeply with audiences. We're not just about
                        ideas; we're about setting new standards in the digital world.  
                    </p>
                </div>

                <div className="md:flex text-center md:text-start  justify-between">
                    <div className="flex-1   ">
                        <div className="text-blue-700 text-4xl font-bold md:mb-2 ">10 +</div>
                        <div className="text-xl text-gray-300 md:mb-0 mb-5">Years of <br /> Experience</div>
                    </div>
                    <div className="flex-1  ">
                        <div className="text-blue-700 text-4xl font-bold md:mb-2 ">10 M+</div>
                        <div className="text-xl text-gray-300 md:mb-0 mb-5">People <br /> Reached</div>
                    </div>
                    <div className="flex-1 ">
                        <div className="text-blue-700 text-4xl font-bold md:mb-2 ">1 M+</div>
                        <div className="text-xl text-gray-300 md:mb-0 mb-5">Active Users <br /> Everyday</div>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <Image src="/about.png" alt="" width={500} height={500} />
            </div>
        </div>
    )
}