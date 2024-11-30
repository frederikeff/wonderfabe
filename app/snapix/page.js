'use client';

import React, { useState } from 'react';
import { 
  Film, 
  Coffee, 
  Utensils,
  Trees, // Changed to Trees
  Rocket, 
  Play, 
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { series } from './data';

import Image from 'next/image';

import NewsletterPopup from '@/components/NewsletterPopup';

// Helper function to get the correct icon
const getIcon = (iconType, className = "w-6 h-6") => {
  const icons = {
    Coffee: <Coffee className={className} />,
    Utensils: <Utensils className={className} />,
    Trees: <Trees className={className} />,
    Rocket: <Rocket className={className} />
  };
  return icons[iconType] || null;
};

export default function SnapixPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [expandedSeasons, setExpandedSeasons] = useState({});

  const toggleSeason = (showTitle, seasonNumber) => {
    setExpandedSeasons(prev => ({
      ...prev,
      [`${showTitle}-${seasonNumber}`]: !prev[`${showTitle}-${seasonNumber}`]
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center py-16 px-4">
        <div className="flex justify-center mb-6">
          <Film size={48} className="text-red-500" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
          SNAPIX
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Where reality meets comedy, and every story has a punchline
        </p>
      </div>

      {/* Series Grid */}
      {series.map((show) => (
        <div key={show.title} className="max-w-6xl mx-auto px-4 mb-16">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Cover Image */}
              <div className="md:col-span-1 relative aspect-[2/3] overflow-hidden">
                <Image
                  src={show.coverImage}
                  alt={`${show.title} Cover`}
                  fill={true}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />  
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-8">
                <h2 className="text-3xl font-bold mb-2">{show.title}</h2>
                <p className="text-gray-600">Hosted by {show.host}</p>
                <p className="text-lg mt-4">{show.description}</p>

                {/* Seasons */}
                <div className="mt-8 space-y-6">
                  {show.seasons.map((season) => (
                    <div 
                      key={season.number} 
                      className="border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSeason(show.title, season.number)}
                        className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          {getIcon(season.iconType)}
                          <h3 className="text-xl font-bold">Season {season.number}: {season.title}</h3>
                        </div>
                        {expandedSeasons[`${show.title}-${season.number}`] 
                          ? <ChevronUp className="w-5 h-5" />
                          : <ChevronDown className="w-5 h-5" />
                        }
                      </button>

                      {/* Collapsible Episodes */}
                      {expandedSeasons[`${show.title}-${season.number}`] && (
                        <div className="p-4 bg-white">
                          <p className="text-gray-600 mb-4">{season.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {season.episodes.map((episode, index) => (
                              <div 
                                key={episode}
                                className="bg-gray-50 rounded-lg p-4 flex items-center gap-3"
                              >
                                <Play className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span>Episode {index + 1}: {episode}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm
                              ${season.status === 'Coming Soon' ? 'bg-blue-100 text-blue-800' :
                                season.status === 'In Production' ? 'bg-green-100 text-green-800' :
                                'bg-purple-100 text-purple-800'}`}
                            >
                              {season.status}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Newsletter Section with Star Vector Logo */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl shadow-sm p-8 text-center">
          {/* Replace this with your star vector logo component */}
          <div className="mx-auto mb-4 w-12 h-12">
            {/* Add your star vector logo here */}
          </div>
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Be the first to know when new episodes drop and get behind-the-scenes content
          </p>
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Subscribe for Updates
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="mb-2">© 2024 Wonderfabe - SNAPIX</p>
          <a href="mailto:hello@wonderfabe.com" className="text-red-600 hover:text-red-700">
            hello@wonderfabe.com
          </a>
        </div>
      </footer>

      <NewsletterPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
        brand="SNAPIX"  // Add this prop
        />
    </main>
  );
}