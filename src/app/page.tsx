import { LoadScript } from "@react-google-maps/api";
import NavBar from "./_components/navbar/navbar";
import StoreProvider from "./store-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <LoadScript
        googleMapsApiKey="" // Ideally, you should provide the API key here
      >
        <main>{children}</main>
      </LoadScript>
    </>
  );
}
