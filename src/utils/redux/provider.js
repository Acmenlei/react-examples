import { useEffect, useState } from "react"
import storeContext from "./context"

export default function Provider({ children, store }) {
  const [, forceUpdate] = useState({})
  useEffect(() => {
    store.subscribe(() => forceUpdate({}))
  }, [store])

  return (
    <storeContext.Provider value={{ ...store }}>
      {children}
    </storeContext.Provider>
  )
}

