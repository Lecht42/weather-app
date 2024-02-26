"use client";

import { Person } from "@/lib/intefaces";
import PersonCard from "./person-card/person-card";

interface CardListProps {
  persons : Person[]; 
}

export default function CardList({ persons }: CardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 px-16">
      {persons.map((e, i) => (
        <PersonCard key={i} {...e} />
      ))}
    </div>
  );
}
