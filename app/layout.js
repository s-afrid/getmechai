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
        <div className="min-h-[87vh] items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#64e_100%)]">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
