import Link from 'next/link';

const Facebook = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Twitter = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Instagram = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-500 mb-4 inline-block">
              DecorNest
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Transforming houses into homes with carefully curated, aesthetic decor pieces that reflect your personal style and bring warmth to every corner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/shop/living" className="text-gray-600 hover:text-amber-600 text-sm transition-colors">Living Room</Link></li>
              <li><Link href="/shop/bedroom" className="text-gray-600 hover:text-amber-600 text-sm transition-colors">Bedroom</Link></li>
              <li><Link href="/shop/kitchen" className="text-gray-600 hover:text-amber-600 text-sm transition-colors">Kitchen & Dining</Link></li>
              <li><Link href="/shop/outdoor" className="text-gray-600 hover:text-amber-600 text-sm transition-colors">Outdoor</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-gray-600 hover:text-amber-600 text-sm transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-amber-600 text-sm transition-colors">FAQs</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-amber-600 text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/track" className="text-gray-600 hover:text-amber-600 text-sm transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Stay Inspired</h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe to get special offers, free giveaways, and beautiful decor ideas.</p>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 text-sm font-medium rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center pb-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DecorNest. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
