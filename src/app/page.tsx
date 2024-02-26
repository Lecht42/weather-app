import { LoadScript } from "@react-google-maps/api";
import NavBar from "./_components/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <LoadScript
        googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY || ""}
      >
        <main>{children}</main>
      </LoadScript>
    </>
  );
}
