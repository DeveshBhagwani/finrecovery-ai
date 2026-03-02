import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinRecovery AI",
  description: "Multi-Agent Framework for Financial Recovery Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <AuthProvider>
          <Header />
          <main className="pt-24 px-6">{children}</main>
        </AuthProvider>       
      </body>
    </html>
  );
}