import { useContext } from "react"
import storeContext from "./context"

export default function useSelector(cb) {

  const store = useContext(storeContext);

  return cb(store.getState())
}