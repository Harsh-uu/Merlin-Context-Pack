export const Hero = () => {
    return (
        <div className="h-[92vh] font-helvetica flex flex-col justify-center items-center max-w-5xl mx-auto overflow-hidden px-4">
            <h1 className="text-4xl lg:text-6xl text-center [text-shadow:2px_2px_2px_black]">Prompts that adopt to the website  you're on</h1>
            <p className="mt-8 max-w-md text-center text-[#939db8]">Merlin Context Packs suggest the best AI prompts for Linkedin, YouTube, GitHub and more.</p>
            <div className="mt-8 flex gap-4">
                <button className="bg-[#666fdf] px-3 py-1 rounded-lg text-[#e2e5ec] border border-[#c9d3ee]/50 cursor-pointer">View Demo</button>
                <button className="bg-white/10 px-3 py-1 rounded-lg text-[#e2e5ec] border border-[#c9d3ee]/50 cursor-pointer">Explore Prompt Packs</button>

            </div>
        </div>
    )
}