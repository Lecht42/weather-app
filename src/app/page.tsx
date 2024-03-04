import React from "react";
import NavBar from "./_components/navbar/navbar";

export const UPDATION_INTERVAL = 300000;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="mt-5">{children}</main>
    </>
  );
}
