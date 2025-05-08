"use client";
import { useState } from "react";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  return (
    <>
      <Header onMenuClick={() => setIsSideMenuOpen(!isSideMenuOpen)} />
      <SideMenu isOpen={isSideMenuOpen} />
      <main className={`pt-16 transition-all duration-300 ${isSideMenuOpen ? 'pl-64' : 'pl-0'}`}>
        {children}
      </main>
    </>
  );
} 
