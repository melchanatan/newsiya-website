import "../styles/globals.css";
import Navbar from "../components/Navbar";
import localFont from "next/font/local";
import Footer from "../components/Footer";

const maehongson = localFont({
  src: [
    {
      path: "../fonts/Maehongson/pk_maehongson_regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Maehongson/pk_maehongson-semi_bold-webfont.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-maehongson",
});

export const metadata = {
  title: "Newsila Hotel",
  description: "Generated by create next app",
};

export const revalidate = 10;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={maehongson.className + " "}>
        <Navbar />
        {children}
        <section id="footer" className="bg-primary !py-0">
          <Footer />
        </section>
      </body>
    </html>
  );
}
