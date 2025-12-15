"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function ReactQueryProvider({ children }) {
  // Singleton pattern - QueryClient ko sirf ek baar create karo
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute - data ko fresh consider karo
            gcTime: 5 * 60 * 1000, // 5 minutes - cache cleanup time (pehle cacheTime tha)
            refetchOnWindowFocus: false, // window focus pe automatic refetch mat karo
            retry: 1, // sirf 1 baar retry karo on failure
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
