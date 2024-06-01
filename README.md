# Authentication System with Google OAuth

This project is a web application that implements user authentication using Passport.js. It supports local authentication with email and password, as well as OAuth authentication using Google. The application is built using Node.js, Express, and MongoDB, and it renders views using EJS templating.

## Features

- User registration and login with email and password.
- OAuth authentication with Google.
- Session management to keep users logged in across requests.
- Secure password storage using Passport.js and MongoDB.
- Conditional rendering of content based on user authentication status.
- Users can create and post their secrets anonymously.
- Authenticated users can view all posted secrets without knowing the identity of the authors.

## Installation Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. **Install dependencies**
    npm install

3. **Set up environment variables**
  Create a .env file in the root of your project and add the following:

    CLIENT_ID=your-google-client-id
    CLIENT_SECRET=your-google-client-secret

4.**Run the application**
  node app.js

**Usage**
Home Page: Navigate to the home page to see the initial content.
Register: Go to /register to create a new account.
Login: Go to /login to sign in with your existing account.
Google OAuth: Click the "Login with Google" button to sign in with your Google account.
Secrets: Once authenticated, navigate to /secrets to access restricted content and view all posted secrets anonymously.
Post Secret: After logging in, users can post their own secrets anonymously.

