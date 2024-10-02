import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
// import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Next.js Portfolio Created with Three.js and Tailwind CSS | %s | CodeBucks",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS by CodeBucks",
  },
  description:
    "A unique creative portfolio designed by CodeBucks with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Checkout CodeBucks on youtube.",
    // icons:{
    //   icon:['favicon.ico']
    // }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <head>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                  rel="icon"
                  href="/icon?<generated>"
                  type="image/<generated>"
                  sizes="<generated>"
                  />
                  <link
                    rel="apple-touch-icon"
                    href="/apple-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                  />
            </head>
            
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
