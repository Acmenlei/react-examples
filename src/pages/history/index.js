import { useSelector, useDispatch } from "../../utils/redux"
import { increment, decrement } from "../../store/reducer"

function Histroy() {
  const { counter } = useSelector((state) => ({ counter: state.counter.counter }))
  const dispatch = useDispatch();

  return (
    <>
      history页面
      <p>{counter}</p>
      <button onClick={() => dispatch(increment(1))}>increment</button>
      <button onClick={() => dispatch(decrement(1))}>decrement</button>
    </>
  )
}

export default Histroy