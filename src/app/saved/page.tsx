"use client";

import { useAppSelector } from "@/lib/hooks";
import PersonCard from "../_components/person-card/person-card";
import Layout from "../page";

export default function Saved({ children }: { children: React.ReactNode }) {
  const cards = useAppSelector((state) => state.persons).persons;

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6 my-6 ">
        {cards.map((e, i) => (
          <PersonCard
            key={i}
            name={e.name}
            gender={e.gender}
            location={e.location}
            email={e.email}
            photoUrl={e.photoUrl}
          />
        ))}
      </div>
    </Layout>
  );
}
