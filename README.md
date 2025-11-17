# 📦 Backend Project Structure & Setup Guide

This project follows a feature-based folder structure for better scalability, maintainability, and clarity.  
Below is a detailed breakdown so developers can easily understand where to place files and what each folder is responsible for.

---

## 📂 Folder Structure

src/
├── config/ # App configuration files (DB connection, environment variables, logger)
│ ├── db.ts
│ ├── env.ts
│ └── logger.ts
├── constants/ # App-wide constants (e.g., user roles)
│ └── roles.ts
├── middlewares/ # Express middlewares (auth, error handling, validation)
│ ├── authMiddleware.ts
│ ├── errorHandler.ts
│ ├── notFoundHandler.ts
│ └── validateRequest.ts
├── modules/ # Feature-based modules (auth, user, product, etc.)
│ ├── auth/
│ │ ├── auth.controller.ts
│ │ ├── auth.service.ts
│ │ ├── auth.model.ts
│ │ ├── auth.routes.ts
│ │ └── auth.validation.ts
│ ├── user/
│ │ ├── user.controller.ts
│ │ ├── user.service.ts
│ │ ├── user.model.ts
│ │ ├── user.routes.ts
│ │ └── user.validation.ts
│ └── product/
│ ├── product.controller.ts
│ ├── product.service.ts
│ ├── product.model.ts
│ ├── product.routes.ts
│ └── product.validation.ts
├── routes/ # Main router combining all module routes
│ └── index.ts
├── types/ # Global TypeScript types and interfaces
│ └── index.d.ts
├── utils/ # Utility/helper functions
│ ├── ApiError.ts
│ ├── catchAsync.ts
│ ├── generateToken.ts
│ └── sendResponse.ts
├── app.ts # Express app setup and configuration (middleware, routes)
├── server.ts # Server entry point (starts the app)
└── index.ts # Optional barrel file for cleaner imports/exports



---

## 🗂 Folder & File Responsibilities

- **config/**  
  Holds all configuration files for your app like database connection setup, environment variables, and logger setup.

- **constants/**  
  Stores app-wide constants like user roles or other fixed values.

- **middlewares/**  
  Express middlewares for request processing such as authentication, error handling, request validation, and 404 handling.

- **modules/**  
  Each folder represents a feature/module containing everything related to that feature — models, controllers, services, routes, and validation.

- **routes/**  
  Combines all module-specific routes into a single main router to be used by the Express app.

- **types/**  
  Contains TypeScript type definitions and interfaces that are used globally.

- **utils/**  
  Utility functions and helpers used across the app, e.g., error classes, async wrappers, token generators, response formatters.

- **app.ts**  
  Creates and configures the Express app instance — sets up middleware and routes.

- **server.ts**  
  Starts the server by listening on a specified port.

- **index.ts** (optional)  
  Barrel file that re-exports modules or utilities to simplify imports elsewhere.

---

## 🚀 Project Setup & Running Instructions

### Clone the Repository

```bash
git clone 
cd backend


Install Dependencies-----
npm install
# or
yarn install


Set Up Environment Variables------
PORT=5000
DATABASE_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret

Run Development Server-----
npm run dev
# or
yarn dev

Build for Production-----
npm run build
npm start

📝 Notes for New Developers----
Follow the feature-first approach — keep controllers, services, models, routes, and validation together inside their feature folder.

Use middlewares/ for any cross-cutting concerns like authentication, error handling, or request validation.

Always use utils/ for reusable helpers, error handling, and token management.

Keep all global types and interfaces inside types/ for consistency.

Avoid hardcoding config values or secrets; use environment variables.

Write clean and descriptive filenames and keep the structure consistent.