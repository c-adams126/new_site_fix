function Service() {

      const services = [
    { title: "Swedish Massage", description: "Relaxing full-body massage to reduce tension and improve circulation." },
    { title: "Deep Tissue Massage", description: "Targets deeper layers of muscles to relieve chronic pain and stiffness." },
    { title: "Hot Stone Therapy", description: "Heated stones are used to melt away stress and tension." },
    { title: "Aromatherapy", description: "Combines massage with essential oils to enhance relaxation." },
  ];



    return(
    <div className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    );
}
export default Service;