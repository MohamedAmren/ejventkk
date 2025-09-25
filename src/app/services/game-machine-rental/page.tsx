'use client';

import Link from 'next/link';
import { useState } from 'react';

interface GameMachine {
  id: number;
  name: string;
  category: 'Arcade' | 'Pinball' | 'Racing' | 'VR' | 'Carnival';
  price: string;
  dailyRate: string;
  image: string;
  description: string;
  features: string[];
  dimensions: string;
  powerRequired: string;
  playerCapacity: string;
}

const gameMachines: GameMachine[] = [
  {
    id: 1,
    name: "Classic Arcade Cabinet",
    category: "Arcade",
    price: "RM 150",
    dailyRate: "per day",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    description: "Authentic retro arcade cabinet with multiple classic games including Pac-Man, Street Fighter, and more.",
    features: ["60+ Classic Games", "Original Arcade Controls", "LED Lighting", "High-Quality Display"],
    dimensions: "180cm H x 60cm W x 70cm D",
    powerRequired: "220V Standard",
    playerCapacity: "1-2 Players"
  },
  {
    id: 2,
    name: "Pinball Machine - Medieval Madness",
    category: "Pinball",
    price: "RM 200",
    dailyRate: "per day",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    description: "Premium pinball machine with authentic medieval theme, multiple ramps, and exciting gameplay mechanics.",
    features: ["Digital Score Display", "Multi-Ball Action", "Sound Effects", "LED Playfield"],
    dimensions: "140cm H x 55cm W x 130cm D",
    powerRequired: "220V Standard",
    playerCapacity: "1 Player"
  },
  {
    id: 3,
    name: "Racing Simulator Pro",
    category: "Racing",
    price: "RM 300",
    dailyRate: "per day",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    description: "Professional racing simulator with realistic steering wheel, pedals, and immersive racing experience.",
    features: ["Force Feedback Steering", "32\" HD Display", "Premium Racing Seat", "Multiple Racing Games"],
    dimensions: "150cm H x 100cm W x 150cm D",
    powerRequired: "220V Standard",
    playerCapacity: "1 Player"
  },
  {
    id: 4,
    name: "VR Adventure Station",
    category: "VR",
    price: "RM 400",
    dailyRate: "per day",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    description: "Complete VR gaming setup with latest headset technology and wide selection of virtual reality experiences.",
    features: ["Latest VR Headset", "Wireless Controllers", "360° Tracking", "30+ VR Games"],
    dimensions: "200cm H x 200cm W x 200cm D",
    powerRequired: "220V Standard",
    playerCapacity: "1 Player"
  },
  {
    id: 5,
    name: "Basketball Arcade Shooter",
    category: "Carnival",
    price: "RM 180",
    dailyRate: "per day",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    description: "Interactive basketball shooting game with automatic ball return and electronic scoring system.",
    features: ["Electronic Scoring", "Ball Return System", "LED Scoreboard", "Timer Function"],
    dimensions: "250cm H x 120cm W x 300cm D",
    powerRequired: "220V Standard",
    playerCapacity: "1-2 Players"
  },
  {
    id: 6,
    name: "Air Hockey Tournament Table",
    category: "Carnival",
    price: "RM 120",
    dailyRate: "per day",
    image: "https://images.unsplash.com/photo-1578189272448-a5d6d4e81bc2?w=600&h=400&fit=crop&auto=format,enhance&q=75",
    description: "Professional air hockey table with powerful air flow system and electronic scoring display.",
    features: ["Powerful Air System", "Electronic Scoring", "LED Display", "Professional Mallets"],
    dimensions: "80cm H x 200cm W x 100cm D",
    powerRequired: "220V Standard",
    playerCapacity: "2 Players"
  }
];

export default function GameMachineRental() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedMachine, setSelectedMachine] = useState<GameMachine | null>(null);

  const categories = ['All', 'Arcade', 'Pinball', 'Racing', 'VR', 'Carnival'];

  const filteredMachines = selectedCategory === 'All'
    ? gameMachines
    : gameMachines.filter(machine => machine.category === selectedCategory);

  const openModal = (machine: GameMachine) => {
    setSelectedMachine(machine);
  };

  const closeModal = () => {
    setSelectedMachine(null);
  };

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V16a1.5 1.5 0 01-1.5 1.5H9V10zm0 0V8a2 2 0 012-2h2a2 2 0 012 2v2" />
              </svg>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Game Machine Rental
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              Professional game machine rentals for events, parties, and entertainment venues. All equipment includes delivery, setup, and on-site support.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-black border-2 border-gray-300 hover:border-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Game Machines Grid - E-commerce Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'All' ? 'All Game Machines' : `${selectedCategory} Machines`}
            </h2>
            <span className="text-gray-600">
              {filteredMachines.length} {filteredMachines.length === 1 ? 'machine' : 'machines'} available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine) => (
              <div
                key={machine.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
              >
                <div className="relative">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {machine.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {machine.playerCapacity}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{machine.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{machine.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-black">{machine.price}</span>
                      <span className="text-gray-500 text-sm ml-1">{machine.dailyRate}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Dimensions</div>
                      <div className="text-sm font-medium">{machine.dimensions.split(' ')[0]} H</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {machine.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <svg className="w-3 h-3 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal(machine)}
                      className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
                    >
                      View Details
                    </button>
                    <Link
                      href="/contact"
                      className="flex-1 border-2 border-black text-black py-2 px-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-sm text-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Rental Information</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our rental service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Flexible Rental Periods</h3>
              <p className="text-gray-600 mb-4">Daily, weekly, or monthly rental options available</p>
              <ul className="text-sm text-gray-500">
                <li>• Minimum 1 day rental</li>
                <li>• Weekly discounts available</li>
                <li>• Monthly rates for long-term events</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Full Service Included</h3>
              <p className="text-gray-600 mb-4">Complete service from delivery to pickup</p>
              <ul className="text-sm text-gray-500">
                <li>• Free delivery & pickup</li>
                <li>• Professional setup</li>
                <li>• On-site technical support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600 mb-4">Well-maintained, clean, and fully functional equipment</p>
              <ul className="text-sm text-gray-500">
                <li>• Regular maintenance checks</li>
                <li>• Clean and sanitized</li>
                <li>• Backup units available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Detail Modal */}
      {selectedMachine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 animate-fade-in">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={selectedMachine.image}
                    alt={selectedMachine.name}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>

                <div className="md:w-1/2 p-8">
                  <div className="mb-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedMachine.category}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{selectedMachine.name}</h2>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-black">{selectedMachine.price}</span>
                    <span className="text-gray-500 ml-2">{selectedMachine.dailyRate}</span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedMachine.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {selectedMachine.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 pt-4 border-t">
                      <div>
                        <strong>Dimensions:</strong> {selectedMachine.dimensions}
                      </div>
                      <div>
                        <strong>Power Required:</strong> {selectedMachine.powerRequired}
                      </div>
                      <div>
                        <strong>Player Capacity:</strong> {selectedMachine.playerCapacity}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                    >
                      Book This Machine
                    </Link>
                    <a
                      href="tel:012-6258405"
                      className="flex-1 border-2 border-black text-black py-3 px-6 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors text-center"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Add Fun to Your Event?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your game machine rental needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get Custom Quote
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