import Link from 'next/link';

interface SupplyItem {
  id: number;
  name: string;
  category: 'Furniture' | 'Audio/Visual' | 'Decorations' | 'Catering' | 'Lighting';
  description: string;
  specifications: string[];
  pricing: string;
  image: string;
  popular: boolean;
}

const supplyItems: SupplyItem[] = [
  {
    id: 1,
    name: "Round Banquet Tables",
    category: "Furniture",
    description: "Elegant round tables perfect for formal dinners and wedding receptions. Seats 8-10 guests comfortably.",
    specifications: [
      "Diameter: 60 inches (152cm)",
      "Height: 30 inches (76cm)",
      "Seats 8-10 guests",
      "Premium white tablecloth included",
      "Setup and breakdown service"
    ],
    pricing: "RM 25/table/day",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    popular: true
  },
  {
    id: 2,
    name: "Professional Sound System",
    category: "Audio/Visual",
    description: "Complete PA system with wireless microphones, perfect for speeches, presentations, and background music.",
    specifications: [
      "2x 500W powered speakers",
      "4-channel mixing console",
      "2x wireless handheld microphones",
      "1x wireless lapel microphone",
      "Bluetooth connectivity",
      "Professional setup included"
    ],
    pricing: "RM 200/day",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    popular: true
  },
  {
    id: 3,
    name: "LED Uplighting Package",
    category: "Lighting",
    description: "Transform your venue with professional LED uplighting. Multiple colors available to match your theme.",
    specifications: [
      "12x LED uplight fixtures",
      "Full color spectrum (RGB)",
      "Wireless DMX control",
      "Professional setup",
      "Color coordination service",
      "Timer programming available"
    ],
    pricing: "RM 300/day",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    popular: false
  },
  {
    id: 4,
    name: "Elegant Canopy Tent",
    category: "Decorations",
    description: "Beautiful white canopy tent ideal for outdoor weddings, garden parties, and corporate events.",
    specifications: [
      "Size: 20ft x 30ft (6m x 9m)",
      "Weather-resistant fabric",
      "Professional-grade frame",
      "Sidewall panels available",
      "Flooring options available",
      "Setup and breakdown included"
    ],
    pricing: "RM 400/day",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    popular: true
  },
  {
    id: 5,
    name: "Chafing Dishes Set",
    category: "Catering",
    description: "Professional catering equipment to keep your buffet food warm and presentable throughout your event.",
    specifications: [
      "Set of 6 chafing dishes",
      "Stainless steel construction",
      "Fuel holders and covers included",
      "Full-size food pans",
      "Serving utensils included",
      "Professional presentation"
    ],
    pricing: "RM 80/set/day",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    popular: false
  },
  {
    id: 6,
    name: "Projector & Screen Combo",
    category: "Audio/Visual",
    description: "High-definition projector with large screen for presentations, slideshows, and video displays.",
    specifications: [
      "3000 lumens HD projector",
      "120-inch projection screen",
      "HDMI & wireless connectivity",
      "Laptop connection cables",
      "Remote control included",
      "Professional setup service"
    ],
    pricing: "RM 150/day",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    popular: true
  },
  {
    id: 7,
    name: "Chiavari Chairs",
    category: "Furniture",
    description: "Premium gold chiavari chairs that add elegance to any formal event or wedding ceremony.",
    specifications: [
      "Premium resin construction",
      "Gold metallic finish",
      "Cushioned seat pads",
      "Stackable design",
      "Weight capacity: 300lbs",
      "Delivery and pickup included"
    ],
    pricing: "RM 8/chair/day",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    popular: true
  },
  {
    id: 8,
    name: "Floral Centerpieces",
    category: "Decorations",
    description: "Beautiful fresh floral arrangements that serve as stunning centerpieces for your table settings.",
    specifications: [
      "Fresh seasonal flowers",
      "Professional arrangements",
      "Variety of designs available",
      "Custom color schemes",
      "Delivery and setup included",
      "Vase rentals available"
    ],
    pricing: "RM 45/piece",
    image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    popular: false
  }
];

export default function EventSupply() {
  const categories = ['All', 'Furniture', 'Audio/Visual', 'Decorations', 'Catering', 'Lighting'];

  const packages = [
    {
      name: "Essential Package",
      price: "From RM 800",
      description: "Basic supplies for small events and intimate gatherings",
      items: "Up to 50 guests",
      features: [
        "Tables and chairs setup",
        "Basic sound system",
        "Standard lighting",
        "Delivery and pickup",
        "Basic setup service"
      ]
    },
    {
      name: "Standard Package",
      price: "From RM 1,500",
      description: "Complete setup for medium-scale events and celebrations",
      items: "Up to 100 guests",
      features: [
        "Premium furniture package",
        "Professional A/V equipment",
        "Enhanced lighting setup",
        "Catering equipment included",
        "Full setup and breakdown",
        "Event coordination support"
      ]
    },
    {
      name: "Premium Package",
      price: "From RM 2,800",
      description: "Full-service supply package for large events and corporate functions",
      items: "Up to 200+ guests",
      features: [
        "Complete venue transformation",
        "Premium A/V and lighting",
        "Full catering equipment",
        "Decorative elements included",
        "Professional installation team",
        "On-site support throughout event",
        "Custom theme coordination"
      ]
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Event Supply Rental
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Complete event supplies and equipment rental services. From furniture and lighting to audio-visual equipment, we provide everything you need for a successful event.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Supply Categories</h2>
            <p className="text-xl text-gray-600">Everything you need for a complete event setup</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {['Furniture', 'Audio/Visual', 'Decorations', 'Catering', 'Lighting'].map((category, index) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow-lg p-6 text-center card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {category === 'Furniture' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4a4 4 0 014-4h10a4 4 0 014 4v4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 7H3" />
                    </svg>
                  )}
                  {category === 'Audio/Visual' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-2.828a9 9 0 010-1.414" />
                    </svg>
                  )}
                  {category === 'Decorations' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                  {category === 'Catering' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  )}
                  {category === 'Lighting' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Popular Rental Items</h2>
            <p className="text-xl text-gray-600">Most requested supplies for events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supplyItems.filter(item => item.popular).map((item, index) => (
              <div
                key={item.id}
                className="bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {item.specifications.slice(0, 3).map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center">
                          <svg className="w-3 h-3 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-black">{item.pricing}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full text-center py-2 px-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Items Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Complete Supply Catalog</h2>
            <p className="text-xl text-gray-600">Browse our full range of event supplies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplyItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white text-black px-2 py-1 rounded text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <span className="text-lg font-bold text-black">{item.pricing}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                  <div className="mb-4">
                    <ul className="text-xs text-gray-600 space-y-1">
                      {item.specifications.slice(0, 2).map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center">
                          <svg className="w-3 h-3 text-black mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full text-center py-2 px-4 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Supply Packages</h2>
            <p className="text-xl text-gray-600">Complete packages for different event sizes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg p-8 card-hover ${
                  index === 1 ? 'border-black scale-105' : 'border-gray-200'
                }`}
              >
                {index === 1 && (
                  <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-black mb-2">{pkg.price}</div>
                  <div className="text-sm text-gray-500 mb-4">({pkg.items})</div>
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
                    index === 1
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'border-2 border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Event Supplies?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom quote for your event supply needs. Professional equipment, competitive prices, and full-service setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Request Quote
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