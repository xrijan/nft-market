
export const Footer = () => {
    return (
        <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Join the waitlist
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
               Welcome to our NFT world, where creativity meets blockchain. Join our waitlist today to gain early access and priority perks for our upcoming NFT collection launch.
               

                </p>

                <label htmlFor="input-label" className="block text-sm font-medium mb-2 text-white">Email</label>
                <input type="email" id="input-label" className="py-3 px-4 block w-full border-neutral-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-700 text-white" placeholder="you@site.com"></input>
            </div>
        </div>
    )
}
