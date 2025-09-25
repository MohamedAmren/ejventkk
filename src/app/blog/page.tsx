import Link from 'next/link';

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
    content: "Full content here...",
    date: "March 15, 2024",
    author: "EJ Event Team",
    category: "Event Planning",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Game Machine Rentals in Malaysia",
    slug: "game-machine-rental-guide-malaysia",
    excerpt: "From classic arcade games to modern VR experiences, discover how game machine rentals can elevate your events and create lasting memories for guests of all ages.",
    content: "Full content here...",
    date: "March 10, 2024",
    author: "EJ Event Team",
    category: "Rentals",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75"
  },
  {
    id: 3,
    title: "Creating Magical Moments with Professional Mascot Services",
    slug: "professional-mascot-services",
    excerpt: "Learn how professional mascot characters can transform your events, engage audiences, and create memorable experiences that guests will talk about long after the event ends.",
    content: "Full content here...",
    date: "March 5, 2024",
    author: "EJ Event Team",
    category: "Entertainment",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75"
  },
  {
    id: 4,
    title: "Event Trends 2024: What's Hot in Kota Kinabalu",
    slug: "event-trends-2024-kota-kinabalu",
    excerpt: "Stay ahead of the curve with the latest event trends shaping the industry in Kota Kinabalu. From sustainable practices to tech integration, discover what's making events memorable.",
    content: "Full content here...",
    date: "February 28, 2024",
    author: "EJ Event Team",
    category: "Trends",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75"
  },
  {
    id: 5,
    title: "Budget-Friendly Event Planning: Maximum Impact, Minimum Cost",
    slug: "budget-friendly-event-planning",
    excerpt: "Discover proven strategies to create spectacular events without breaking the bank. Learn how to allocate your budget effectively and get the most value from every ringgit spent.",
    content: "Full content here...",
    date: "February 20, 2024",
    author: "EJ Event Team",
    category: "Budget Tips",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75"
  },
  {
    id: 6,
    title: "The Art of Wedding Reception Planning in Malaysia",
    slug: "wedding-reception-planning-malaysia",
    excerpt: "From traditional ceremonies to modern celebrations, explore the essential elements of planning a perfect wedding reception that honors culture while creating contemporary magic.",
    content: "Full content here...",
    date: "February 15, 2024",
    author: "EJ Event Team",
    category: "Weddings",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=400&fit=crop&crop=faces,entropy,edges&auto=format,enhance&q=75"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
            Event Planning Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Expert insights, tips, and trends from the world of event management and entertainment.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden animate-scale-in">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="ml-4 text-gray-500 text-sm">{blogPosts[0].date}</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold mb-4 hover:text-gray-700 transition-colors">
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    {blogPosts[0].title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{blogPosts[0].author}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                    <span>•</span>
                    <span>{blogPosts[0].category}</span>
                  </div>

                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest insights and tips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 hover:text-gray-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-black font-semibold hover:text-gray-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stay Updated with Event Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest event planning tips, trends, and exclusive offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time. Privacy policy applies.
          </p>
        </div>
      </section>
    </div>
  );
}