import About from "@/components/About";
import Affordable from "@/components/Affordable";
import Banner from "@/components/Banner";
import ExpertTeam from "@/components/ExpertTeam";
import Navbar from "@/components/Navbar/Navbar";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div>
      {/* NAVBAR COMPONENT  */}
      <Navbar />

      {/* BANNER COMPONENT  */}
      <Banner/>

      {/* SERVICE COMPONENT  */}
      <Service/>

      {/* AFFORDABLE COMPONENT  */}
      <Affordable/>


      {/* EXPERT TEAM COMPONENT  */}
      <ExpertTeam/>

      {/* ABOUT COMPONENT  */}
      <About/>

    </div>
  );
}
