import { Poppins , Roboto } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { Toaster } from "sonner";
import Script from "next/script";

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
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Find Coworking & Office Spaces Across India | Flexo",
  description: "Discover top coworking spaces, managed offices, and commercial properties. Find your perfect office with Flexo. Trusted by leading companies - Flexo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no" />
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${poppins.className} antialiased overflow-x-hidden font-poppins [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]`}
      >
        <ReactQueryProvider>
          {children}
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
        <Script id="zoho-salesiq" strategy="afterInteractive">
          {`
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode: "0fc4dfe126a900d08cd66965a527bbcfebd987ea8870090a53afd7a22440aa53",
              values: {},
              ready: function () {}
            };
            var d = document;
            s = d.createElement("script");
            s.type = "text/javascript";
            s.id = "zsiqscript";
            s.defer = true;
            s.src = "https://salesiq.zoho.in/widget";
            t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
          `}
        </Script>
      </body>
    </html>
  );
}
