import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-red-600/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="neon-text text-2xl mb-4">
              ⚔️ ASTRA
            </h3>

            <p className="text-slate-400 mb-4">
              Knowledge is your weapon. Master skills with the best instructors.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-red-600 hover:text-white transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-red-600 hover:text-white transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-red-600 hover:text-white transition"
              >
                ◎
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-red-600 hover:text-white transition"
              >
                in
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-red-600 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="text-slate-400 hover:text-red-600 transition"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/live"
                  className="text-slate-400 hover:text-red-600 transition"
                >
                  Live Classes
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-red-600 transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Support
            </h4>

            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-red-600 transition"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-red-600 transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-red-600 transition"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-red-600 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-3">

              <li className="flex items-center gap-2 text-slate-400">
                <Mail size={18} className="text-red-600" />
                support@astra.edu
              </li>

              <li className="flex items-center gap-2 text-slate-400">
                <Phone size={18} className="text-red-600" />
                +1 (800) 123-4567
              </li>

              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={18} className="text-red-600 mt-1" />
                San Francisco, CA, USA
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500">
            © 2024 ASTRA. All rights reserved. Knowledge is your weapon.
          </p>

          <p className="text-slate-500 mt-4 md:mt-0">
            Made with ❤️ by the ASTRA Team
          </p>

        </div>

      </div>
    </footer>
  );
}

