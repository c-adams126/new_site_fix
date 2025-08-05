import React from 'react';

function Locations() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-12">
          Visit Gigi’s Oasis
        </h2>

        {/* Location 1: Riverview */}
        <div className="bg-slate-100 rounded-3xl shadow-xl p-6 mb-10 hover:shadow-2xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-slate-700 mb-4 text-center">Riverview Location</h3>
          <div className="w-full max-w-2xl mx-auto">
            <iframe
              title="Riverview Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.608364429662!2d-82.316848!3d27.791038999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d6ba37875379%3A0x55fdcbb7418a1bf9!2sGigi&#39;s%20Oasis%20Massage%20%26%20Facials!5e0!3m2!1sen!2sus!4v1754428060107!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="rounded-2xl border border-slate-200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Location 2: Sun City */}
        <div className="bg-slate-100 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-slate-700 mb-4 text-center">Sun City Location</h3>
          <div className="w-full max-w-2xl mx-auto">
            <iframe
              title="Sun City Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56494.403057629475!2d-82.37622952412762!3d27.751224346028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c329c39563e361%3A0x832b75778c63ca1a!2sGigi&#39;s%20Oasis%20Massage%20%26%20Wellness!5e0!3m2!1sen!2sus!4v1754428160371!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="rounded-2xl border border-slate-200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
