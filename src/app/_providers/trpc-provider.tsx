"use client";

import { getQueryClient, getUrl, trpc } from "@/lib/trpc/trpc-client";
import { QueryClientProvider as TanStackReactQueryProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      transformer: superjson,
      url: getUrl(),
    }),
  ],
});

export default function TRPCProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <TanStackReactQueryProvider client={queryClient}>
        {children}
      </TanStackReactQueryProvider>
    </trpc.Provider>
  );
}
