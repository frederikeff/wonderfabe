'use client';

import React from 'react';
import { 
  Tv,
  Play, 
  Video, 
  Timer, 
  Users, 
  Sparkles 
} from 'lucide-react';
import { features, comingSoonEpisodes } from './data';

import { useState } from 'react';
import NewsletterPopup from '@/components/NewsletterPopup';

// Helper function to render icons
const getIcon = (iconName, className) => {
  const icons = {
    Users: <Users className={className} />,
    Timer: <Timer className={className} />,
    Play: <Play className={className} />
  };
  return icons[iconName] || null;
};

export default function StandcomPage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center py-16 px-4">
        <div className="flex justify-center mb-6">
          <Tv size={48} className="text-green-500" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-600">
          STANDCOM
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The future of comedy is standing up. Literally.
        </p>
      </div>

      {/* Concept Video Placeholder */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Video className="w-16 h-16 text-white/50 mx-auto mb-4" />
              <p className="text-white/90 text-xl font-semibold">
                Concept Preview Coming Soon
              </p>
              <p className="text-white/60">
                Subscribe for updates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Reinventing Comedy Entertainment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-block p-3 bg-green-50 rounded-full mb-4">
                {getIcon(feature.icon, "w-8 h-8 text-green-500")}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon Episodes */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Upcoming Episodes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comingSoonEpisodes.map((episode) => (
            <div 
              key={episode.title}
              className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-green-500/10">
                  <Sparkles className="w-8 h-8 text-green-500/50" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{episode.title}</h3>
                  <span className="text-sm bg-green-50 text-green-700 px-2 py-1 rounded-full">
                    {episode.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{episode.description}</p>
                <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {episode.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-sm p-8 text-center">
            <Sparkles size={32} className="mx-auto mb-4 text-green-500" />
            <h2 className="text-3xl font-bold mb-4">Be Part of the Revolution</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              STANDCOM is redefining comedy entertainment. Subscribe to our channel to be the first to watch when we launch.
            </p>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Subscribe for Updates
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
            <p className="mb-2">© 2024 Wonderfabe - STANDCOM</p>
            <a href="mailto:hello@wonderfabe.com" className="text-green-600 hover:text-green-700">
              hello@wonderfabe.com
            </a>
          </div>
        </footer>
      </main>

      <NewsletterPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
        brand="STANDCOM"  // Add this prop
        />
    </>
  );
}