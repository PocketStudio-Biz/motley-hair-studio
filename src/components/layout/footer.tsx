"use client";

import Link from "next/link";
import { Instagram, Facebook, Yelp, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1D1C1C] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-primary">Motley Hair</h3>
            <p className="text-sm max-w-xs text-gray-300">
              An LGBTQIA+-affirming hair studio in Seattle offering personalized, high-end styling in a welcoming environment.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Gallery", "About", "Contact", "Book Now"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Book Now" ? "/booking" : `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>1416 NW Ballard Way, 3rd Floor Studio 30, Seattle, WA 98105</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <Link href="mailto:contact@motleyhair.com" className="hover:text-primary transition-colors">
                  contact@motleyhair.com
                </Link>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <Link href="tel:+12065551234" className="hover:text-primary transition-colors">
                  (206) 555-1234
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Hours & Social */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-primary">Hours</h3>
            <ul className="space-y-1 mb-6">
              <li className="text-sm flex justify-between">
                <span>Monday:</span> <span>Closed</span>
              </li>
              <li className="text-sm flex justify-between">
                <span>Tuesday - Friday:</span> <span>10am - 7pm</span>
              </li>
              <li className="text-sm flex justify-between">
                <span>Saturday:</span> <span>9am - 4pm</span>
              </li>
              <li className="text-sm flex justify-between">
                <span>Sunday:</span> <span>Closed</span>
              </li>
            </ul>
            
            <h3 className="font-serif text-xl mb-2 text-primary">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://yelp.com" aria-label="Yelp" className="text-white hover:text-primary transition-colors">
                <Yelp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} Motley Hair. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
