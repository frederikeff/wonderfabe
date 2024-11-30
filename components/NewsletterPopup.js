'use client';

import React, { useState } from 'react';
import { X, Sparkles, Film, Music, BookOpen } from 'lucide-react';

import { submitToKit } from '@/utils/kit';
import ConfirmationModal from './ConfirmationModal';

const NewsletterPopup = ({ 
  isOpen, 
  onClose,
  brand = 'LINGLEX', // Updated default
  // Brand-specific configurations
  config = {
    STANDCOM: {
      icon: Sparkles,
      color: "green",
      title: "Join the STANDCOM Community",
      description: "Be the first to know when new episodes drop and get exclusive behind-the-scenes content."
    },
    SNAPIX: {
      icon: Film,
      color: "red",
      title: "Stay in the Loop with SNAPIX",
      description: "Be the first to know when new episodes drop and get behind-the-scenes content"
    },
    TOOTIX: {
      icon: Music,
      color: "orange",
      title: "Be Part of the TOOTIX Music",
      description: "Subscribe to be the first to hear our new releases and get exclusive content"
    },
    LINGLEX: {
      icon: BookOpen,
      color: "purple",
      title: "Join the LINGLEX Literary Circle",
      description: "Be the first to know about new publications, stories, and poetry collections"
    }
  }
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Get brand-specific styling
  const brandConfig = config[brand];
  const colorClasses = {
    green: {
      button: 'bg-green-600 hover:bg-green-700',
      icon: 'text-green-500',
      ring: 'focus:ring-green-500',
    },
    red: {
      button: 'bg-red-600 hover:bg-red-700',
      icon: 'text-red-500',
      ring: 'focus:ring-red-500',
    },
    orange: {
      button: 'bg-orange-600 hover:bg-orange-700',
      icon: 'text-orange-500',
      ring: 'focus:ring-orange-500',
    },
    purple: {
      button: 'bg-purple-600 hover:bg-purple-700',
      icon: 'text-purple-500',
      ring: 'focus:ring-purple-500',
    }
  }[brandConfig.color];

  const IconComponent = brandConfig.icon;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }
  
    try {
      const result = await submitToKit(email, brand);
  
      if (result.success) {
        setStatus('success');
        setEmail('');
        setShowConfirmationModal(true); // Show modal instead of closing
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to subscribe. Please try again.');
    }
  };

  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="flex justify-center mb-4">
          <IconComponent className={`w-12 h-12 ${colorClasses.icon}`} />
        </div>

        <h3 className="text-2xl font-bold mb-2 text-center">
          {brandConfig.title}
        </h3>
        <p className="text-gray-600 mb-6 text-center">
          {brandConfig.description}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            placeholder="Enter your email"
            className={`w-full p-3 border rounded-lg ${colorClasses.ring} outline-none transition-all`}
            disabled={status === 'loading'}
            required
            aria-label="Email address"
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className={`w-full ${colorClasses.button} text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50`}
          >
            {status === 'loading' ? 'Subscribing...' : 
             status === 'success' ? 'Subscribed! 🎉' : 
             'Subscribe for Updates'}
          </button>
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center animate-fade-in">
              {errorMessage}
            </p>
          )}
          {status === 'success' && (
            <p className={`${colorClasses.icon} text-sm text-center animate-fade-in`}>
              Thanks for subscribing!
            </p>
          )}
        </form>
      </div>
      <ConfirmationModal 
        isOpen={showConfirmationModal}
        onClose={() => {
          setShowConfirmationModal(false);
          onClose();
          setStatus('idle');
        }}
        brand={brand}
      />
    </div>
  );
};

export default NewsletterPopup;