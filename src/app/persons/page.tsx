"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Layout from "../page";
import CardList from "../_components/cards-list/card-list";
import {
  tryFetchPersons,
  tryReplaceSavedPersons,
  tryUpdateWeather,
} from "@/lib/features/actions/saga-actions";
import { useEffect } from "react";
import { clearPersons } from "@/lib/features/persons/persons-slice";
import Button from "../_components/buttons/button";
import CircularProgressBar from "../_components/progress-bars/circular-progress-bar";

export default function PersonsPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const persons = useAppSelector((state) => state.persons).persons;

  useEffect(() => {
    dispatch(tryFetchPersons(12));
    const updater = setInterval(
      () => dispatch(tryUpdateWeather(persons)),
      300000
    );

    return () => {
      clearInterval(updater);
      dispatch(clearPersons(null));
    };
  }, []);

  const onLoadMoreClickHandler = () => dispatch(tryFetchPersons(12));

  if (!persons)
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <CircularProgressBar />
      </div>
    );

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
