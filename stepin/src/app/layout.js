
"use client";
import Navbar from "../components/Navbar"; // Importa a Navbar
import Footer from "../components/Footer"; // Importa o Footer
import BackButton from "@/components/BackButton";
// layout.js (Novo arquivo de layout) criado para separar o metadata, usePathname e use client.

export default function RootLayout({ children }) {

  return (
    <html lang="pt-pt">
      <body>
        <Navbar />
        <BackButton />
        {children}
      <Footer />
      </body>
    </html>
  );
}

