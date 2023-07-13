import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ai Prompt Application",
  description: "Get Full Prompt For Easy Work Flow",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="main_container">
            <div className="gradient_container" />
          </div>
          <main className="global_container">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
