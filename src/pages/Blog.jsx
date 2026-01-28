import { useState } from 'react';
import { useThemeStyles } from "../hooks/useThemeStyles";
import ProfileCard from '../components/ProfileCard';
import { BookOpen, Code, GraduationCap, Heart } from 'lucide-react';

const Blog = () => {
  const styles = useThemeStyles();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: null },
    { id: 'software', name: 'Software', icon: <Code size={18} /> },
    { id: 'writing', name: 'Writing', icon: <BookOpen size={18} /> },
    { id: 'education', name: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'spiritual', name: 'Spiritual', icon: <Heart size={18} /> },
  ];

  const blogs = [
    {
      id: 1,
      title: "Getting Started with JavaFX",
      excerpt: "A comprehensive guide to building desktop applications with JavaFX, covering the basics and advanced techniques.",
      category: "software",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/images/blog/java-javafx.jpg"
    },
    {
      id: 2,
      title: "The Art of Technical Writing",
      excerpt: "Exploring the principles of effective technical documentation and how to communicate complex ideas clearly.",
      category: "writing",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/images/blog/technical-writing.jpg"
    },
    {
      id: 3,
      title: "Teaching Programming to Beginners",
      excerpt: "Strategies and approaches for making programming accessible to newcomers, especially in underserved communities.",
      category: "education",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/images/blog/teaching-programming.jpg"
    },
    {
      id: 4,
      title: "Faith and Technology: Finding Balance",
      excerpt: "Reflecting on how faith guides our work in technology and the importance of using our skills for good.",
      category: "spiritual",
      date: "2024-01-01",
      readTime: "8 min read",
      image: "/images/blog/faith-technology.jpg"
    },
    {
      id: 5,
      title: "Building RESTful APIs with Spring Boot",
      excerpt: "A practical guide to creating robust REST APIs using Spring Boot, including best practices and common patterns.",
      category: "software",
      date: "2023-12-20",
      readTime: "10 min read",
      image: "/images/blog/spring-boot-api.jpg"
    },
    {
      id: 6,
      title: "The Power of Storytelling in Documentation",
      excerpt: "How narrative techniques can make technical documentation more engaging and easier to understand.",
      category: "writing",
      date: "2023-12-15",
      readTime: "6 min read",
      image: "/images/blog/storytelling-docs.jpg"
    },
    {
      id: 7,
      title: "Empowering Refugees Through Education",
      excerpt: "My experience teaching English and computer skills to refugees, and the impact of education on integration.",
      category: "education",
      date: "2023-12-10",
      readTime: "9 min read",
      image: "/images/blog/refugee-education.jpg"
    },
    {
      id: 8,
      title: "Scripture and Software Development",
      excerpt: "Drawing parallels between biblical principles and software engineering practices.",
      category: "spiritual",
      date: "2023-12-05",
      readTime: "7 min read",
      image: "/images/blog/scripture-software.jpg"
    },
  ];

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      software: '#eab308',
      writing: '#3b82f6',
      education: '#10b981',
      spiritual: '#f43f5e',
    };
    return colors[category] || '#9ca3af';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      software: <Code size={20} />,
      writing: <BookOpen size={20} />,
      education: <GraduationCap size={20} />,
      spiritual: <Heart size={20} />,
    };
    return icons[category] || null;
  };

  const blogCardStyle = {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const blogCardHoverStyle = {
    ...blogCardStyle,
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    borderColor: 'rgba(234, 179, 8, 0.3)',
  };

  const BlogCard = ({ blog }) => {
    const [isHovered, setIsHovered] = useState(false);
    const categoryColor = getCategoryColor(blog.category);

    return (
      <div
        style={isHovered ? blogCardHoverStyle : blogCardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {blog.image && (
          <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div style={{
              position: 'absolute',
              top: '0.75rem',
              left: '0.75rem',
              backgroundColor: categoryColor,
              color: '#000',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              {getCategoryIcon(blog.category)}
              <span style={{ textTransform: 'capitalize' }}>{blog.category}</span>
            </div>
          </div>
        )}
        <div style={{ padding: '1.5rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.75rem',
            fontSize: '0.75rem',
            color: '#6b7280',
          }}>
            <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>{blog.readTime}</span>
          </div>
          <h3 style={{
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
            lineHeight: 1.4,
          }}>
            {blog.title}
          </h3>
          <p style={{
            color: '#9ca3af',
            fontSize: '0.875rem',
            lineHeight: 1.6,
          }}>
            {blog.excerpt}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <ProfileCard />
        </aside>
        
        <main style={styles.mainContent}>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Blog</h2>
            <div style={styles.titleUnderline}></div>
            <p style={{
              color: '#9ca3af',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '2rem',
            }}>
              Thoughts, insights, and experiences on software development, writing, education, and faith.
            </p>

            {/* Category Filter */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid #27272a',
            }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: selectedCategory === category.id ? '#eab308' : 'transparent',
                    border: `1px solid ${selectedCategory === category.id ? '#eab308' : '#27272a'}`,
                    borderRadius: '0.5rem',
                    color: selectedCategory === category.id ? '#000' : '#9ca3af',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.borderColor = '#eab308';
                      e.target.style.color = '#eab308';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.borderColor = '#27272a';
                      e.target.style.color = '#9ca3af';
                    }
                  }}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            {filteredBlogs.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem',
              }}>
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <p style={{
                color: '#9ca3af',
                fontSize: '1rem',
                textAlign: 'center',
                padding: '3rem',
              }}>
                No blogs found in this category.
              </p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Blog;
