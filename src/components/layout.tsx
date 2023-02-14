import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400 flex flex-col min-h-screen">
        <div className="grow">
          <Navbar />
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
