import { PinContainer } from '../../3d-pin'

export const TopNFT = () => {
  return (

    <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">

        <h2>Top Collection</h2>
        <div className="h-[40rem] w-full flex ">
          <PinContainer
            title="person-wearing-futuristic"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className='text-4xl'>Futuristic</h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 tracking-wide leading-relaxed ">
                  This is A persion wearing futuristic high tech virtual reality glasses.
                </span>
              </div>
              <img src="https://img.freepik.com/free-photo/person-wearing-futuristic-high-tech-virtual-reality-glasses_23-2151141687.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph"
              ></img>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          <PinContainer
            title="Hand Drawn Pop Art"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className='text-4xl'> Girl Illustration</h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500  tracking-wide leading-relaxed">
                  A girl illustration in hand drawn pop art style.
                </span>
              </div>
              <img src="https://img.freepik.com/free-vector/hand-drawn-pop-art-girl-illustration_23-2149509671.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph"
              ></img>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          <PinContainer
            title="Giant Electro"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className='text-4xl'>  Cyber Cat</h3>

              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 tracking-wide leading-relaxed">
                  Cat with giant electro flowers sunrise generative AI. It is a beautiful art.
                </span>
              </div>
              <img src="https://img.freepik.com/free-photo/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai_8829-2889.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph"
              ></img>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>

      </p>

    </div>

  )
}
