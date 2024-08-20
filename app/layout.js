import { Providers } from './providers';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VAG Clinic",
  description: "The first Queer and BIPOC-led, employee-directed abortion clinic to provide abortion care in all stages of pregnancy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
