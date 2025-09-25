import Link from 'next/link';

export default function EventManagement() {
  const packages = [
    {
      name: "Essential",
      price: "From RM 2,500",
      description: "Perfect for small corporate events and private gatherings",
      features: [
        "Event planning consultation",
        "Venue coordination",
        "Basic timeline management",
        "On-site coordination (4 hours)",
        "Email support",
        "Post-event summary"
      ]
    },
    {
      name: "Professional",
      price: "From RM 5,000",
      description: "Ideal for medium-scale corporate events and celebrations",
      features: [
        "Comprehensive event planning",
        "Venue selection assistance",
        "Vendor coordination",
        "Detailed timeline & logistics",
        "On-site coordination (8 hours)",
        "Phone & email support",
        "Post-event analysis report"
      ]
    },
    {
      name: "Premium",
      price: "From RM 10,000",
      description: "Full-service management for large-scale events",
      features: [
        "End-to-end event management",
        "Multiple venue options",
        "Full vendor management",
        "Advanced logistics planning",
        "Full-day on-site coordination",
        "24/7 support hotline",
        "Detailed analytics & reporting"
      ]
    }
  ];

  const eventTypes = [
    {
      title: "Corporate Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format,enhance&q=75",
      description: "Professional corporate events, conferences, and business gatherings"
    },
    {
      title: "Private Celebrations",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop&auto=format,enhance&q=75",
      description: "Weddings, birthdays, anniversaries, and personal milestones"
    },
    {
      title: "Community Events",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop&auto=format,enhance&q=75",
      description: "Charity events, community gatherings, and public celebrations"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/services"
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
          </div>

          <div className="text-center">
            <div className="bg-white text-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Event Management Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Complete end-to-end event planning and coordination services for corporate, private, and community events. From concept to execution, we handle every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Types of Events We Manage</h2>
            <p className="text-xl text-gray-600">Professional event management across all categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">Choose the package that best fits your event needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white border-2 rounded-lg p-8 card-hover ${index === 1 ? 'border-black scale-105' : 'border-gray-200'}`}>
                {index === 1 && (
                  <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-black mb-4">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    index === 1 ? 'bg-black text-white hover:bg-gray-800' : 'border-2 border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we bring your event vision to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your vision, requirements, and budget"
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed planning including timeline, venue selection, and vendor coordination"
              },
              {
                step: "03",
                title: "Coordination",
                description: "Managing all aspects leading up to the event with regular updates"
              },
              {
                step: "04",
                title: "Execution",
                description: "On-site coordination ensuring everything runs smoothly on event day"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experienced team handle every detail of your event planning and execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <a
              href="tel:012-6258405"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Call: 012-6258405
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}