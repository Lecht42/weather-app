"use client";

import { useAppSelector } from "@/lib/hooks";
import Layout from "../page";
import CardList from "../_components/cards-list/card-list";

export default function PersonsPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const persons = useAppSelector((state) => state.persons).persons;

  return (
    <Layout>
      <CardList persons={persons} />
    </Layout>
  );
}
