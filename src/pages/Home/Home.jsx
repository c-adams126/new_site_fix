import vid from "../../resource/vidoe/msg.mp4"; // double-check the folder and spelling of 'vidoe'
import Hero from "../../components/HomeComponents/Hero"
import Card from "../../components/reuse/Card";
import Service from "../../components/HomeComponents/Service";
import About from "../../components/reuse/About";
import Carousel from "../../components/reuse/Carousel";
import Location from "../../components/reuse/Location";

function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* Hero Section with Video Background */}
      <Hero />
      {/* card */}
      <Card />
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
