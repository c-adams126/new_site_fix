import vid from "../../resource/vidoe/msg.mp4"; // double-check the folder and spelling of 'vidoe'
import Hero from "../../components/HomeComponents/Hero"
import Card from "../../components/reuse/Card";
import Service from "../../components/HomeComponents/Service";
import About from "../../components/reuse/About";
import Carousel from "../../components/reuse/Carousel";

function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="p-4 shadow-md bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MySite</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

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
    </div>
  );
}

export default Home;
