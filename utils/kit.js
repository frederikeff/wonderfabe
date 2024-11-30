// utils/kit.js

export const BRAND_TAG_IDS = {
    STANDCOM: '5581961',
    SNAPIX: '5594833',
    TOOTIX: '5594835',
    LINGLEX: '5581962'
  };
  
  export const submitToKit = async (email, brand) => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          brand
        })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }
  
      return data;
    } catch (error) {
      console.error('Kit submission error:', error);
      throw error;
    }
  };