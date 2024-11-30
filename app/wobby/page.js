'use client';

import React from 'react';
import { Mic, MessageCircle, Music } from 'lucide-react';

export default function WobbyPage() {
  const testimonials = [
    {
      quote: "WOBBY changed how I think about relationships!",
      author: "Happy Listener"
    },
    {
      quote: "AI wisdom meets real talk - brilliant!",
      author: "Podcast Fan"
    },
    {
      quote: "Funny, insightful, and surprisingly deep",
      author: "Regular Subscriber"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center py-16 px-4">
        <div className="flex justify-center mb-6">
          <Mic size={48} className="text-pink-500" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          WOBBY
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The messy hilarious relationship podcast with AI wisdom
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* About Card */}
        <div className="bg-pink-50 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">About WOBBY</h2>
          <p className="text-gray-600">
            Join WOBBY as we navigate the wild world of relationships with help from 
            the top AI models. Expect laughter, insights, and plenty of &quot;aha&quot; moments!
          </p>
        </div>

        {/* Latest Episodes Card */}
        <div className="bg-pink-50 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Latest Episodes</h2>
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <Music size={20} className="mr-2" />
              <p>Dating in the Digital Age</p>
            </div>
            <div className="flex items-center text-gray-600">
              <Music size={20} className="mr-2" />
              <p>When AI Meets Love</p>
            </div>
            <div className="flex items-center text-gray-600">
              <Music size={20} className="mr-2" />
              <p>Relationship Red Flags</p>
            </div>
          </div>
        </div>
      </div>

      {/* MusicListener Embed */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Listen Now</h2>
          <div className="relative w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://open.spotify.com/embed/show/0tWNS2BJgYNupOrdtCoqz7?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Listener Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <MessageCircle size={32} className="mx-auto mb-4 text-pink-500" />
              <p className="text-gray-600 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <p className="font-bold text-gray-800">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="mb-2">&copy; 2024 Wonderfabe - WOBBY</p>
          <a href="mailto:hello@wonderfabe.com" className="text-pink-600 hover:text-pink-700">
            hello@wonderfabe.com
          </a>
        </div>
      </footer>
    </main>
  );
}