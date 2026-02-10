import About from "@/components/About";
import Affordable from "@/components/Affordable";
import Banner from "@/components/Banner";
import ExpertTeam from "@/components/ExpertTeam";
import Feedback from "@/components/Feedback";
import Navbar from "@/components/Navbar/Navbar";
import OurPricing from "@/components/OurPricing";
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

      {/* OUR PRICING COMPONENT  */}
      <OurPricing/>

      <Feedback/>

    </div>
  );
}
