export default async function HomePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-16 px-4 py-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Ready.js Lite</h1>
        <p className="text-lg">
          A robust and scalable Next.js boilerplate for modern web applications
        </p>
      </div>

      {/* Disclaimer */}
      <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4 text-center">
        <p>
          This is the lite version of{" "}
          <a
            href="https://readyjs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Ready.js
          </a>
          , a more comprehensive boilerplate with additional features and
          tooling. Check out the full version for even more capabilities!
        </p>
      </div>

      {/* Overview */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">🚀 Overview</h2>
        <p className="mb-6">
          This boilerplate aims to help you kickstart your Next.js applications
          with a robust and scalable technology stack. It integrates modern
          tools and best practices to ensure your development experience is
          smooth, efficient, and enjoyable.
        </p>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">🛠️ Technologies Used</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {technologies.map((tech) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border p-4 transition-colors hover:border-primary"
            >
              <h3 className="mb-2 font-medium">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">
                {tech.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">📚 Getting Started</h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-xl font-medium">🔧 Prerequisites</h3>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Node.js (v18 or later)</li>
              <li>pnpm (preferred) or npm / Yarn</li>
              <li>Git</li>
            </ul>
          </div>

          {/* Installation */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">📦 Installation</h3>
            <div className="space-y-2">
              <p>Using pnpm:</p>
              <pre className="rounded-lg bg-muted p-4">pnpm install</pre>
            </div>
          </div>

          {/* Configuration */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">📝 Configuration</h3>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-medium">1. Environment Variables</h4>
                <pre className="rounded-lg bg-muted p-4">
                  cp .env.dist .env.local
                </pre>
              </div>
              <div>
                <h4 className="mb-2 font-medium">2. Generate Auth Secret</h4>
                <pre className="rounded-lg bg-muted p-4">npx auth secret</pre>
              </div>
              <div>
                <h4 className="mb-2 font-medium">3. Generate Encryption Key</h4>
                <pre className="rounded-lg bg-muted p-4">
                  openssl rand -base64 32
                </pre>
              </div>
            </div>
          </div>

          {/* Database Setup */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">🗄️ Database Setup</h3>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-medium">1. Configure Database URL</h4>
                <pre className="rounded-lg bg-muted p-4 text-sm">
                  DATABASE_URL=&quot;postgresql://user:password@localhost:5432/mydb?schema=public&quot;
                </pre>
              </div>
              <div>
                <h4 className="mb-2 font-medium">2. Run Migrations</h4>
                <pre className="rounded-lg bg-muted p-4">pnpm migrate:dev</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Folder Structure */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">🗂️ Folder Structure</h2>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <p className="mb-2 font-medium">public/</p>
            <p className="text-sm text-muted-foreground">
              Static assets such as images and fonts
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="mb-2 font-medium">src/</p>
            <ul className="ml-4 list-inside list-disc space-y-2 text-sm text-muted-foreground">
              <li>app/: Next.js pages and API routes</li>
              <li>lib/: Utility functions and helpers</li>
              <li>prisma/: Database configuration</li>
              <li>server/: Server-side logic</li>
              <li>styles/: Global styles</li>
              <li>types/: TypeScript definitions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">🧩 Usage</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-xl font-medium">🔐 Authentication</h3>
            <p>
              Uses Auth.js for handling authentication. Configure providers and
              callbacks as needed.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-medium">
              📈 Client Side Data Fetching
            </h3>
            <p>
              Uses tRPC with TanStack Query for efficient state management and
              caching.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-medium">📝 Forms</h3>
            <p>
              Managed with React Hook Form and Next Safe Action. See
              register-form.tsx for examples.
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">📚 Resources</h2>
        <div className="grid gap-4">
          {resources.map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border p-4 transition-colors hover:border-primary"
            >
              {resource.name}
            </a>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-semibold">📫 Contact</h2>
        <p>
          For any inquiries or feedback, please contact us at{" "}
          <a
            href="mailto:support@readyjs.dev"
            className="text-primary hover:underline"
          >
            support@readyjs.dev
          </a>
        </p>
      </div>
    </div>
  );
}

const technologies = [
  {
    name: "Next.js",
    description:
      "Latest features with App Router for optimized routing and rendering",
    url: "https://nextjs.org/",
  },
  {
    name: "ShadCN UI",
    description: "Modern and customizable UI component library",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    url: "https://tailwindcss.com/",
  },
  {
    name: "TanStack Query",
    description: "Powerful data fetching and state management",
    url: "https://tanstack.com/query/v4/docs/overview",
  },
  {
    name: "React Hook Form",
    description: "Performant form management with minimal re-renders",
    url: "https://react-hook-form.com/",
  },
  {
    name: "Prisma",
    description: "Next-generation ORM for seamless database interactions",
    url: "https://www.prisma.io/",
  },
  {
    name: "Auth.js",
    description: "Secure and flexible authentication strategies",
    url: "https://authjs.dev/",
  },
  {
    name: "tRPC",
    description: "End-to-end type-safe APIs",
    url: "https://trpc.io/",
  },
  {
    name: "TypeScript",
    description: "Enhanced code with static type checking",
    url: "https://www.typescriptlang.org/",
  },
];

const resources = [
  { name: "Next.js Documentation", url: "https://nextjs.org/docs" },
  { name: "ShadCN UI Documentation", url: "https://ui.shadcn.com/" },
  { name: "Tailwind CSS Documentation", url: "https://tailwindcss.com/docs" },
  {
    name: "TanStack Query Documentation",
    url: "https://tanstack.com/query/v4/docs/overview",
  },
  {
    name: "React Hook Form Documentation",
    url: "https://react-hook-form.com/get-started",
  },
  {
    name: "Next Safe Action Documentation",
    url: "https://next-safe-action.dev/docs/getting-started",
  },
  { name: "Prisma Documentation", url: "https://www.prisma.io/docs/" },
  { name: "Auth.js Documentation", url: "https://authjs.dev/" },
  { name: "tRPC Documentation", url: "https://trpc.io/docs" },
];
