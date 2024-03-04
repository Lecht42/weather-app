"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Layout, { UPDATION_INTERVAL } from "../page";
import CardList from "../_components/cards-list/card-list";
import {
  tryFetchPersons,
  tryUpdateWeather,
} from "@/lib/features/actions/saga-actions";
import { useEffect } from "react";
import { clearPersons } from "@/lib/features/persons/persons-slice";
import Button from "../_components/buttons/button";
import useInterval from "../_hooks/useInterval";

const NUMBER_OF_FETCHING_PERSONS = 12;

export default function PersonsPage({}: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const persons = useAppSelector((state) => state.persons).persons;

  useInterval(() => {
    dispatch(tryUpdateWeather(persons));
  }, UPDATION_INTERVAL);
  
  useEffect(() => {
    dispatch(tryFetchPersons(NUMBER_OF_FETCHING_PERSONS));

    return () => {
      dispatch(clearPersons(null));
    };
  }, []);

  const onLoadMoreClickHandler = () =>
    dispatch(tryFetchPersons(NUMBER_OF_FETCHING_PERSONS));

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
