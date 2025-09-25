'use client';

import { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'Corporate' | 'Private' | 'Rentals';
  description: string;
  image: string;
  client: string;
  date: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Tech Conference 2024",
    category: "Corporate",
    description: "A flagship technology conference for 500+ attendees featuring keynote speakers, networking sessions, and product launches.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
    client: "Tech Solutions Sdn Bhd",
    date: "March 2024"
  },
  {
    id: 2,
    title: "Luxury Wedding Reception",
    category: "Private",
    description: "An elegant wedding reception with custom lighting, floral arrangements, and entertainment for 200 guests.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
    client: "Private Client",
    date: "February 2024"
  },
  {
    id: 3,
    title: "Game Machine Festival",
    category: "Rentals",
    description: "Mobile arcade setup with 20+ game machines for a community festival, drawing thousands of visitors.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
    client: "KK Community Center",
    date: "January 2024"
  },
  {
    id: 4,
    title: "Corporate Annual Dinner",
    category: "Corporate",
    description: "Black-tie annual dinner with awards ceremony, entertainment, and gala dinner for 300 executives.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&h=600&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
    client: "Financial Services Group",
    date: "December 2023"
  },
  {
    id: 5,
    title: "Birthday Party Extravaganza",
    category: "Private",
    description: "Children's birthday party with mascot characters, games, and themed decorations for 50 kids.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=700&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
    client: "Private Client",
    date: "November 2023"
  },
  {
    id: 6,
    title: "Product Launch Event",
    category: "Corporate",
    description: "Multi-media product launch with interactive displays, live streaming, and press conference setup.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
    client: "Digital Marketing Agency",
    date: "October 2023"
  },
  {
    id: 7,
    title: "Charity Gala Night",
    category: "Corporate",
    description: "Fundraising gala with auction, entertainment, and dinner service for 250 philanthropists.",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=800&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
    client: "Charity Foundation",
    date: "September 2023"
  },
  {
    id: 8,
    title: "Mascot Rental Service",
    category: "Rentals",
    description: "Custom mascot performances for shopping mall grand opening with photo sessions and meet & greets.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=700&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
    client: "Retail Shopping Center",
    date: "August 2023"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'Corporate' | 'Private' | 'Rentals'>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Discover our successful events and see how we bring extraordinary experiences to life.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Corporate', 'Private', 'Rentals'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as 'All' | 'Corporate' | 'Private' | 'Rentals')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  filter === category
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

      {/* Masonry Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden card-hover cursor-pointer break-inside-avoid animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm font-semibold mb-2">Click to view details</p>
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black text-white">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="text-sm text-gray-500">
                    <strong>Client:</strong> {item.client}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
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

              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-64 md:h-96 object-cover"
              />

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-black text-white">
                    {selectedItem.category}
                  </span>
                  <span className="text-gray-500">{selectedItem.date}</span>
                </div>

                <h2 className="text-3xl font-bold mb-4">{selectedItem.title}</h2>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {selectedItem.description}
                </p>

                <div className="border-t pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Client</h3>
                      <p className="text-gray-600">{selectedItem.client}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Date</h3>
                      <p className="text-gray-600">{selectedItem.date}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    Start Your Project
                  </a>
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
            Ready to Create Your Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you bring your event vision to life with the same dedication and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}