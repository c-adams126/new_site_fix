import AboutHero from "../../components/AboutComponents/AboutHero";
function About() {
    return (
        <div className="min-h-screen font-sans bg-white text-gray-900">
            <AboutHero />
            <h1 className="text-4xl font-bold text-center my-8">About Us</h1>
            <div className="max-w-xl mx-auto">
                <p className="text-lg text-center mx-4">
                    At Gigi’s Oasis, we believe wellness is a journey — and we’re here to walk it with you. Nestled in a calm and welcoming space, our spa is dedicated to creating personalized experiences that restore, rejuvenate, and renew. From soothing massages to revitalizing skincare treatments, every service is designed to support your body, mind, and spirit. Our skilled team brings years of expertise, passion, and care to ensure you feel your absolute best — inside and out. Whether you're here for a moment of relaxation or a full day of pampering, Gigi’s Oasis is your peaceful escape from the everyday.
                </p>
            </div>
        </div>
    )
}
export default About;