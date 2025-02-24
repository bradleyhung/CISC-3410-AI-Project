import { ReactNode } from "react";
import Head from "next/head";
import "./globals.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>Girls Who Code</title>
        <meta
          name="description"
          content="Empowering girls to code and change the world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow container mx-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
