import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-4 text-white h-[44vh]">
      <div className="font-bold text-5xl flex gap-4 justify-center items-center">
        Buy me a Chai <span><img src="/green.gif" width={150} alt="tea" /></span>
      </div>
      <p>
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
      <h2 className="text-3xl font-bold text-center my-7">Your Fans can buy you a Chai</h2>
    
      <div className="flex gap-5 justify-around">

        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-200 rounded-full p-2" width={88} src="/worker.gif" alt="man" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>

        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-200 rounded-full p-2" width={88} src="/dollar.gif" alt="man" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>

        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-200 rounded-full p-2" width={88} src="/profit.gif" alt="man" />
          <p className="font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
      </div>
    </div>

 <div className="bg-white h-1 opacity-10"></div>


     <div className="text-white container mx-auto pb-14 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center my-7">Learn more about us</h2>
    
     <iframe width="560" height="315" src="https://www.youtube.com/embed/7OojpOilB4s?si=fPlrQgLRTV32BA2h" title="YouTube video player" framebprder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    </>
    
  );
}
