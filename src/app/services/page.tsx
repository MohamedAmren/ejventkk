export default function Services() {
  const services = [
    {
      title: 'Event Management',
      description: 'Complete end-to-end event planning and coordination services for corporate, private, and community events. From concept to execution, we handle every detail.',
      features: [
        'Event planning & coordination',
        'Venue selection & management',
        'Timeline & logistics planning',
        'On-site event coordination',
        'Post-event evaluation'
      ],
      link: '/services/event-management',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Game Machine Rental',
      description: 'High-quality arcade and game machines perfect for events, parties, and entertainment venues. Fun for all ages with professional maintenance included.',
      features: [
        'Arcade game machines',
        'Pinball machines',
        'Virtual reality setups',
        'Professional maintenance',
        'Delivery & setup included'
      ],
      link: '/services/game-machine-rental',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V16a1.5 1.5 0 01-1.5 1.5H9V10zm0 0V8a2 2 0 012-2h2a2 2 0 012 2v2" />
        </svg>
      )
    },
    {
      title: 'Mascot Rental',
      description: 'Professional mascot characters and costume rentals to add excitement and entertainment to your events. Perfect for brand activations and children\'s parties.',
      features: [
        'Professional costume mascots',
        'Trained performers available',
        'Custom character options',
        'Brand mascot services',
        'Interactive entertainment'
      ],
      link: '/services/mascot-rental',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V16a1.5 1.5 0 01-1.5 1.5H9V10zm0 0V8a2 2 0 012-2h2a2 2 0 012 2v2" />
        </svg>
      )
    },
    {
      title: 'Event Supply',
      description: 'Comprehensive event equipment and supply rental services. From basic setups to elaborate productions, we have everything you need.',
      features: [
        'Audio & visual equipment',
        'Lighting systems',
        'Stage & backdrop setups',
        'Tables, chairs & tenting',
        'Catering equipment'
      ],
      link: '/services/event-supply',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional event solutions tailored to your needs. We provide comprehensive services to make your event memorable and successful.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-black transition-all duration-300 card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-black text-white p-4 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">What we offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-black mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={service.link}
                    className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We can combine our services or create custom packages tailored to your specific event requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </a>
            <a
              href="tel:012-6258405"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Call Now: 012-6258405
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}