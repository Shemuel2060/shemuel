import { useState } from 'react';
import { useThemeStyles } from "../hooks/useThemeStyles";
import ProfileCard from '../components/ProfileCard';
import { Quote } from 'lucide-react';

const Quotes = () => {
  const styles = useThemeStyles();
  const quotes = [
    {
      id: 1,
      text: "The best code is not just functional, but also understandable by the next developer who will maintain it.",
      category: "Software"
    },
    {
      id: 2,
      text: "Education is not about filling a vessel, but lighting a fire that ignites a lifetime of learning.",
      category: "Education"
    },
    {
      id: 3,
      text: "In the intersection of faith and technology, we find opportunities to serve others with our skills.",
      category: "Spiritual"
    },
    {
      id: 4,
      text: "Writing is thinking on paper. The clearer your thoughts, the clearer your words will be.",
      category: "Writing"
    },
    {
      id: 5,
      text: "Leadership is not about being in charge, but about taking care of those in your charge.",
      category: "Leadership"
    },
    {
      id: 6,
      text: "Every bug is a lesson, every error a teacher. Embrace the debugging process as part of growth.",
      category: "Software"
    },
    {
      id: 7,
      text: "The most powerful tool in education is not the technology we use, but the relationships we build.",
      category: "Education"
    },
    {
      id: 8,
      text: "When we write code, we're not just solving problems—we're creating solutions that can change lives.",
      category: "Software"
    },
    {
      id: 9,
      text: "True mentorship is not about creating followers, but about empowering others to become leaders themselves.",
      category: "Leadership"
    },
    {
      id: 10,
      text: "In serving others through technology, we find purpose that transcends the code we write.",
      category: "Spiritual"
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Software', 'Education', 'Spiritual', 'Writing', 'Leadership'];

  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(quote => quote.category === selectedCategory);

  const quoteCardStyle = {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '0.75rem',
    padding: '2rem',
    position: 'relative',
    transition: 'all 0.3s ease',
  };

  const quoteCardHoverStyle = {
    ...quoteCardStyle,
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    borderColor: 'rgba(234, 179, 8, 0.3)',
  };

  const QuoteCard = ({ quote }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        style={isHovered ? quoteCardHoverStyle : quoteCardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          color: '#eab308',
          opacity: 0.3,
        }}>
          <Quote size={40} />
        </div>
        <p style={{
          color: '#f3f4f6',
          fontSize: '1.125rem',
          lineHeight: 1.8,
          fontStyle: 'italic',
          marginBottom: '1rem',
          paddingLeft: '2rem',
        }}>
          "{quote.text}"
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span style={{
            color: '#eab308',
            fontSize: '0.875rem',
            fontWeight: 500,
            padding: '0.25rem 0.75rem',
            backgroundColor: 'rgba(234, 179, 8, 0.1)',
            border: '1px solid rgba(234, 179, 8, 0.3)',
            borderRadius: '0.5rem',
          }}>
            {quote.category}
          </span>
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
            <h2 style={styles.sectionTitle}>Quotes</h2>
            <div style={styles.titleUnderline}></div>
            <p style={{
              color: '#9ca3af',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '2rem',
            }}>
              Personal reflections and insights on software development, education, writing, leadership, and faith.
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
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: selectedCategory === category ? '#eab308' : 'transparent',
                    border: `1px solid ${selectedCategory === category ? '#eab308' : '#27272a'}`,
                    borderRadius: '0.5rem',
                    color: selectedCategory === category ? '#000' : '#9ca3af',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'capitalize',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.borderColor = '#eab308';
                      e.target.style.color = '#eab308';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.borderColor = '#27272a';
                      e.target.style.color = '#9ca3af';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Quotes Grid */}
            {filteredQuotes.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '2rem',
              }}>
                {filteredQuotes.map((quote) => (
                  <QuoteCard key={quote.id} quote={quote} />
                ))}
              </div>
            ) : (
              <p style={{
                color: '#9ca3af',
                fontSize: '1rem',
                textAlign: 'center',
                padding: '3rem',
              }}>
                No quotes found in this category.
              </p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Quotes;
