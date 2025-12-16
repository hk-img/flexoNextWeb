"use client";
import dynamic from "next/dynamic";

// Footer wrapper - Client component to handle ssr: false
// This fixes the performance issue (50% -> 15% speed drop)
const Footer = dynamic(() => import("./Footer"), {
  ssr: false, // Client-side only - initial render block nahi karega
  loading: () => null, // Loading state nahi dikhao - footer below fold hai
});

export default function FooterWrapper() {
  return <Footer />;
}

