'use client';

import React from 'react';
import { BookOpen, ShoppingBag, Type } from 'lucide-react';
import { wordArtItems, collections } from './data';

export default function WittikaPage() {
  // Add error handling for data
  const items = wordArtItems || [];
  const collectionItems = collections || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center py-16 px-4">
        <div className="flex justify-center mb-6">
          <Type size={48} className="text-blue-500" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          WITTIKA
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Where words transform into visual poetry and emotion takes shape
        </p>
      </div>

      {/* Word Art Gallery */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Visual Word Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item) => (
            <div 
                key={item.word} 
                className="group relative overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
            >
                {/* Image Container */}
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                <img
                    src={item.image}
                    alt={item.word}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay - Fully hidden by default, visible on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                {/* Text Overlay - Completely hidden by default */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-3">{item.word}</h3>
                    <p className="text-lg text-white/90">
                    {item.description}
                    </p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>

      {/* Collections Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Available Formats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collectionItems.map((collection) => (
            <div 
              key={collection.title} 
              className={`${collection.color} rounded-xl shadow-sm p-6 text-center transition-all duration-300 hover:shadow-md`}
            >
              <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
              <p className="text-gray-600 mb-4">{collection.description}</p>
              {collection.comingSoon && (
                <span className="inline-block bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Shop Preview */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm p-8 text-center">
          <ShoppingBag size={32} className="mx-auto mb-4 text-blue-500" />
          <h2 className="text-3xl font-bold mb-4">WITTIKA Shop</h2>
          <p className="text-gray-600 mb-6">
            Transform your space with our visual word art - available as posters, postcards, and special editions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold mb-2">Premium Posters</h3>
              <p className="text-sm text-gray-600">Museum-quality prints on premium paper</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold mb-2">Artful Postcards</h3>
              <p className="text-sm text-gray-600">Share the beauty of words</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold mb-2">Custom Sizes</h3>
              <p className="text-sm text-gray-600">Perfect fit for your space</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="mb-2">© 2024 Wonderfabe - WITTIKA</p>
          <a href="mailto:hello@wonderfabe.com" className="text-blue-600 hover:text-blue-700">
            hello@wonderfabe.com
          </a>
        </div>
      </footer>
    </main>
  );
}