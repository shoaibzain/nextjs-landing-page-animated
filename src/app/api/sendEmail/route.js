// src/app/api/sendEmail/route.js
import axios from 'axios';

export async function POST(req) {
  const { name, company, email, phone, services, budget, message } = await req.json();

  // Brevo API URL
  const url = 'https://api.brevo.com/v3/smtp/email';

  const data = {
    sender: { name: 'Your Company Name', email: 'shoaibzain849@gmail.com' }, // Replace with your email
    to: [{ email: email }],
    subject: 'New Inquiry from Landing Page',
    htmlContent: `
      <h1>New Inquiry</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Services:</strong> ${services}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY, // Use environment variable for security
      },
    });

    return new Response(JSON.stringify({ success: true, message: response.data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
