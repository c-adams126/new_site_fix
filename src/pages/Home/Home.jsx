import vid from "../../resource/vidoe/msg.mp4"; // double-check the folder and spelling of 'vidoe'
import Hero from "../../components/HomeComponents/Hero"
import Card from "../../components/reuse/Card";
import Service from "../../components/HomeComponents/Service";
import About from "../../components/reuse/About";
import Carousel from "../../components/reuse/Carousel";
import Location from "../../components/reuse/Location";

function Home() {
  const welcomeText = `
  Step into serenity at Gigi’s Oasis Spa — where luxury meets tranquility.
  Let soothing scents, gentle touch, and calming energy restore your balance.
  Your moment of peace begins here.
  `;

  const companyName = "Gigi’s Oasis Spa";
  const intro = "Welcome";
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* Hero Section with Video Background */}
      <Hero />
      {/* card */}
      <Card text={welcomeText} companyName={companyName} intro={intro} />
      {/* Service */}
      <Service />
      {/* About */}
      <About />
      {/* Carousel */}
      <Carousel />
      {/* Location */}
      <Location />
    </div>
  );
}

export default Home;
