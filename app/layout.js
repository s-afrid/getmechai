import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";

export const metadata = {
  title: "Get me Chai",
  description: "This website is a crowd funding website for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-[#243B55] to-[#141E30] text-white">
        <SessionWrapper>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-r from-[#243B55] to-[#141E30] text-white">
        {children}
        </div>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
