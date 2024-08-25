// Next font imports
import { Poppins } from "next/font/google";

// Styles
import { Providers } from './providers';
import "./globals.css";

// configure Google font
const poppins = Poppins({
  weight: ['400', '500', '700'],
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
