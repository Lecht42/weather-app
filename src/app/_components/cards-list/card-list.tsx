"use client";

import { CardMode, Person } from "@/lib/intefaces";
import PersonCard from "./person-card/person-card";

interface CardListProps {
  persons : Person[]; 
  mode?: CardMode;
}

export default function CardList({ persons, mode = CardMode.Default }: CardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 px-16">
      {persons.map((e, i) => (
        <PersonCard key={i} saved={mode === CardMode.Saved}  {...e} />
      ))}
    </div>
  );
}
