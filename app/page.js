import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-4 text-white h-[60vh] md:h-[44vh]">
      <div className="font-bold text-3xl md:text-5xl flex gap-4 justify-center items-center">
        Buy me a Chai <span><img src="/green.gif" className="size-32" alt="tea" /></span>
      </div>
      <p className="flex gap-4 justify-center items-center p-2 md:p-0 text-center">
        A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!
      </p>
      <div>

        <Link href={"/login"}> 
        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-3xl me-2 mb-2">Start Here</button>
        </Link>

        <Link href={"/about"}>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-3xl me-2 mb-2">Read More</button>
        </Link>

      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto pb-14">
      <h2 className="text-xl md:text-3xl font-bold text-center my-7">Your Fans can buy you a Chai</h2>
    
      <div className="flex gap-5 justify-around p-3">

        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-200 rounded-full p-2 size-15 md:size-20" src="/worker.gif" alt="man" />
          <p className="font-bold text-sm md:text-lg text-center">Fans want to help</p>
          <p className="text-center text-[9px]">Your fans are available for you to help you</p>
        </div>

        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-200 rounded-full p-2 size-15 md:size-20" src="/dollar.gif" alt="man" />
          <p className="font-bold text-sm md:text-lg text-center">Fans want to help</p>
          <p className="text-center text-[9px]">Your fans are available for you to help you</p>
        </div>

        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-200 rounded-full p-2 size-15 md:size-20" src="/profit.gif" alt="man" />
          <p className="font-bold text-sm md:text-lg text-center">Fans want to help</p>
          <p className="text-center text-[9px]">Your fans are available for you to help you</p>
        </div>
      </div>
    </div>

 <div className="bg-white h-1 opacity-10"></div>


     <div className="text-white container mx-auto pb-14 flex flex-col items-center justify-center size-[90%]">
      <h2 className="text-xl md:text-3xl font-bold text-center my-7">Learn more about us</h2>
    
     <iframe className="size-fit md:w-[50%] md:h-[40vh]" src="https://www.youtube.com/embed/7OojpOilB4s?si=fPlrQgLRTV32BA2h" title="YouTube video player" framebprder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    </>
    
  );
}
