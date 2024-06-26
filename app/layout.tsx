import "../styles/global.css";

import { Inter } from "next/font/google";
import { AuthProvider } from '../context/AuthContext';
import StoreProvider from "@/provider/StoreProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Primavera - Homepage",
  description: "My Primavera dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://assets.usestyle.ai/seonajsplugin" defer id="seona-js-plugin"></script>
      </head>
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <AuthProvider>
            <StoreProvider>
              {children}
            </StoreProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
