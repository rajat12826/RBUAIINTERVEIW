import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Header from "./dashboard/_components/Header";

 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "AI Interviewer",
  description: "AI Interviewer",
  twitter: {

    card: "summary_large_image", // Use "summary_large_image" for larger previews
    title: "AI Interviewer",
    description: "AI Interviewer",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwXABYhxhmEUaSOihMcp7yk-yjCTX_lgpCUVRbYGxa3m5LMUDH",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.jpeg" type="image/x-icon" />
      
      </head>
      <body className="font-product dark:bg-[#2b2a2a] antialiased">
        <ThemeProvider attribute="class">
          <ClerkProvider>
          <Toaster />
          {/* <Header/> */}
            {children}

          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
