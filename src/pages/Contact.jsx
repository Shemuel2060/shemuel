import { useState } from 'react';
import { useThemeStyles } from "../hooks/useThemeStyles";
import ProfileCard from '../components/ProfileCard';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const styles = useThemeStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:2060iona.shemuel@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to get in touch with you.");
    const whatsappLink = `https://wa.me/256767896608?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} color="#eab308" />,
      label: "Email",
      value: "2060iona.shemuel@gmail.com",
      link: "mailto:2060iona.shemuel@gmail.com"
    },
    {
      icon: <Phone size={24} color="#eab308" />,
      label: "Phone",
      value: "(+256) 767 896 608",
      link: "tel:+256767896608"
    },
    {
      icon: <MapPin size={24} color="#eab308" />,
      label: "Location",
      value: "Kampala, Uganda",
      link: null
    }
  ];

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <ProfileCard />
        </aside>
        
        <main style={styles.mainContent}>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Get In Touch</h2>
            <div style={styles.titleUnderline}></div>
            <p style={{
              color: '#9ca3af',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '3rem',
            }}>
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
            }}>
              {/* Contact Information */}
              <div>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '2rem',
                }}>
                  Contact Information
                </h3>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                }}>
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        padding: '1.25rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(234, 179, 8, 0.1)',
                        transition: 'all 0.3s ease',
                        cursor: info.link ? 'pointer' : 'default',
                      }}
                      onMouseEnter={(e) => {
                        if (info.link) {
                          e.currentTarget.style.borderColor = 'rgba(234, 179, 8, 0.3)';
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (info.link) {
                          e.currentTarget.style.borderColor = 'rgba(234, 179, 8, 0.1)';
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                        }
                      }}
                      onClick={() => {
                        if (info.link) {
                          window.location.href = info.link;
                        }
                      }}
                    >
                      <div style={{ flexShrink: 0, marginTop: '0.25rem' }}>
                        {info.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{
                          color: '#6b7280',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          marginBottom: '0.25rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>
                          {info.label}
                        </p>
                        <p style={{
                          color: '#f3f4f6',
                          fontSize: '0.9375rem',
                          wordBreak: 'break-word',
                        }}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsApp}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#25D366',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#20BA5A';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#25D366';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                  }}
                >
                  <MessageCircle size={20} />
                  Message on WhatsApp
                </button>
              </div>

              {/* Contact Form */}
              <div>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '2rem',
                }}>
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        color: '#9ca3af',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        marginBottom: '0.5rem',
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid #27272a',
                        borderRadius: '0.5rem',
                        color: 'white',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.borderColor = '#eab308';
                        e.target.style.borderColor = '#eab308';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#27272a';
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        color: '#9ca3af',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        marginBottom: '0.5rem',
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid #27272a',
                        borderRadius: '0.5rem',
                        color: 'white',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#eab308';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#27272a';
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label
                      htmlFor="subject"
                      style={{
                        display: 'block',
                        color: '#9ca3af',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        marginBottom: '0.5rem',
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid #27272a',
                        borderRadius: '0.5rem',
                        color: 'white',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#eab308';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#27272a';
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        color: '#9ca3af',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        marginBottom: '0.5rem',
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid #27272a',
                        borderRadius: '0.5rem',
                        color: 'white',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#eab308';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#27272a';
                      }}
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '0.5rem',
                      color: '#10b981',
                      marginBottom: '1rem',
                      fontSize: '0.875rem',
                    }}>
                      Email client opened! Please send your message.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      padding: '1rem 2rem',
                      backgroundColor: isSubmitting ? '#6b7280' : '#eab308',
                      color: isSubmitting ? '#9ca3af' : '#000',
                      border: 'none',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: isSubmitting ? 'none' : '0 4px 15px rgba(234, 179, 8, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.target.style.backgroundColor = '#fbbf24';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(234, 179, 8, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.target.style.backgroundColor = '#eab308';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(234, 179, 8, 0.3)';
                      }
                    }}
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Opening Email...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
