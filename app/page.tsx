import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <div className="bg-image bg-cover bg-no-repeat bg-center bg-[url(/full-banner.jpg)]" >
       <Navbar />
      <div className="pt-10">
        <Hero />
        <Services />
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
      </div>
    </div>
  );
}
