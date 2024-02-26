"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Layout from "../page";
import CardList from "../_components/cards-list/card-list";
import {
  tryFetchPersons,
  tryLoadPersons,
} from "@/lib/features/actions/saga-actions";
import { useEffect } from "react";
import { clearPersons } from "@/lib/features/persons/persons-slice";
import Button from "../_components/buttons/button";

export default function PersonsPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const persons = useAppSelector((state) => state.persons).persons;

  useEffect(() => {
    dispatch(clearPersons(null));
    dispatch(tryFetchPersons(12));
  }, [dispatch]);

  const onLoadMoreClickHandler = () => dispatch(tryFetchPersons(12));

  return (
    <Layout>
      <CardList persons={persons} />
      <div className="flex justify-center items-center h-32">
        <Button onClick={onLoadMoreClickHandler} className="text-xl">
          Load more
        </Button>
      </div>
    </Layout>
  );
}
