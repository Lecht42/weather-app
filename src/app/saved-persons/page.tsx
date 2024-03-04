"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Layout, { UPDATION_INTERVAL } from "../page";
import CardList from "../_components/cards-list/card-list";
import { useEffect } from "react";
import {
  tryLoadPersons,
  tryReplaceSavedPersons,
  tryUpdateWeather,
} from "@/lib/features/actions/saga-actions";
import { clearPersons } from "@/lib/features/persons/persons-slice";
import useInterval from "../_hooks/useInterval";

export default function SavedPersonsPage({}: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const savedPersons = useAppSelector((state) => state.persons).persons;

  useInterval(() => {
    dispatch(tryUpdateWeather(savedPersons));
  }, UPDATION_INTERVAL);

  useEffect(() => {
    dispatch(tryLoadPersons(null));

    return () => {
      tryReplaceSavedPersons(savedPersons);
      dispatch(clearPersons(null));
    };
  }, []);

  return (
    <Layout>
      <CardList persons={savedPersons} />
    </Layout>
  );
}
