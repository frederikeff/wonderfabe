'use client';

import React, { useState } from 'react';
import { Music, Play, Pause, Clock, Sparkles, Podcast } from 'lucide-react';
import { songSeries } from './data';
import NewsletterPopup from '@/components/NewsletterPopup';
import Image from 'next/image';

export default function TootixPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [expandedSeries, setExpandedSeries] = useState({});

  const toggleSeries = (title) => {
    setExpandedSeries(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center py-16 px-4">
          <div className="flex justify-center mb-6">
            <Music size={48} className="text-orange-500" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            TOOTIX
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where fun meets music in unexpected ways
          </p>
        </div>

        {/* Song Series Grid */}
        {songSeries.map((series) => (
          <div key={series.title} className="max-w-6xl mx-auto px-4 mb-16">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6 p-6">
                {/* Series Cover */}
                <div className="md:col-span-1">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={series.coverImage}
                      alt={series.title}
                      fill={true}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </div>

                {/* Series Info */}
                <div className="md:col-span-2">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{series.title}</h2>
                      <p className="text-gray-600">{series.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm
                      ${series.status === 'In Production' ? 'bg-green-100 text-green-800' : 
                        'bg-blue-100 text-blue-800'}`}>
                      {series.status}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleSeries(series.title)}
                    className="text-orange-500 font-semibold flex items-center gap-2 mb-4 hover:text-orange-600"
                  >
                    {expandedSeries[series.title] ? 'Hide Songs' : 'Show Songs'}
                  </button>

                  {/* Songs Grid */}
                  {expandedSeries[series.title] && (
                    <div className="grid grid-cols-1 gap-4 mt-4">
                      {series.songs.map((song) => (
                        <div
                          key={song.title}
                          className="bg-gray-50 rounded-xl p-4 flex gap-4 items-center"
                        >
                          <div className="flex-shrink-0 relative w-16 h-16 rounded-xl overflow-hidden">
                            <Image
                              src={song.coverImage}
                              alt={song.title}
                              fill={true}
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-bold">{song.title}</h3>
                            <p className="text-sm text-gray-600">{song.description}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="flex items-center text-sm text-gray-500">
                                <Clock className="w-4 h-4 mr-1" />
                                {song.duration}
                              </span>
                              <span className={`text-sm px-2 py-1 rounded-full
                                ${song.status === 'Coming Soon' ? 'bg-blue-100 text-blue-800' :
                                  song.status === 'In Production' ? 'bg-green-100 text-green-800' :
                                  'bg-purple-100 text-purple-800'}`}>
                                {song.status}
                              </span>
                            </div>
                          </div>
                          {song.spotifyLink && (
                            <a
                              href={song.spotifyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 text-green-500 hover:text-green-600"
                            >
                              <Podcast className="w-6 h-6" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Newsletter Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-sm p-8 text-center">
            <Sparkles size={32} className="mx-auto mb-4 text-orange-500" />
            <h2 className="text-3xl font-bold mb-4">Be Part of the Music</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              TOOTIX is bringing fun and laughter through music. Subscribe to be the first to hear our new releases.
            </p>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
            >
              Subscribe for Updates
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
            <p className="mb-2">&copy; 2024 Wonderfabe - TOOTIX</p>
            <a href="mailto:hello@wonderfabe.com" className="text-orange-600 hover:text-orange-700">
              hello@wonderfabe.com
            </a>
          </div>
        </footer>
      </main>

      <NewsletterPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        brand="TOOTIX"
      />
    </>
  );
}