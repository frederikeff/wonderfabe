'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {

    const contactIssues = [
        'GENERAL',
        'WOBBY',
        'TIRIDA',
        'WITTIKA',
        'LINGLEX',
        'STANDCOM',
        'SNAPIX',
        'TOOTIX',
        'SHOP'
    ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '', 
    contactissue: 'GENERAL'
  });

  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const result = await submitToGoogleForms({
        type: 'contact',
        ...formData
      });
  
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We&apos;ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try emailing us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section remains the same */}
      <div className="max-w-6xl mx-auto text-center py-16 px-4">
        <div className="flex justify-center mb-6">
          <Mail size={48} className="text-purple-600" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Got questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
            <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Email Us</h3>
            <a href="mailto:hello@wonderfabe.com" className="text-purple-600 hover:text-purple-700">
              hello@wonderfabe.com
            </a>
          </div>
          
          <div className="bg-pink-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
            <Phone className="w-8 h-8 text-pink-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Call Us</h3>
            <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-gray-600">New York, NY</p>
          </div>
        </div>


        {/* Enhanced Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
            {/* Decorative gradient border */}
            <div className="absolute inset-0 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl">
              <div className="bg-white w-full h-full rounded-lg" />
            </div>
            
            {/* Form content */}
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-gray-50 hover:bg-white transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-gray-50 hover:bg-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                    <label htmlFor="contactissue" className="block text-sm font-medium text-gray-700 mb-1">
                         Topic
                    </label>
                    <select
                        id="contactissue"
                        name="contactissue"
                        value={formData.contactissue}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-gray-50 hover:bg-white transition-colors"
                    >
                        {contactIssues.map((issue) => (
                            <option key={issue} value={issue}>
                                {issue}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-gray-50 hover:bg-white transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-gray-50 hover:bg-white transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold
                    hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5
                    flex items-center justify-center gap-2 shadow-md
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submitStatus.message && (
                  <div className={`p-4 rounded-lg flex items-center gap-2 animate-fade-in
                    ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                  >
                    {submitStatus.success ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <Mail className="w-5 h-5 flex-shrink-0" />
                    )}
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer remains the same */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="mb-2">© 2024 Wonderfabe</p>
          <a href="mailto:hello@wonderfabe.com" className="text-purple-600 hover:text-purple-700">
            hello@wonderfabe.com
          </a>
        </div>
      </footer>
    </main>
  );
}