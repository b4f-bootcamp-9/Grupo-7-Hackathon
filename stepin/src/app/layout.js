
"use client";
import Navbar from "../components/Navbar"; // Importa a Navbar
import Footer from "../components/Footer"; // Importa o Footer

export default function RootLayout({ children }) {

  return (
    <html lang="pt-pt">
      <body>
        <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}

