import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-4 text-white h-[44vh]">
      <div className="font-bold text-5xl flex gap-3 justify-center items-center">
        Buy me a Chai <span><img src="/tea.gif" width={88} alt="tea" /></span>
      </div>
      <p>
        A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!
      </p>
      <div>
        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-3xl me-2 mb-2">Start Here</button>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-3xl me-2 mb-2">Read More</button>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white">
      <h1>Your Fans can buy you a Chai</h1>
      <div className="flex gap-5">
        <div className="item bg-slate-200 rounded-full p-7 text-black">
          <img width={88} src="/man.gif" alt="man" />
          <p>Fund yourself</p>
        </div>
      </div>
    </div>
    </>
    
  );
}
