import { useCallback, useMemo, useState } from "react";
import { useKeyBoradEventHook } from "../../utils"

function KeyBoard() {
  const [counter, setCounter] = useState(0)

  const CopyFunc = useCallback(
    () => {
      console.log("复制操作")
    },
    [],
  )

  useKeyBoradEventHook(useMemo(() => ["Control", 'c'], []), CopyFunc)

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>change</button>
    </div>
  )
}

export default KeyBoard;

// memo 只是作用于组件 页面的挂载卸载还是会执行的 只是不会执行render 方法