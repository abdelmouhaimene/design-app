import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Pricing from "@/sections/Pricing";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="bg-image bg-cover bg-no-repeat bg-center bg-[url(/full-banner.jpg)]" >
       <Navbar />
      <div className="pt-10">
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Process />
        <Testimonials />
      </div>
    </div>
  );
}
