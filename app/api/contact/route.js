// app/api/contact/route.js
export async function POST(request) {
    try {
      const { name, email, subject, message, contactissue } = await request.json();
      
      const FORM_ID = process.env.KIT_CONTACT_FORM_ID;
  
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            api_key: process.env.KIT_API_KEY,
            email: email,
            fields: {
              name: name,
              subject: subject,
              message: message,
              CONTACTISSUE: contactissue // This matches your Kit field name
            }
          })
        }
      );
  
      const data = await response.json();
  
      if (!response.ok || !data.subscription) {
        throw new Error(data.message || 'Submission failed');
      }
  
      return Response.json({
        success: true,
        message: 'Message sent successfully!'
      });
  
    } catch (error) {
      console.error('Contact form submission error:', error);
      return Response.json(
        {
          success: false,
          message: 'Failed to send message. Please try again.'
        },
        { status: 500 }
      );
    }
  }