import { useContext } from "react"
import storeContext from "./context"

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    return function (props) {
      const store = useContext(storeContext)
      // 将外部传递给新组件的props一并传递给被包裹的组件
      return (
        <Component
          {...props}
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)}
        />
      )
    }
  }
}

// const app = connect(a, b)(component)
// app有state，dispatch