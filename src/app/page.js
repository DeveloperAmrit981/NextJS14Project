import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
   <div className="md:flex gap-4 items-center ">
      <div className="flex flex-1 flex-col gap-10">
        <div>
        <h1 className="text-6xl font-semibold">Take your Business Global.<br /><br />Go Online Today.</h1>
        </div>

       <div>
        <p className="text-2xl text-gray-400">
              I am Amrit Pandit. I assist business owners in taking their businesses online, harnessing the power of 
              digital transformation to expand their reach and enhance their market presence.
          </p>
       </div>

        <div className="md:flex  gap-10">
          <Link href="/about" className="bg-gradient-to-r from-blue-700 hover:bg-blue-500 px-5 py-3 mb-3 sm:mb-0 text-2xl font-semibold rounded-full">Learn More &#8594;</Link>
          <Link href="/contact" className="bg-gradient-to-r from-pink-900 hover:bg-pink-500 px-5 py-3 text-2xl font-semibold rounded-full">Contact Us &#9742;</Link>
        </div>

        <div>
          <Image className="grayscale " src="/brands.png" alt="" width={500} height={500} />
        </div>
      </div>

      <div className="flex-1">
      <Image src="/hero.gif" alt="" width={500} height={500} />
      </div>
   </div>
  )
}
