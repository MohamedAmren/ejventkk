import Link from 'next/link';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=1080&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=80"
            alt="Elegant event venue with professional lighting and setup"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Creating Memorable Events
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                That Last Forever
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed animate-slide-up font-light">
              We deliver unforgettable experiences through professional event planning and execution in Kota Kinabalu.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              <Link
                href="/contact"
                className="group bg-white text-black px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                <span className="flex items-center">
                  Get in Touch
                  <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="group border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m0 0l4 4m-4-4l4-4" />
                  </svg>
                  View Our Work
                </span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-white fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0 Rating</span>
              </div>
              <div className="text-sm font-semibold">200+ Events Delivered</div>
              <div className="text-sm font-semibold">100% Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional solutions for all your event needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border-2 border-gray-200 hover:border-black transition-all duration-300 card-hover">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Management</h3>
              <p className="text-gray-600">Complete event planning and coordination services</p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-gray-200 hover:border-black transition-all duration-300 card-hover">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V16a1.5 1.5 0 01-1.5 1.5H9V10zm0 0V8a2 2 0 012-2h2a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Game Machine Rental</h3>
              <p className="text-gray-600">Fun and engaging game machines for all ages</p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-gray-200 hover:border-black transition-all duration-300 card-hover">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V16a1.5 1.5 0 01-1.5 1.5H9V10zm0 0V8a2 2 0 012-2h2a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mascot Rental</h3>
              <p className="text-gray-600">Entertaining mascot characters for your events</p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-gray-200 hover:border-black transition-all duration-300 card-hover">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Supply</h3>
              <p className="text-gray-600">Quality equipment and supplies for any event</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Value Proposition */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in">
              Why Choose EJ Event Management?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
              We bring together professionalism, creativity, and reliability to make every event exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white text-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional & Reliable</h3>
              <p className="text-gray-300 leading-relaxed">
                Years of experience delivering flawless events with meticulous attention to detail and unwavering professionalism.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white text-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Creative & Engaging Concepts</h3>
              <p className="text-gray-300 leading-relaxed">
                Innovative ideas and creative solutions that captivate audiences and create memorable experiences that last forever.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white text-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">On-Time Delivery, Every Time</h3>
              <p className="text-gray-300 leading-relaxed">
                Rigorous planning and execution ensures your event starts on schedule and runs seamlessly from beginning to end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects / Portfolio Preview */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Take a look at some of our recent successful events and see the quality we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Tech Conference 2024",
                category: "Corporate",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
                description: "500+ attendees flagship technology conference"
              },
              {
                title: "Luxury Wedding Reception",
                category: "Private",
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
                description: "Elegant reception for 200 guests"
              },
              {
                title: "Corporate Annual Dinner",
                category: "Corporate",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
                description: "Black-tie dinner with 300 executives"
              },
              {
                title: "Charity Gala Night",
                category: "Corporate",
                image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75",
                description: "Fundraising gala for 250 philanthropists"
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer animate-scale-in card-hover`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                      <p className="text-sm mb-3">{project.description}</p>
                      <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              See All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics / Quick Facts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Numbers that speak to our experience and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-black text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-black mb-2">200+</div>
              <div className="text-gray-600 font-semibold">Events Managed</div>
              <div className="text-sm text-gray-500 mt-1">Successfully completed</div>
            </div>

            <div className="text-center group animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-black text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-black mb-2">100+</div>
              <div className="text-gray-600 font-semibold">Happy Clients</div>
              <div className="text-sm text-gray-500 mt-1">Satisfied customers</div>
            </div>

            <div className="text-center group animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-black text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-black mb-2">10+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
              <div className="text-sm text-gray-500 mt-1">In event management</div>
            </div>

            <div className="text-center group animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-black text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Corporate Partners</div>
              <div className="text-sm text-gray-500 mt-1">Trusted relationships</div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-black text-white py-6 px-12 rounded-lg inline-block">
              <p className="text-lg font-semibold">
                <strong>99.5%</strong> Client Satisfaction Rate • <strong>100%</strong> On-Time Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Enhanced CTA Banner */}
      <section className="bg-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold animate-bounce-in">
                Ready to Get Started?
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
              Ready to make your next event
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                unforgettable?
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Transform your vision into reality with professional event management that delivers exceptional experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              <Link
                href="/contact"
                className="group bg-white text-black px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                <span className="flex items-center">
                  Contact Us Today
                  <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <a
                href="tel:012-6258405"
                className="group border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: 012-6258405
                </span>
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Guaranteed Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}