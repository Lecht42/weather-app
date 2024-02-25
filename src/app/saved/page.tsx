import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import PersonCard from "../_components/person-card/person-card";
import Layout from "../page";
import { useRef } from "react";

export default function Saved({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="inline-flex justify-center flex-wrap w-max">
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    </Layout>
  );
}
