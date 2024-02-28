import React from "react";
import { LoadScript } from "@react-google-maps/api";
import NavBar from "./_components/navbar/navbar";
import CircularProgressBar from "./_components/progress-bars/circular-progress-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="mt-5">{children}</main>
    </>
  );
}
