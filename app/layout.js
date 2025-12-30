import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Get me Chai",
  description: "This website is a crowd funding website for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-[87vh] bg-gradient-to-r from-[#243B55] to-[#141E30]">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
