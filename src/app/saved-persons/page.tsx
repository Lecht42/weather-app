"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Layout from "../page";
import CardList from "../_components/cards-list/card-list";
import { useEffect } from "react";
import { tryLoadPersons } from "@/lib/features/actions/saga-actions";
import { CardMode } from "@/lib/intefaces";

export default function SavedPersonsPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const savedPersons = useAppSelector((state) => state.persons).persons;

  useEffect(() => {
    dispatch(tryLoadPersons(null));
  }, [dispatch]);

  return (
    <Layout>
      <CardList persons={savedPersons} mode={CardMode.Saved} />
    </Layout>
  );
}
