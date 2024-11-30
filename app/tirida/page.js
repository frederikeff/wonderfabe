'use client';

import React from 'react';
import { Palette, BookOpen, ShoppingBag } from 'lucide-react';
import { animals, shopItems, books } from './data';

import Image from 'next/image';

export default function TiridaPage() {
  const handleShopClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center py-16 px-4">
        <div className="flex justify-center mb-6">
          <Palette size={48} className="text-yellow-500" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          TIRIDA
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Where fantastical animals come to life with personality and charm
        </p>
      </div>

      {/* Character Gallery */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {animals.map((animal) => (
            <div 
              key={animal.name} 
              className={`${animal.color} rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md`}
            >
              <div className="relative w-full h-[400px] overflow-hidden">
                <Image
                  src={animal.image}
                  alt={animal.word}
                  fill={true}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-2">{animal.name}</h3>
                <p className="text-gray-600">{animal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Collection Preview */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Collection</h2>
        <div className="bg-yellow-50 rounded-xl shadow-sm p-6">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg mb-6">
            <Image
               src="/images/tiridacollection.png"
               alt="TIRIDA Collection"
              fill={true}
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
           />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">The TIRIDA Family</h3>
            <p className="text-gray-600">
              All your favorite characters together in one beautiful frame
            </p>
          </div>
        </div>
      </div>

      {/* Books Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">TIRIDA Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book) => (
            <div key={book.title} className="bg-white rounded-xl shadow-sm p-6">
              <BookOpen size={32} className="text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-4">{book.description}</p>
              {book.comingSoon && (
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Shop Preview */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-sm p-8 text-center">
          <ShoppingBag size={32} className="mx-auto mb-4 text-yellow-500" />
          <h2 className="text-3xl font-bold mb-4">TIRIDA Shop</h2>
          <p className="text-gray-600 mb-6">
            Coming soon: Beautiful prints, framed collections, and books featuring your favorite TIRIDA characters
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {shopItems.map((item) => (
              <div
                key={item.title}
                className={`bg-white rounded-lg p-4 shadow-sm transition-all duration-300 ${
                  !item.comingSoon ? 'hover:shadow-md cursor-pointer' : ''
                }`}
                onClick={() => handleShopClick(item.link)}
              >
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.comingSoon && (
                  <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="mb-2">&copy; 2024 Wonderfabe - TIRIDA</p>
          <a href="mailto:hello@wonderfabe.com" className="text-yellow-600 hover:text-yellow-700">
            hello@wonderfabe.com
          </a>
        </div>
      </footer>
    </main>
  );
}