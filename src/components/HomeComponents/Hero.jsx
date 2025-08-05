import vid from "../../resource/vidoe/msg.mp4"; // double-check the folder and spelling of 'vidoe'
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-lg md:text-2xl mb-8">Bringing your ideas to life</p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition">
              Get Started
            </button>
          </div>
        </div>
      </section>
    );
}
export default Hero;