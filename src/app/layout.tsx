import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Anton} from "next/font/google";

export const metadata: Metadata = {
  title: "SPACE",
  description: "A website for spacial knowlage",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700','900'],

});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700','900'],
});

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`w-full h-screen font-poppins antialiased bg-dark-900 text-light 
        overflow-x-hidden ${anton.variable} ${poppins.variable} ${inter.variable}`}
      >
        {children}
        
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" async/>
      </body>
    </html>
  );
}
