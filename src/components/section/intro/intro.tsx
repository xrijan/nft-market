import { SparklesCore } from '../../sparkles'
import { TypewriterEffectSmooth } from '../../typewriter-effect';

const Intro = () => {
  const words = [
    {
      text: "Buy",
    },
    {
      text: "Sell",
    },
    {
      text: "Trade",
    },
    {
      text: "NFTs and",
    },
    {
      text: "more.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    
  <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
  <div className="w-full absolute inset-0 h-screen">
    <SparklesCore
      id="tsparticlesfullpage"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      className="w-full h-full"
      particleColor="#FFFFFF"
    />
  </div>
  <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
    NFT Market Place
  </h1>
  <TypewriterEffectSmooth words={words} />
  

  <div className='flex'>
  <button className="relative inline-flex h-12  w-40 margin-left mr-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Sign Up
  </span>
</button>
<button className="relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      Sign In   
  </span>
</button>
  </div>
</div>
  )
}

export default Intro


