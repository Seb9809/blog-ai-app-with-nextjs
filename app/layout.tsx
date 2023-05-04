import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "app/(shared)/Navbar";
import Footer from "app/(shared)/Footer";

// Load Inter font with the latin subset
const inter = Inter({ subsets: ["latin"] });

// Set metadata for the page
export const metadata = {
  title: "Blog AI App",
  description: "Blog built in Next JS that uses AI",
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <body>
        {/* Render the Navbar component */}
        <Navbar />

        {/* Render the children of the RootLayout */}
        {children}

        {/* Render the Footer component */}
        <Footer />
      </body>
    </html>
  );
}
