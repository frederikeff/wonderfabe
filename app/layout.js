'use client';

import React, { useState } from 'react';
import { Sparkles, Palette, Brain, Lightbulb, Wand2 } from 'lucide-react';
import './globals.css';

export default function RootLayout({ children }) {
  // You can change which icon is used by changing 'logo1' to 'logo2', etc.
  const [logoVersion] = useState('logo1');

  const logos = {
    logo1: <Sparkles className="w-5 h-5 text-white" />, // Represents creativity/magic
    logo2: <Brain className="w-5 h-5 text-white" />,    // Represents AI/wisdom/ideas
    logo3: <Palette className="w-5 h-5 text-white" />,  // Represents art/creativity
    logo4: <Lightbulb className="w-5 h-5 text-white" />, // Represents ideas/inspiration
    logo5: <Wand2 className="w-5 h-5 text-white" />     // Represents magic/transformation
  };

  const navigateHome = () => {
    window.location.href = '/';
  };

  return (
    <html lang="en">
      <head>
        {/* Other meta tags and head content */}
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body>
        {/* Navigation Header */}
        <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo/Home Link */}
            <div 
              onClick={navigateHome}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg group-hover:shadow-md transition-all">
                {logos[logoVersion]}
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Wonderfabe
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 text-gray-600">
              <a href="/shop" className="hover:text-purple-600 transition-colors">Shop</a>
              <a href="/contact" className="hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}