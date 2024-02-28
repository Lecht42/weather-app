"use client";

import React from 'react';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Layout from "../page";
import CardList from "../_components/cards-list/card-list";
import { useEffect } from "react";
import {
  tryLoadPersons,
  tryReplaceSavedPersons,
  tryUpdateWeather,
} from "@/lib/features/actions/saga-actions";
import { clearPersons } from "@/lib/features/persons/persons-slice";
import CircularProgressBar from "../_components/progress-bars/circular-progress-bar";

export default function SavedPersonsPage({}: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const savedPersons = useAppSelector((state) => state.persons).persons;

  useEffect(() => {
    dispatch(tryLoadPersons(null));
    const updater = setInterval(
      () => dispatch(tryUpdateWeather(savedPersons)),
      300000
    );

    return () => {
      clearInterval(updater);
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
