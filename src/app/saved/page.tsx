"use client";

import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import PersonCard from "../_components/person-card/person-card";
import Layout from "../page";
import { useRef } from "react";
import { Person } from "@/lib/intefaces";

export default function Saved({ children }: { children: React.ReactNode }) {
  const cards = useAppSelector((state) => state.persons).persons;

  return (
    <Layout>
      <div className="inline-flex justify-center flex-wrap w-max">
        {cards.map((e, i) => (
          <PersonCard
            key={i}
            name={""}
            gender={""}
            location={""}
            email={""}
            photoUrl={""}
            coordinates={undefined}
          />
        ))}
      </div>
    </Layout>
  );
}
