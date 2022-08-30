import { useContext } from "react";
import storeContext from "./context";

export default function useDispatch() {
  const store = useContext(storeContext)
  return store.dispatch;
}