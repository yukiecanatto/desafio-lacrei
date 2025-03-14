import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "Desafio Lacrei",
  
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
