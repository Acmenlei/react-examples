import { useCallback, useMemo, useState } from "react";
import { useQuery } from "../../apis/home";
import { useKeyBoradEventHook } from "../../utils";

function Home() {
  const SaveFunc = useCallback(
    () => console.log("保存操作"),
    [],
  )
  const [counter, setCounter] = useState(0)
  useKeyBoradEventHook(useMemo(() => ["Control", 's'], []), SaveFunc);
  const [data] = useQuery();
  return (
    <>
      <div>Home</div>
      <p>当前计数：{counter} </p>
      <p>当前请求值：{JSON.stringify(data)}</p>
      <button onClick={() => setCounter(counter + 1)}>change</button>
    </>
  )
}
export default Home;