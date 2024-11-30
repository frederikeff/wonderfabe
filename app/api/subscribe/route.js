// app/api/subscribe/route.js
import { NextResponse } from 'next/server';
import { BRAND_TAG_IDS } from '@/utils/kit';

export async function POST(request) {
  console.log('Subscribe endpoint hit');
  
  try {
    const { email, brand } = await request.json();
    
    // Log configuration (safely)
    console.log('Configuration check:', {
      formIdExists: !!process.env.KIT_FORM_ID,
      formIdValue: process.env.KIT_FORM_ID,  // Temporarily log this for debugging
      apiKeyExists: !!process.env.KIT_API_KEY,
      apiKeyLastFour: process.env.KIT_API_KEY ? process.env.KIT_API_KEY.slice(-4) : null,
      brand,
      tagId: BRAND_TAG_IDS[brand]
    });

    if (!process.env.KIT_API_KEY || !process.env.KIT_FORM_ID) {
      return NextResponse.json(
        { success: false, message: 'Missing API configuration' },
        { status: 500 }
      );
    }

    // First, verify the form exists
    const verifyForm = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}?api_key=${process.env.KIT_API_KEY}`
    );
    
    console.log('Form verification response:', await verifyForm.json());

    // Proceed with subscription
    const subscribeUrl = `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`;
    console.log('Attempting subscription to:', subscribeUrl);

    const kitResponse = await fetch(subscribeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.KIT_API_KEY,
        email: email,
        tags: [BRAND_TAG_IDS[brand]]
      })
    });

    const kitData = await kitResponse.json();
    console.log('ConvertKit API response:', kitData);

    if (!kitResponse.ok) {
      return NextResponse.json(
        { 
          success: false, 
          message: kitData.message || 'Subscription failed',
          details: kitData
        },
        { status: kitResponse.status }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred',
        details: error.message
      },
      { status: 500 }
    );
  }
}