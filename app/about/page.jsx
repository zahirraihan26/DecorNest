import React from 'react';
import { Home, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | DecorNest',
  description: 'Learn about DecorNest, our story, mission, and the team bringing beautiful home decor to you.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Story</h1>
          <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful spaces and bringing your dream home to life with carefully curated decor pieces that tell a story.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Democratizing beautiful spaces</h2>
            <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
              At DecorNest, we believe that everyone deserves a home they love. Founded in 2024, we set out on a mission to make premium, thoughtfully designed home decor accessible to all.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Our curated collections blend timeless elegance with modern sensibilities, ensuring that every piece you choose adds character and warmth to your sanctuary.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Our Mission</h3>
              <p className="text-sm text-neutral-500">Inspiring better living through design.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center mt-12 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Community</h3>
              <p className="text-sm text-neutral-500">Building spaces that bring people together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Why Choose DecorNest</h2>
            <p className="text-neutral-600 text-lg">We are committed to providing the best shopping experience for your home decor needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Quality',
                description: 'Every item is crafted with premium materials to ensure longevity and authentic aesthetic appeal.',
                icon: Award,
                color: 'text-rose-600',
                bg: 'bg-rose-50'
              },
              {
                title: 'Sustainable Sourcing',
                description: 'We prioritize eco-friendly materials and ethical manufacturing processes in everything we curate.',
                icon: Home,
                color: 'text-amber-600',
                bg: 'bg-amber-50'
              },
              {
                title: 'Expert Curation',
                description: 'Our team of interior designers carefully selects each piece to ensure it meets our high standards.',
                icon: Users,
                color: 'text-blue-600',
                bg: 'bg-blue-50'
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Ready to transform your space?</h2>
        <p className="text-neutral-600 mb-8 max-w-xl mx-auto text-lg">
          Explore our latest collection and find the perfect pieces for your home.
        </p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors shadow-sm hover:shadow">
          Shop Now
        </Link>
      </section>
    </main>
  );
}
