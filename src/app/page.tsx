import NavBar from "./_components/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="flex justify-center justify-items-center">{children}</main>
    </>
  );
}
