import { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "b506a2ba-01ee-4a03-beaa-e0d7f829a647",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Contact from Portfolio Website",
          message: formData.message,
          from_name: "Samuel Katongole Portfolio"
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('success');
      } else {
        console.error("Web3Forms error:", result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Web3Forms fetch error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to get in touch with you.");
    const whatsappLink = `https://wa.me/256767896608?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-yellow-500" />,
      label: "Email",
      value: "2060iona.shemuel@gmail.com",
      link: "mailto:2060iona.shemuel@gmail.com"
    },
    {
      icon: <Phone size={24} className="text-yellow-500" />,
      label: "Phone",
      value: "(+256) 767 896 608",
      link: "tel:+256767896608"
    },
    {
      icon: <MapPin size={24} className="text-yellow-500" />,
      label: "Location",
      value: "Kampala, Uganda",
      link: null
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto pt-32 pb-24 px-6 md:px-12 min-h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <aside className="lg:col-span-4 self-start sticky top-32">
          <ProfileCard />
        </aside>
        
        <main className="lg:col-span-8 bg-white dark:bg-[#18181b] rounded-3xl p-8 shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800">
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <div className="w-16 h-1.5 bg-yellow-500 rounded-full mb-8"></div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-12">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="flex flex-col gap-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                        info.link 
                          ? 'cursor-pointer border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 hover:border-yellow-500/30 hover:bg-yellow-50 dark:hover:bg-yellow-900/10' 
                          : 'border-transparent bg-gray-50 dark:bg-zinc-900/50 cursor-default'
                      }`}
                      onClick={() => {
                        if (info.link) {
                          window.location.href = info.link;
                        }
                      }}
                    >
                      <div className="shrink-0 mt-1">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-gray-900 dark:text-gray-200 font-medium break-all">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
                >
                  <MessageCircle size={20} />
                  Message on WhatsApp
                </button>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3.5 bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all duration-300 resize-y disabled:opacity-50"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-start gap-2">
                      <span className="text-base font-bold shrink-0">✓</span>
                      <span>Your message has been sent successfully. Thank you!</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 rounded-xl text-rose-600 dark:text-rose-400 text-sm font-medium flex items-start gap-2">
                      <span className="text-base font-bold shrink-0">⚠</span>
                      <span>Failed to send message. Please try again or message directly via WhatsApp.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold transition-all duration-300 shadow-lg ${
                      isSubmitting 
                        ? 'bg-gray-300 dark:bg-zinc-700 text-gray-500 cursor-not-allowed shadow-none' 
                        : 'bg-yellow-500 hover:bg-yellow-400 text-black transform hover:-translate-y-1 shadow-yellow-500/30 hover:shadow-yellow-500/50'
                    }`}
                  >
                    <Send size={20} className={isSubmitting ? "animate-pulse" : ""} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </motion.div>
  );
};

export default Contact;
