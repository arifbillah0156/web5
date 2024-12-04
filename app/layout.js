import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "দ্বীনদার পাত্র/পাত্রীর সন্ধান",
  description: "দ্বীনদার পাত্র/পাত্রীর সন্ধান",
  icons: "/Web Icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
