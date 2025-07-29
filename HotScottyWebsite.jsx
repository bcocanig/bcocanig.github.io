import React, { useState, useEffect } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "story", "gallery", "nearby", "amenities", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  // Images
  const galleryImages = [
    "https://placehold.co/800x600/e0d8c8/333333?text=Master+Bedroom",
    "https://placehold.co/600x800/d1c4a8/333333?text=Pool+View",
    "https://placehold.co/800x600/e0d8c8/333333?text=Living+Room",
    "https://placehold.co/600x800/d1c4a8/333333?text=Kitchen",
    "https://placehold.co/800x600/e0d8c8/333333?text=Putting+Green",
    "https://placehold.co/800x600/d1c4a8/333333?text=Fire+Pit",
    "https://placehold.co/600x800/e0d8c8/333333?text=Guest+Room",
    "https://placehold.co/800x600/d1c4a8/333333?text=Outdoor+Dining",
    "https://placehold.co/600x800/e0d8c8/333333?text=Pool+Night",
  ];

  const storyImages = [
    "https://placehold.co/1200x800/e0d8c8/333333?text=Desert+Sunset",
    "https://placehold.co/1200x800/d1c4a8/333333?text=Luxury+Interior",
    "https://placehold.co/1200x800/e0d8c8/333333?text=Gathering+Space",
  ];

  const amenities = [
    { name: "Heated Pool", icon: "🏊‍♂️" },
    { name: "Putting Green", icon: "⛳" },
    { name: "Fire Pit & BBQ", icon: "🔥" },
    { name: "High-Speed Wi-Fi", icon: "📶" },
    { name: "Fully Equipped Kitchen", icon: "🍳" },
    { name: "Free Parking", icon: "🚗" },
    { name: "Climate Control", icon: "🌡️" },
    { name: "Luxury Linens", icon: "🛏️" },
  ];

  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in is at 4:00 PM and check-out is at 10:00 AM. Early check-in and late check-out may be available upon request.",
    },
    {
      question: "Are pets allowed?",
      answer: "We welcome well-behaved pets with prior approval. A non-refundable pet fee of $150 applies for stays under 7 nights.",
    },
    {
      question: "Is the pool heated?",
      answer: "Yes, the pool is heated year-round to a comfortable 82°F (28°C) at no additional charge.",
    },
    {
      question: "How close is the property to Old Town Scottsdale?",
      answer: "The property is just 1.5 miles from Old Town Scottsdale, approximately a 5-minute drive or 20-minute walk.",
    },
    {
      question: "What is included in the kitchen?",
      answer: "The kitchen is fully equipped with a full-size refrigerator, oven, microwave, coffee maker, blender, cookware, bakeware, and all necessary utensils and dishware.",
    },
    {
      question: "Is there parking available?",
      answer: "Yes, the property includes two dedicated parking spaces in the private driveway. Additional street parking is available if needed.",
    },
    {
      question: "What amenities are provided for guests?",
      answer: "We provide luxury bath towels, beach towels, shampoo, conditioner, body wash, hand soap, coffee, tea, and basic kitchen essentials.",
    },
    {
      question: "Can I book directly and save?",
      answer: "Yes, booking directly with us ensures you receive the best available rates and avoids third-party service fees. Contact us for direct booking options.",
    },
  ];

  const attractions = [
    {
      title: "Pizza Rock",
      description: "Award-winning New York-style pizza with creative toppings and a vibrant atmosphere.",
      image: "https://placehold.co/400x300/d1c4a8/333333?text=Pizza+Restaurant",
      address: "7155 E Camelback Rd, Scottsdale, AZ 85251",
      mapLink: "https://www.google.com/maps/dir/?api=1&destination=7155+E+Camelback+Rd,+Scottsdale,+AZ+85251"
    },
    {
      title: "Pinnacle Peak Trail",
      description: "Challenging 3.1-mile hike with panoramic views of the Sonoran Desert and McDowell Mountains.",
      image: "https://placehold.co/400x300/e0d8c8/333333?text=Hiking+Trail",
      address: "38201 N Pinnacle Peak Rd, Scottsdale, AZ 85266",
      mapLink: "https://www.google.com/maps/dir/?api=1&destination=38201+N+Pinnacle+Peak+Rd,+Scottsdale,+AZ+85266"
    },
    {
      title: "Scottsdale Fashion Square",
      description: "Luxury shopping destination with over 200 stores including Nordstrom, Neiman Marcus, and Apple.",
      image: "https://placehold.co/400x300/d1c4a8/333333?text=Shopping+Mall",
      address: "7014 E Camelback Rd, Scottsdale, AZ 85251",
      mapLink: "https://www.google.com/maps/dir/?api=1&destination=7014+E+Camelback+Rd,+Scottsdale,+AZ+85251"
    },
    {
      title: "Old Town Artisans",
      description: "Browse unique Southwestern art, jewelry, and crafts in the heart of historic Old Town.",
      image: "https://placehold.co/400x300/e0d8c8/333333?text=Art+Gallery",
      address: "4225 N Marshall Way, Scottsdale, AZ 85251",
      mapLink: "https://www.google.com/maps/dir/?api=1&destination=4225+N+Marshall+Way,+Scottsdale,+AZ+85251"
    },
    {
      title: "Blue Adobe Saloon",
      description: "Authentic Southwestern cuisine with a stunning patio overlooking Camelback Mountain.",
      image: "https://placehold.co/400x300/d1c4a8/333333?text=Southwest+Food",
      address: "7135 E Camelback Rd, Scottsdale, AZ 85251",
      mapLink: "https://www.google.com/maps/dir/?api=1&destination=7135+E+Camelback+Rd,+Scottsdale,+AZ+85251"
    },
    {
      title: "Talking Stick Resort Casino",
      description: "Entertainment destination with gaming, concerts, and multiple dining options.",
      image: "https://placehold.co/400x300/e0d8c8/333333?text=Casino",
      address: "9800 E Indian Bend Rd, Scottsdale, AZ 85256",
      mapLink: "https://www.google.com/maps/dir/?api=1&destination=9800+E+Indian+Bend+Rd,+Scottsdale,+AZ+85256"
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-serif font-bold text-gray-900">Hot Scotty</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Story", "Gallery", "Nearby", "Amenities", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? "text-teal-600"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              {["Home", "Story", "Gallery", "Nearby", "Amenities", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-teal-600 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://placehold.co/1920x1080/e0d8c8/333333?text=Scottsdale+Desert+Retreat')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-on-scroll opacity-0">
            Your Private Desert Escape in Scottsdale
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-on-scroll opacity-0" style={{ animationDelay: "0.3s" }}>
              Experience luxury living in the heart of Scottsdale with a free heated pool, 
              private putting green, and prime location near Old Town's vibrant scene.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 animate-on-scroll opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            Book Direct & Save
          </button>
        </div>
      </section>

      {/* Property Story */}
      <section id="story" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-gray-900 animate-on-scroll opacity-0">
            The Scotty Experience
          </h2>

          {/* Outdoor Living */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="animate-on-scroll opacity-0">
              <img
                src={storyImages[0]}
                alt="Outdoor living space"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl font-serif font-bold mb-6 text-gray-900">Outdoor Living</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Step into your private desert oasis, where the heated pool glistens under the Arizona sun. 
                Lounge on plush sunbeds, dine al fresco on the spacious patio, or perfect your short game 
                on the private putting green. Every outdoor space is designed for relaxation and entertainment.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                As the sun sets over the McDowell Mountains, gather around the custom fire pit with 
                friends and family, creating memories that will last long after your stay.
              </p>
            </div>
          </div>

          {/* Luxury Interiors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="lg:order-2 animate-on-scroll opacity-0">
              <img
                src={storyImages[1]}
                alt="Luxury interior"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl font-serif font-bold mb-6 text-gray-900">Luxury Interiors</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Inside, experience refined desert elegance with custom furnishings, 
                natural stone accents, and carefully curated artwork. The open-concept 
                living space flows seamlessly to the gourmet kitchen, equipped with 
                premium appliances and everything needed to prepare meals for your group.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Each bedroom features luxury linens, blackout curtains, and en-suite 
                bathrooms with premium amenities, ensuring restful nights and rejuvenating mornings.
              </p>
            </div>
          </div>

          {/* Gather & Rest */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <img
                src={storyImages[2]}
                alt="Gathering space"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl font-serif font-bold mb-6 text-gray-900">Gather & Rest</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Whether hosting an intimate dinner for six or a larger gathering with friends, 
                the property's flexible spaces accommodate your needs. The outdoor dining area 
                seats eight, while the indoor living room provides comfortable seating for everyone.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                When it's time to retreat, each of the three bedrooms offers a sanctuary of 
                comfort and privacy. The primary suite features a king bed, private patio access, 
                and a spa-like bathroom with dual vanities and a walk-in shower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-gray-900 animate-on-scroll opacity-0">
            Property Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll opacity-0">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section id="nearby" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-gray-900 animate-on-scroll opacity-0">
            Explore Scottsdale
          </h2>
          
          <div className="relative mb-16 h-96 rounded-2xl overflow-hidden animate-on-scroll opacity-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://placehold.co/1200x600/d1c4a8/333333?text=Scottsdale+Cityscape')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative h-full flex items-center justify-center text-center text-white px-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Prime Location</h3>
                <p className="text-xl max-w-2xl mx-auto">
                  Just minutes from Old Town Scottsdale, world-class golf courses, 
                  fine dining, and luxury shopping. The perfect base for exploring 
                  the beauty of the Sonoran Desert.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-3 text-gray-900">{attraction.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{attraction.description}</p>
                  <a
                    href={attraction.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden animate-on-scroll opacity-0">
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-center mb-8 text-gray-900">Plan Your Journey</h3>
              <p className="text-gray-700 text-center mb-8">
                Click any "Get Directions" button above to open Google Maps and plan your route from our property 
                at XXX 1234 AZ to any of these popular destinations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">Dining Recommendations</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>
                        <strong>Pizza Rock:</strong> Famous for their "Porky's Revenge" pizza with house-made pork belly
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>
                        <strong>Blue Adobe Saloon:</strong> Try the green chile cheeseburger and margaritas on the patio
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>
                        <strong>Dominick's Steakhouse:</strong> Upscale Italian cuisine with an extensive wine list
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">Outdoor Activities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>
                        <strong>Pinnacle Peak:</strong> 3.1-mile round trip with panoramic desert views
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>
                        <strong>McDowell Sonoran Preserve:</strong> Over 60 miles of trails for hiking and biking
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>
                        <strong>Golf:</strong> World-class courses like TPC Scottsdale (home of the Waste Management Open)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities and FAQ */}
      <section id="amenities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-gray-900 animate-on-scroll opacity-0">
            Amenities & Information
          </h2>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 animate-on-scroll opacity-0">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="font-medium text-gray-900">{amenity.name}</h3>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto animate-on-scroll opacity-0">
            <h3 className="text-3xl font-serif font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Book Direct */}
      <section id="contact" className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://placehold.co/1920x1080/e0d8c8/333333?text=Night+View+of+Property')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Book Direct for the Best Rates
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Save on booking fees and enjoy personalized service when you book directly with us.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-xl">XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xl">info@hottyscotty.com</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-xl">Scottsdale, AZ</span>
              </div>
            </div>
            <p className="text-white/80 text-lg">
              Booking directly saves you up to 15% compared to third-party platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Hot Scotty</h3>
            <p className="text-gray-400 mb-6">
              Your private desert escape in the heart of Scottsdale
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>© 2024 Hot Scotty. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-on-scroll opacity-0">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-gray-300"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
        }
        .font-serif {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default App;
