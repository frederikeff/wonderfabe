'use client';

import React from 'react';
import Button from './Button';

const SubscribeButton = ({ 
  href, 
  isYoutubeReady = false
}) => {
  if (!isYoutubeReady) {
    return (
      <Button 
        onClick={() => alert('YouTube channel coming soon!')}
        variant="primary"
      >
        Subscribe for Updates
      </Button>
    );
  }

  return (
    <Button 
      href={href}
      isExternal
      variant="primary"
    >
      Subscribe on YouTube
    </Button>
  );
};

export default SubscribeButton;