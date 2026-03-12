export const Hero = () => {
    return (
        <div className="h-[92vh] font-helvetica flex flex-col justify-center items-center max-w-5xl mx-auto overflow-hidden px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center [text-shadow:2px_2px_2px_black]">Prompts that adopt to the website  you're on</h1>
            <p className="mt-6 sm:mt-8 max-w-md text-center text-[#939db8] text-sm sm:text-base">Merlin Context Packs suggest the best AI prompts for Linkedin, YouTube, GitHub and more.</p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <a href="#demo" className="bg-[#666fdf] px-5 py-2 rounded-lg text-[#e2e5ec] border border-[#c9d3ee]/50 cursor-pointer text-center text-sm sm:text-base">View Demo</a>
                <a href="#context-packs" className="bg-white/10 px-5 py-2 rounded-lg text-[#e2e5ec] border border-[#c9d3ee]/50 cursor-pointer text-center text-sm sm:text-base">Explore Prompt Packs</a>
            </div>
        </div>
    )
}