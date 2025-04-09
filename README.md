# Ready.js Lite

## 🚀 Overview

This boilerplate aims to help you kickstart your Next.js applications with a robust and scalable technology stack. It integrates modern tools and best practices to ensure your development experience is smooth, efficient, and enjoyable.

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/): Leverage the latest Next.js features with the App Router for optimized routing and rendering.
- [ShadCN UI](https://ui.shadcn.com/): A modern and customizable UI component library that integrates seamlessly with Tailwind CSS.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
- [TanStack Query](https://tanstack.com/query/v4/docs/overview): Powerful data fetching and state management for React applications.
- [React Hook Form](https://react-hook-form.com/get-started): Performant and flexible form management with minimal re-renders.
- [Prisma](https://www.prisma.io/docs/): Next-generation ORM for seamless database interactions.
- [Auth.js](https://authjs.dev/): Secure and flexible authentication strategies.
- [tRPC](https://trpc.io/docs): End-to-end type-safe APIs without the need for a separate schema.
- [TypeScript](https://www.typescriptlang.org/): Enhance your code with static type checking for improved reliability and maintainability.
- [Lucide Icons](https://lucide.dev/): A simple and customizable icon library for your UI needs.

## 📚 Getting Started

Follow these steps to set up and run the project locally.

### 🔧 Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (preferred) or [npm](https://www.npmjs.com/) / [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### 📦 Installation

1. **Install Dependencies**

   Using `pnpm`:

   ```bash
   pnpm install
   ```

   Or using `npm`:

   ```bash
   npm install
   ```

   Or using `Yarn`:

   ```bash
   yarn install
   ```

### 🚀 Running the Project

Start the development server:

```bash
pnpm dev
```

Or using `npm`:

```bash
npm run dev
```

Or using `Yarn`:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 📝 Configuration

1. **Environment Variables**

   Create a `.env.local` file in the root directory by copying the example:

   ```bash
   cp .env.dist .env.local
   ```

2. **Generate Auth Secret**

   Generate the `AUTH_SECRET` variable using the following command:

   ```bash
   npx auth secret
   ```

   Copy the generated secret and add it to your `.env` file:

   ```env
   AUTH_SECRET=your_generated_auth_secret
   ```

3. **Generate Encryption Key for Passwords**

   Run the following command to generate an encryption key:

   ```bash
   openssl rand -base64 32
   ```

   Add the generated key to your `.env` file:

   ```env
   ENCRYPTION_KEY=your_generated_key
   ```

### 🗄️ Database Setup

1. **Configure Database URL**

   Ensure your `.env` file has the correct `DATABASE_URL`. For example:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
   ```

2. **Run Migrations**

   Apply database migrations in development:

   ```bash
   pnpm migrate:dev
   ```

3. **Update Prisma Client**

   Whenever you make changes to `schema.prisma`, regenerate the Prisma Client:

   ```bash
   npx prisma generate
   ```

   **What It Does:**

   1. **Reads Your Prisma Schema:** The command looks at your `schema.prisma` file.
   2. **Generates Prisma Client:** Based on the schema, it generates the Prisma Client code.
   3. **Type-Safety and Autocompletion:** The generated client is fully typed based on your schema.

## 🗂️ Folder Structure

Here's an overview of the project's folder structure:

- **public/**: Contains static assets such as images, fonts, and other files that should be publicly accessible. These files are served as they are, without any processing by Next.js.
- **src/**: This is the main source folder where the application code resides.
  - **app/**: Contains the main Next.js pages and API routes. Here, you define the pages, routes, and possibly layouts for the application.
  - **lib/**: Holds utility functions and helpers that can be used across the project. This is a good place for reusable code that doesn’t belong to any specific feature.
  - **prisma/**: Contains the Prisma configuration and schema files. Used for database interactions, managing database schemas, and performing migrations.
  - **server/**: Holds server-side logic and configuration files, such as tRPC, next-safe-action or Auth.js configuration.
  - **styles/**: Contains global and component-specific CSS or TailwindCSS styles. This is where you define the look and feel of the application.
  - **types/**: Stores TypeScript type definitions. This folder helps keep type declarations organized, especially for larger projects with complex types.
- **middleware.ts**: Middleware file for Next.js, which can handle custom logic for requests, such as authentication or route handling, before they reach the final handler.

## 🧩 Usage

### 🔐 Authentication

The project uses **Auth.js** for handling authentication. Ensure that you have set up the necessary providers and callbacks as per your requirements.

### 📈 Client Side Data Fetching

Data is fetched using **tRPC** combined with **TanStack Query** for efficient state management and caching. This is not necessary while using server components.

### 📝 Forms

Form handling is managed with **React Hook Form** and Next.js server actions with **Next Safe Action**. See `register-form.tsx` for a complete example.

## 📫 Contact

For any inquiries or feedback, please contact me at [support@readyjs.dev](mailto:support@readyjs.dev).

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/v4/docs/overview)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)
- [Next Safe Action Documentation](https://next-safe-action.dev/docs/getting-started)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Auth.js Documentation](https://authjs.dev/)
- [tRPC Documentation](https://trpc.io/docs)
# ready-app
