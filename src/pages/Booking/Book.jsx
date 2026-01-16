function Book() {
    return (<div className="min-h-screen bg-neutral-50">

      <section className="py-20 text-center bg-emerald-100">
        <h1 className="text-4xl font-light text-gray-800">
          Book Your Appointment
        </h1>
        <p className="mt-4 text-gray-600 max-w-lg mx-auto">
          Take a moment for yourself. Schedule your spa experience in just a few clicks.
        </p>
      </section>

    
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-medium text-lg">Relaxing Atmosphere</h3>
            <p className="text-gray-600 mt-2">
              Designed to calm your body and mind.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg">Expert Therapists</h3>
            <p className="text-gray-600 mt-2">
              Licensed professionals with years of experience.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg">Easy Online Booking</h3>
            <p className="text-gray-600 mt-2">
              Book securely through our trusted partner.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://gigisoasis.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-xl text-lg hover:bg-emerald-700 transition"
          >
            Book Now
          </a>

          <p className="mt-4 text-sm text-gray-500">
            You’ll be redirected to our secure booking partner.
          </p>
        </div>
      </section>

    </div>);
}

export default Book;