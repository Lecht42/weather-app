"use client";

import { useAppSelector } from "@/lib/hooks";
import Layout from "../page";
import CardList from "../_components/cards-list/card-list";

export default function SavedPersonsPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const savedPersons = useAppSelector((state) => state.persons).savedPersons;

  return (
    <Layout>
      <CardList persons={savedPersons} />
    </Layout>
  );
}
