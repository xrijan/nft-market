import { ParallaxScroll } from "../../parallax-scroll";



export const Body = () => {
  return (
  
    <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex  justify-center overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex   dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 overflow-hidden">
      <h2 className="mb-20">People Choise</h2>

       <ParallaxScroll images={images} />

      </p>
    </div>
    
  )
}


const images = [
  "https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?t=st=1713160349~exp=1713163949~hmac=85c8d8d5ebec32bff27049bb9db338df840b7a5fa0d3823659724dfab4e7f706&w=1380",
  'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph',
  'https://img.freepik.com/free-photo/viking-warriors-with-burning-eyes-generative-ai_8829-2913.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph',
  'https://img.freepik.com/free-vector/realistic-fantasy-illustration-dwarf-illustration_52683-95388.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph',
  'https://img.freepik.com/free-photo/cat-warriors-with-burning-eyes-generative-ai_8829-2909.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph',
  'https://img.freepik.com/free-photo/rise-humanoids-with-advanced-headgear-generative-ai_8829-2877.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph',
  "https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?t=st=1713160349~exp=1713163949~hmac=85c8d8d5ebec32bff27049bb9db338df840b7a5fa0d3823659724dfab4e7f706&w=1380",
  'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph',
  'https://img.freepik.com/free-photo/viking-warriors-with-burning-eyes-generative-ai_8829-2913.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph',
  'https://img.freepik.com/free-vector/realistic-fantasy-illustration-dwarf-illustration_52683-95388.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph',
  'https://img.freepik.com/free-photo/cat-warriors-with-burning-eyes-generative-ai_8829-2909.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph',
  'https://img.freepik.com/free-photo/rise-humanoids-with-advanced-headgear-generative-ai_8829-2877.jpg?size=626&ext=jpg&ga=GA1.1.1092273946.1713160341&semt=sph'


];
