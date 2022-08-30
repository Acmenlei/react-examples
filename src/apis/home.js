import { useMemo } from "react";
import { useFetch } from "../utils";

export function useQuery(body = JSON.stringify('')) {
  return useFetch('/users', useMemo(() => ({ method: "Post", body }), [body]))
}