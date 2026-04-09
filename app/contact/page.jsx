import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | DecorNest',
  description: 'Get in touch with the DecorNest team. We are here to help with your home decor needs.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Have a question about our products, an order, or looking for design advice? We'd love to hear from you. Reach out to our team below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-1">Our Studio</h4>
                    <p className="text-neutral-600">123 Decor Street, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-1">Email Us</h4>
                    <p className="text-neutral-600">hello@decornest.com<br />support@decornest.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-1">Call Us</h4>
                    <p className="text-neutral-600">+1 (555) 123-4567<br />Mon-Fri from 8am to 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-1">Business Hours</h4>
                    <p className="text-neutral-600">Monday - Friday: 9AM - 6PM<br />Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media or Additional Info can go here */}
            <div className="bg-gradient-to-br from-emerald-900 to-teal-800 p-8 rounded-3xl text-white shadow-lg">
              <h3 className="text-xl font-bold mb-3">Join our Newsletter</h3>
              <p className="text-emerald-50/80 mb-6 text-sm">Stay updated with our latest collections, design tips, and exclusive offers.</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-4 py-2.5 rounded-xl flex-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                />
                <button type="button" className="bg-white text-emerald-900 px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-emerald-50 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Returns & Exchanges</option>
                    <option>Design Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="button" 
                    className="w-full md:w-auto inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
