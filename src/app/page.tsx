import { LoadScript } from "@react-google-maps/api";
import NavBar from "./_components/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <LoadScript
        googleMapsApiKey=""
      >
        <main>{children}</main>
      </LoadScript>
    </>
  );
}
