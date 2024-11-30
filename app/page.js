'use client';

import React from 'react';
import { Mic, Palette, BookOpen, Film, Music, Laugh, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const brands = [
    {
      name: "WOBBY",
      icon: <Mic size={32} className="text-pink-500" />,
      description: "The messy hilarious relationship podcast with AI wisdom",
      color: "bg-pink-50 hover:bg-pink-100",
      href: "/wobby"
    },
    {
      name: "TIRIDA",
      icon: <Palette size={32} className="text-yellow-600" />,
      description: "Fabulous funny animals with personality",
      color: "bg-yellow-50 hover:bg-yellow-100",
      href: "/tirida"
    },
    {
      name: "WITTIKA",
      icon: <BookOpen size={32} className="text-blue-500" />,
      description: "Visual word art that pops",
      color: "bg-blue-50 hover:bg-blue-100",
      href: "/wittika"
    },
    {
      name: "LINGLEX",
      icon: <BookOpen size={32} className="text-purple-500" />,
      description: "Creative writing & poetry publishing",
      color: "bg-purple-50 hover:bg-purple-100",
      href: "/linglex"
    },
    {
      name: "STANDCOM",
      icon: <Laugh size={32} className="text-green-500" />,
      description: "Standing comedy & improv fun",
      color: "bg-green-50 hover:bg-green-100",
      href: "/standcom"
    },
    {
      name: "SNAPIX",
      icon: <Film size={32} className="text-red-500" />,
      description: "Dynamic film content & comedy clips",
      color: "bg-red-50 hover:bg-red-100",
      href: "/snapix"
    },
    {
      name: "TOOTIX",
      icon: <Music size={32} className="text-orange-500" />,
      description: "Fun & quirky original songs",
      color: "bg-orange-50 hover:bg-orange-100",
      href: "/tootix"
    },
    {
      name: "SHOP",
      icon: <ShoppingBag size={32} className="text-gray-500" />,
      description: "Explore our creative collections",
      color: "bg-gray-50 hover:bg-gray-100",
      href: "https://wonderfabe.printify.me/",
      external: true
    }
  ];

  const collections = [
    {
      name: "TIRIDA Animals",
      description: "Quirky animal prints and merchandise",
      icon: <Palette size={32} className="text-yellow-600" />,
      color: "bg-yellow-50 hover:bg-yellow-100",
      href: "https://wonderfabe.printify.me/"
    },
    {
      name: "WITTIKA Art",
      description: "Visual word art prints and frames",
      icon: <BookOpen size={32} className="text-blue-500" />,
      color: "bg-blue-50 hover:bg-blue-100",
      href: "https://wonderfabe.printify.me/"
    },
    {
      name: "LINGLEX Books",
      description: "Poetry collections and publications",
      icon: <BookOpen size={32} className="text-purple-500" />,
      color: "bg-purple-50 hover:bg-purple-100",
      href: "https://wonderfabe.printify.me/"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Welcome to Wonderfabe
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Where worlds of wonder, awe and joy excite
        </p>
      </div>

      {/* Brand Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link 
              href={brand.href}
              key={brand.name} 
              target={brand.external ? "_blank" : undefined}
              rel={brand.external ? "noopener noreferrer" : undefined}
              className={`${brand.color} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
            >
              <div className="flex flex-col items-center text-center p-6">
                {brand.icon}
                <h2 className="text-xl font-bold mt-4 mb-2">{brand.name}</h2>
                <p className="text-sm text-gray-600">{brand.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Collections Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link 
              href={collection.href}
              key={collection.name} 
              target="_blank"
              rel="noopener noreferrer"
              className={`${collection.color} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer`}
            >
              <div className="flex flex-col items-center text-center p-6">
                {collection.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{collection.name}</h3>
                <p className="text-sm text-gray-600">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
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