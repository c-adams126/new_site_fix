import vid from "../../resource/vidoe/msg.mp4"; // double-check the folder and spelling of 'vidoe'
import { Link } from "react-router-dom";
function Hero() {
    return(
        <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={vid}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Relax. Restore. Rejuvenate.</h1>
            <p className="text-lg md:text-2xl mb-8">Experience a tranquil escape designed just for you.</p>
            <Link
            to="/booking" 
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white font-semibold transition"
            >
            Book Your Session
            </Link>
          </div>
        </div>
      </section>
    );
}
export default Hero;