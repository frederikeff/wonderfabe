'use client';

import React from 'react';
import { CheckCircle, X } from 'lucide-react';

const ConfirmationModal = ({ isOpen, onClose, brand }) => {
  if (!isOpen) return null;

  const colorClasses = {
    STANDCOM: 'text-green-600',
    SNAPIX: 'text-red-600',
    TOOTIX: 'text-orange-600',
    LINGLEX: 'text-purple-600'
  }[brand] || 'text-purple-600';

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
        
        <div className="text-center">
          <CheckCircle className={`w-16 h-16 ${colorClasses} mx-auto mb-4`} />
          <h3 className="text-2xl font-bold mb-4">Almost there!</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              We've sent you a confirmation email. Please check your inbox (and spam folder) to complete your subscription.
            </p>
            <p className="text-sm">
              <strong>Tip:</strong> To ensure you receive our updates:
            </p>
            <ul className="text-sm text-left list-disc pl-6 space-y-2">
              <li>Add hello@wonderfabe.com to your contacts</li>
              <li>Move our confirmation email from spam to inbox if needed</li>
              <li>Mark our emails as "not spam" if they appear there</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;