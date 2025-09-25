import Link from 'next/link';

interface MascotCharacter {
  id: number;
  name: string;
  category: 'Animals' | 'Cartoon' | 'Superhero' | 'Seasonal';
  description: string;
  features: string[];
  pricing: {
    halfDay: string;
    fullDay: string;
    weekend: string;
  };
  image: string;
  availability: boolean;
}

const mascotCharacters: MascotCharacter[] = [
  {
    id: 1,
    name: "Friendly Lion",
    category: "Animals",
    description: "Majestic lion mascot perfect for corporate events, school functions, and community celebrations.",
    features: [
      "High-quality professional costume",
      "Trained performer included",
      "Interactive entertainment",
      "Photo opportunities",
      "Age-appropriate interactions"
    ],
    pricing: {
      halfDay: "RM 300",
      fullDay: "RM 500",
      weekend: "RM 650"
    },
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    availability: true
  },
  {
    id: 2,
    name: "Happy Bear",
    category: "Animals",
    description: "Cuddly bear character that brings smiles and joy to children's events and family gatherings.",
    features: [
      "Soft, child-friendly materials",
      "Experienced entertainer",
      "Games and activities",
      "Hugs and high-fives",
      "Clean and sanitized costume"
    ],
    pricing: {
      halfDay: "RM 280",
      fullDay: "RM 450",
      weekend: "RM 600"
    },
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    availability: true
  },
  {
    id: 3,
    name: "Cartoon Hero",
    category: "Cartoon",
    description: "Popular cartoon character that kids absolutely love, perfect for birthday parties and school events.",
    features: [
      "Licensed character costume",
      "Professional performer",
      "Character voice acting",
      "Themed activities",
      "Meet and greet sessions"
    ],
    pricing: {
      halfDay: "RM 400",
      fullDay: "RM 650",
      weekend: "RM 800"
    },
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    availability: true
  },
  {
    id: 4,
    name: "Super Hero",
    category: "Superhero",
    description: "Dynamic superhero character that inspires and entertains children at themed parties and events.",
    features: [
      "Authentic superhero costume",
      "Action-packed entertainment",
      "Superhero training activities",
      "Photo sessions with cape",
      "Motivational interactions"
    ],
    pricing: {
      halfDay: "RM 450",
      fullDay: "RM 700",
      weekend: "RM 900"
    },
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    availability: false
  },
  {
    id: 5,
    name: "Christmas Santa",
    category: "Seasonal",
    description: "Ho-ho-ho! Traditional Santa Claus perfect for Christmas events, corporate parties, and holiday celebrations.",
    features: [
      "Authentic Santa costume",
      "Christmas entertainment",
      "Gift distribution assistance",
      "Holiday storytelling",
      "Christmas carol singing"
    ],
    pricing: {
      halfDay: "RM 350",
      fullDay: "RM 550",
      weekend: "RM 700"
    },
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    availability: true
  },
  {
    id: 6,
    name: "Easter Bunny",
    category: "Seasonal",
    description: "Adorable Easter bunny bringing springtime joy and Easter egg hunt excitement to your celebrations.",
    features: [
      "Fluffy Easter bunny costume",
      "Easter egg hunt coordination",
      "Spring-themed activities",
      "Basket photo opportunities",
      "Family-friendly entertainment"
    ],
    pricing: {
      halfDay: "RM 320",
      fullDay: "RM 520",
      weekend: "RM 650"
    },
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    availability: true
  }
];

export default function MascotRental() {
  const packages = [
    {
      name: "Basic Package",
      price: "From RM 280",
      description: "Perfect for small gatherings and birthday parties",
      duration: "2-3 hours",
      features: [
        "1 mascot character",
        "Professional performer",
        "Basic entertainment activities",
        "Photo opportunities",
        "Meet and greet sessions"
      ]
    },
    {
      name: "Standard Package",
      price: "From RM 450",
      description: "Ideal for school events and community functions",
      duration: "4-6 hours",
      features: [
        "1 mascot character",
        "Experienced performer",
        "Interactive games and activities",
        "Themed entertainment program",
        "Photo sessions with props",
        "Small gift distribution"
      ]
    },
    {
      name: "Premium Package",
      price: "From RM 650",
      description: "Complete entertainment for large events and corporate functions",
      duration: "Full day (8 hours)",
      features: [
        "Choice of 2 mascot characters",
        "Professional entertainment team",
        "Full activity program",
        "Themed decorations",
        "Professional photography",
        "Custom performance script",
        "Event coordination support"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5v1.5M9 10h-3.5A1.5 1.5 0 004 11.5v1.5M12 5L8 21l4-7 4 7-4-16z" />
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Mascot Rental Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Bring joy and excitement to your events with our professional mascot characters. From birthday parties to corporate events, our trained performers create unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Characters Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mascot Characters</h2>
            <p className="text-xl text-gray-600">Choose from our collection of beloved characters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mascotCharacters.map((character, index) => (
              <div
                key={character.id}
                className={`bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden card-hover animate-scale-in ${
                  !character.availability ? 'opacity-75' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {character.category}
                    </span>
                  </div>
                  {!character.availability && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Booked
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{character.name}</h3>
                  <p className="text-gray-600 mb-4">{character.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {character.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <svg className="w-4 h-4 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Pricing:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Half Day:</span>
                        <span className="font-semibold">{character.pricing.halfDay}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Full Day:</span>
                        <span className="font-semibold">{character.pricing.fullDay}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekend:</span>
                        <span className="font-semibold">{character.pricing.weekend}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      character.availability
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-400 text-white cursor-not-allowed'
                    }`}
                  >
                    {character.availability ? 'Book Now' : 'Currently Unavailable'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600">Choose the package that best fits your event needs</p>
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
                  <div className="text-sm text-gray-500 mb-4">({pkg.duration})</div>
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

      {/* Why Choose Our Mascots */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our Mascot Services</h2>
            <p className="text-xl text-gray-600">Professional entertainment that creates lasting memories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Professional Performers",
                description: "Trained entertainers who know how to engage audiences of all ages"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "High-Quality Costumes",
                description: "Clean, sanitized, and professionally maintained mascot costumes"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Flexible Timing",
                description: "Available for events from 2 hours to full-day celebrations"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                ),
                title: "Photo Opportunities",
                description: "Create memorable moments with professional photo sessions"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Bring Joy to Your Event?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book our professional mascot characters and create unforgettable memories for your guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Book a Character
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