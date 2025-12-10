import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { Toaster } from "sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // Font loading optimization - swap strategy
  preload: true, // Preload font for faster rendering
});

export const metadata = {
  title: "Find Coworking & Office Spaces Across India | Flexo",
  description: "Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, 
  userScalable: false, 
  // interactiveWidget: 'resizes-visual', // optional
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden font-poppins [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]`}
      >
        <ReactQueryProvider>
          <main id="main-content">{children}</main>
          <Toaster
            position="top-right"
            richColors
            theme="system"
            toastOptions={{
              style: {
                borderRadius: "10px",
                padding: "14px 16px",
                fontSize: "14px",
                fontWeight: 500,
              },
            }}
          />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
