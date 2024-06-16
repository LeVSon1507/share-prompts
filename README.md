This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

# Prompt AI Application

## Overview

This application allows users to create and edit profiles, log in using Google authentication, and interact with AI-generated prompts. The main features include:

-  User Authentication with Google
-  Profile Creation and Editing
-  AI-Powered Prompts

## Table of Contents

-  [Technologies Used](#technologies-used)
-  [Installation](#installation)
-  [Usage](#usage)
-  [API Endpoints](#api-endpoints)
-  [Features](#features)
-  [Contributing](#contributing)
-  [License](#license)

## Technologies Used

-  **Frontend**: Next.js
-  **Backend**: Next.js
-  **Database**: MongoDB
-  **Authentication**: NextAuth.js (with Google Provider)
-  **AI Integration**: OpenAI API

### Prerequisites

-  Node.js
-  MongoDB

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/prompt-ai-app.git
   cd prompt-ai-app
   ```

   ```
   npm install
   ```

   CREATE `.env`

   ```
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=your-mongodb-connection-string
   ```

   Usage
   Authentication
   Users can log in using their Google account. Click on the "Login with Google" button on the homepage to authenticate.

   Profile Management
   After logging in, users can create and edit their profiles. The profile includes a username and additional information that can be updated at any time.

   AI-Powered Prompts
   Users can interact with AI-generated prompts. These prompts can be created, edited, and deleted by authenticated users.

   API Endpoints
   User Endpoints
   GET /api/users/[id]/posts: Fetch all posts created by a specific user.

   POST /api/users/profile: Create or update user profile.
   Prompt Endpoints

   GET /api/prompt/[id]: Fetch a specific prompt.

   PATCH /api/prompt/[id]: Update a specific prompt.

   DELETE /api/prompt/[id]: Delete a specific prompt.

   Features
   Google Authentication: Securely log in using Google OAuth 2.0.
   Profile Management: Create and update user profiles.
   AI-Powered Prompts: Generate and manage AI-driven prompts.
   Responsive Design: Fully responsive design for mobile and desktop.

   Contributing
   Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include tests for new features.

   License
   This project is licensed under the MIT License.
