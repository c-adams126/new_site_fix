import pic1 from "../../resource/images/head.jpg";
import pic2 from "../../resource/images/woman.jpg";
import pic3 from "../../resource/images/essential-oils.jpg";
import pic4 from "../../resource/images/womanFace.jpg";

function Service() {
  const services = [
    {
      title: "Swedish Massage",
      description: "Relaxing full-body massage to reduce tension and improve circulation.",
      image: pic1
    },
    {
      title: "Deep Tissue Massage",
      description: "Targets deeper layers of muscles to relieve chronic pain and stiffness.",
      image: pic2
    },
    {
      title: "Hot Stone Therapy",
      description: "Heated stones are used to melt away stress and tension.",
      image: pic3
    },
    {
      title: "Aromatherapy",
      description: "Combines massage with essential oils to enhance relaxation.",
      image: pic4
    }
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-56 md:h-60 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-opacity duration-300"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-md">{service.title}</h3>
              <p className="text-md md:text-lg font-medium drop-shadow-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
