import { Providers } from './providers';
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "VAG Clinic",
  description: "The first Queer and BIPOC-led, employee-directed abortion clinic to provide abortion care in all stages of pregnancy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
