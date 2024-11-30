'use client';

import React, { useState } from 'react';
import { BookOpen, PenTool, Library, ScrollText } from 'lucide-react';
import NewsletterPopup from '@/components/NewsletterPopup';
import { publishedBooks, upcomingWorks, categories } from './data';

import Image from 'next/image';

export default function LinglexPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center py-16 px-4">
          <div className="flex justify-center mb-6">
            <PenTool size={48} className="text-purple-500" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
            LINGLEX
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where words weave stories, poetry speaks, and ideas take flight
          </p>
        </div>

        {/* Published Works */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Published Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedBooks.map((book) => (
              <div 
                key={book.title} 
                className="group relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Book Cover */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill={true}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <button 
                        className="bg-white px-6 py-2 rounded-full text-purple-600 font-semibold hover:bg-purple-50 transition-colors"
                      >
                        View Details
                      </button>
                      {book.available && (
                        <button 
                          className="bg-purple-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-purple-700 transition-colors"
                        >
                          Buy Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                {/* Book Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full">
                      {book.language}
                    </span>
                    <span className="text-sm text-gray-500">
                      {book.pages} pages
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Works */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingWorks.map((work) => (
              <div 
                key={work.title}
                className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <ScrollText className="text-purple-500 w-8 h-8 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                    <p className="text-gray-600 mb-4">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-purple-50 text-purple-700 px-3 py-1 rounded-full">
                        {work.category}
                      </span>
                      <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                        {work.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Writing Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div 
                key={category.name}
                className={`${category.color} rounded-xl shadow-sm p-6 text-center transition-all duration-300 hover:shadow-md`}
              >
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-sm p-8 text-center">
            <Library size={32} className="mx-auto mb-4 text-purple-500" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Be the first to know about new publications, stories, and poetry collections
            </p>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Subscribe for Updates
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
            <p className="mb-2">© 2024 Wonderfabe - LINGLEX</p>
            <a href="mailto:hello@wonderfabe.com" className="text-purple-600 hover:text-purple-700">
              hello@wonderfabe.com
            </a>
          </div>
        </footer>
      </main>

      <NewsletterPopup 
  isOpen={isPopupOpen} 
  onClose={() => setIsPopupOpen(false)}
  brand="LINGLEX"  // Add this prop
/>
    </>
  );
}