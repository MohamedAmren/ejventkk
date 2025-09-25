import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Tips for Planning a Successful Corporate Event",
    slug: "corporate-event-planning-tips",
    excerpt: "Planning a corporate event can be overwhelming, but with the right approach and attention to detail, you can create an unforgettable experience that achieves your business objectives.",
    content: `
      <p>Planning a successful corporate event requires meticulous attention to detail, strategic thinking, and flawless execution. Whether you're organizing a product launch, annual conference, or team-building retreat, these essential tips will help ensure your event achieves its objectives and leaves a lasting positive impression.</p>

      <h2>1. Define Clear Objectives and Goals</h2>
      <p>Before diving into the logistics, establish what you want to achieve with your event. Are you launching a new product? Building team morale? Networking with industry leaders? Clear objectives will guide every decision throughout the planning process.</p>

      <h2>2. Know Your Audience</h2>
      <p>Understanding your attendees is crucial for creating relevant content, choosing the right venue, and planning appropriate catering. Consider their professional level, interests, and what they hope to gain from attending your event.</p>

      <h2>3. Set a Realistic Budget</h2>
      <p>Establish your budget early and stick to it. Allocate funds for venue, catering, entertainment, marketing, and unexpected expenses. Remember to keep 10-15% as a contingency fund for last-minute changes or emergencies.</p>

      <h2>4. Choose the Perfect Venue</h2>
      <p>Your venue sets the tone for your entire event. Consider location, accessibility, parking, capacity, technical capabilities, and overall ambiance. Visit potential venues in person and don't forget to have backup options.</p>

      <h2>5. Plan Your Timeline</h2>
      <p>Create a detailed timeline working backwards from your event date. Include deadlines for booking venues, sending invitations, confirming catering, and setting up equipment. Start planning at least 3-6 months in advance for major corporate events.</p>

      <h2>6. Invest in Quality Audio-Visual Equipment</h2>
      <p>Nothing can ruin a presentation faster than poor sound or unclear visuals. Ensure you have professional-grade microphones, speakers, projectors, and lighting. Always have backup equipment ready.</p>

      <h2>7. Create Engaging Content</h2>
      <p>Whether it's presentations, workshops, or entertainment, ensure your content is engaging, relevant, and adds value for your attendees. Mix different formats to keep energy levels high throughout the event.</p>

      <h2>8. Plan for Networking Opportunities</h2>
      <p>Corporate events are excellent for networking. Create structured opportunities through icebreaker activities, dedicated networking sessions, or informal gathering spaces where attendees can connect naturally.</p>

      <h2>9. Prepare for the Unexpected</h2>
      <p>Always have contingency plans for weather, technical failures, vendor no-shows, or last-minute changes. A good event manager always has Plan B (and C) ready to implement when needed.</p>

      <h2>10. Follow Up After the Event</h2>
      <p>The event doesn't end when the last guest leaves. Follow up with attendees for feedback, share event highlights, connect people who met at your event, and start planning improvements for next time.</p>

      <p>Remember, successful corporate events don't happen by accident. They require careful planning, attention to detail, and often the expertise of professional event management teams. At EJ Event Management & Marketing, we specialize in creating memorable corporate experiences that achieve your business objectives.</p>
    `,
    date: "March 15, 2024",
    author: "EJ Event Team",
    category: "Event Planning",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75"
  }
  // Add more posts as needed
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Image */}
      <div className="relative h-96 bg-black">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="ml-4 text-gray-300">{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="animate-slide-up"
            />
          </div>

          {/* Share Section */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Share this article</h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <Link
                href="/blog"
                className="bg-gray-100 text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mr-6 font-bold text-xl">
                EJ
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                <p className="text-gray-600 mb-4">
                  Our experienced event management team brings years of expertise in creating memorable experiences across Kota Kinabalu and Malaysia.
                </p>
                <Link
                  href="/about"
                  className="text-black font-semibold hover:text-gray-700 transition-colors"
                >
                  Learn more about our team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-3 hover:text-gray-700 transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>

                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-black font-semibold hover:text-gray-700 transition-colors text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Professional Event Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experienced team help you create an exceptional event that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}