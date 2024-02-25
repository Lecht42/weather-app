"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { tryFetchPersons } from "@/lib/features/actions/saga-actions";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(tryFetchPersons(3));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
