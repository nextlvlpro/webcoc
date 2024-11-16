import { Poppins } from "next/font/google";
import "./globals.css";

//components (app/components)
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Clash Companion",
  description:
    "Dive into the world of Clash of Clans with detailed insights about players, clans, and global leaderboards. Perfect for players and fans alike!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
