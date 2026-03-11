import Image from "next/image";
import { Header } from "./homepage/Header";
import { Hero } from "./homepage/Hero";
import { Problem } from "./homepage/Problem";
import { Solution } from "./homepage/Solution";
import { Context } from "./homepage/Context";
import { Demo } from "./homepage/Demo";
import { HowItWorks } from "./homepage/HowItWorks";
import { Example } from "./homepage/Example";
import { CTA } from "./homepage/CTA";
import { Footer } from "./homepage/Footer";

export default function Home() {
  return (
    <div className="bg-[#0b0c14] text-[#e2e5ec] font-helvetica">
      <div className="relative isolate w-full overflow-x-clip">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-screen w-500 rotate-45 bg-[radial-gradient(ellipse_at_center,rgba(102,111,223,0.44)_0%,rgba(201,211,238,0.16)_42%,transparent_76%)] blur-3xl pointer-events-none -z-10" />
        <div className="relative z-10">
          <Header />
          <Hero />
          <Problem />
        </div>
      </div>
      <Solution />
      <Context />
      <Demo />
      <HowItWorks />
      <Example />
      <CTA />
      <Footer />
    </div>
  );
}
