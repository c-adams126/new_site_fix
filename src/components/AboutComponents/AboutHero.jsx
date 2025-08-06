import shop from '../../resource/images/skincare.jpg';

function AboutHero() {
    return (
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-slate-50 mt-6">
            {/* Background Image */}
            <img 
                src={shop} 
                alt="About Hero" 
                className="w-full h-[500px] object-cover brightness-75"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="text-white max-w-2xl animate-slide-in-left">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
                        Where Beauty Meets Wellness
                    </h2>
                    <p className="text-lg md:text-2xl mb-6 drop-shadow-sm">
                        Our personalized care brings out your natural glow, inside and out.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutHero;
