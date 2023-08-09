const { google } = require('googleapis');
const express = require('express');
const app = express();

const oauth2Client = new google.auth.OAuth2(
  '22207062315-03lr6triqq4n659s52p9og8f2qssimg9.apps.googleusercontent.com',      // Insert your client ID here
  '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',  // Insert your client secret here
);

// Set the redirect URI for the callback
const redirectUri = 'http://localhost:3000/auth/google/callback';

// Generate the authentication URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: [
    'https://www.googleapis.com/auth/gmail.send',
  ],
  redirect_uri: redirectUri,
});

// Function to send an email using the Gmail API
async function sendEmail(emailOptions) {
  try {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const gmail = google.gmail({
      version: 'v1',
      auth: oauth2Client,
    });

    const emailData = generateEmailData(emailOptions);

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: emailData,
    });

    return res.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Helper function to generate email data
function generateEmailData(emailOptions) {
  // Construct the email data here
  const emailData = {
    // ...
  };

  return emailData;
}

module.exports = {
  authUrl,
  sendEmail,
};