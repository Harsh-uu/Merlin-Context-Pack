export const Header = () => {
    return (
        <div className="flex justify-between py-3 border-b border-[#e2e5ec]/10 max-w-6xl mx-auto items-center text-[#c9d3ee] text-sm">
            <h1 className="font-semibold">Merlin Context Packs</h1>
            <ul className="flex gap-12"> 
                <li>Features</li>
                <li>Demo</li>
                <li>Prompt Packs</li>
                <li>How It Works</li>
            </ul>
            <button className="bg-[#666fdf] px-3 py-1 rounded-lg text-[#e2e5ec] font-semibold border border-[#c9d3ee]/50 cursor-pointer">Try Demo</button>
        </div>
    )
}