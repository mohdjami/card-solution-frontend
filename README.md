# Admin Panel Application

## Overview

This application provides a full-fledged Admin Panel with authentication and authorization using the NextAuth library for Next.js. The frontend is built with Next.js, Shadcn library, and Tailwind CSS for responsiveness. The backend is implemented using Next.js server components with API routes.

## Backend API Routes

### User Management

- **POST /api/createUser**
  - Create a new user (signup).
- **POST /api/login**
  - Login an existing user.

### Email Management

- **POST /api/email**
  - For users to register their email.
- **GET /api/email**
  - For admins to view the emails of registered users.
- **GET /api/email/search**
  - For admins to search the emails of registered users.

### Button Management

- **POST /api/updateButton**

  - Update the button in the header section. Takes a JSON object containing the text for the button.

- **GET /api/updateButton**
  - Get the current text in the button.

### Logo Management

- **GET /api/getLogo**

  - Get the current URL of the logo.

- **POST /api/updateLogo**
  - Update the URL of the logo. Send a JSON object { "logoURL": "your_new_url" }.

## Usage

1. Admins can sign in using the following credentials:

   - Email: admin@admin.com
   - Password: adminadmin

2. After signing in, admins can view the emails of registered users, add or remove emails, and use a search bar to find specific emails.

3. The "Add Email" button is controlled by the `/api/updateButton` route. Admins can update the text displayed on the button.

4. To update the logo URL:
   - Click on the upload logo button and upload the desired image and it will be reflected in the logo.

## Frontend

The frontend is developed using Next.js and the Shadcn library. Tailwind CSS is used for responsiveness. The `useSession` hook is utilized to manage sessions, allowing access to the admin panel based on user roles. The Navbar is dynamic.

## Developer Information

The developer specializes in backend development with a focus on scaling applications for millions of concurrent users. The latest tools and techniques are applied to achieve fast data processing.

Feel free to explore the admin panel and make use of the functionalities provided.
