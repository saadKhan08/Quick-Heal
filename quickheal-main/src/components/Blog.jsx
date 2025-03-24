import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { memo } from "react";
import PropTypes from 'prop-types';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Telemedicine",
    excerpt: "Exploring how digital healthcare is transforming patient care...",
    category: "Healthcare Tech",
    date: "Mar 19, 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Breakthrough in Cancer Research",
    excerpt: "New discoveries paving the way for innovative treatments...",
    category: "Medical Research",
    date: "Mar 18, 2024",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Mental Health in Modern Era",
    excerpt: "Understanding the importance of mental wellness...",
    category: "Mental Health",
    date: "Mar 17, 2024",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

const BlogPost = memo(({ post, index }) => {
  BlogPost.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
  };

  return (
    <motion.article
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden group">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <time className="text-sm text-gray-500 mb-2">{post.date}</time>
        <h3 className="text-xl font-medium mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-purple-600 font-medium"
          aria-label={`Read more about ${post.title}`}
        >
          Read More
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.article>
  );
});
BlogPost.displayName = 'BlogPost';

const Blog = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4">Latest Health Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest medical articles, research findings, and healthcare tips.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button 
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
            aria-label="View all blog articles"
          >
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Blog);