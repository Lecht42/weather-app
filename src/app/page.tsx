import NavBar from "./_components/navbar/navbar";
import StoreProvider from "./store-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
