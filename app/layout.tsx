import type { Metadata } from 'next'
import { poppins, open_sans } from "./ui/fonts";
import './globals.css'
import FooterSection from './components/footerSection';
import Navbar from './components/navbar';

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800", "900"],
// });
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${open_sans.variable}`}>

      <body className={`light`}>
        <Navbar />
        {children}
      <FooterSection />
      </body>
    </html>
  )
}
