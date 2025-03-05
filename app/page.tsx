import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-black">
       <Navbar />
      <div className="bg-image bg-cover bg-no-repeat bg-center   "
        style={{ backgroundImage: "url('/full-banner.jpg')" }}
      >
        <p className="font-work-sans font-black text-7xl text-primary">
          hiiii 
        </p>
   
      </div>
    </div>
  );
}
