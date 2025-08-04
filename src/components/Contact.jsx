import React, { useState } from 'react';
import { motion as Motion} from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "sepiidehpakseresht@gmail.com",
      link: "mailto:sepiidehpakseresht@gmail.com"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Tehran, Iran",
      link: null
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+98 936 053 7568",
      link: "tel:+989360537568"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            <span className="bg-primary px-2 md:px-4 py-2 rounded-lg">Let's</span> Connect
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 px-4">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <info.icon className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", href: "https://github.com/Sepidehpakseresht", color: "#333" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/sepideh-pakseresht-1b3967239", color: "#0077b5" },
                  { name: "Email", href: "mailto:sepiidehpakseresht@gmail.com", color: "#ea4335" }
                ].map((social) => (
                  <Motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg glass flex items-center justify-center text-primary hover:text-white hover:shadow-orange transition-all duration-300"
                  >
                    <span className="text-sm font-semibold">{social.name[0]}</span>
                  </Motion.a>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 border border-glass-border shadow-orange"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-orange transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-orange transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-orange transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-glass-border rounded-lg text-white focus:outline-none focus-orange transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg shadow-orange hover:shadow-orange/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-xl animate-bounce" />
                    Message Sent!
                  </span>
                ) : (
                  "Send Message"
                )}
              </Motion.button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;