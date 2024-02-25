import NavBar from "./_components/navbar/navbar";
import StoreProvider from "./store-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <NavBar />
      <main className="flex justify-center justify-items-center">{children}</main>
    </StoreProvider>
  );
}
