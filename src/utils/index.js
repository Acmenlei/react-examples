import { useEffect, useState } from "react";

export function useKeyBoradEventHook(keyborads, handler) {
  // 组合键
  useEffect(() => {
    const keyBoradEventHandler = (event) => {
      const _isCompose = Array.isArray(keyborads);
      // 判断是Ctrl 还是 Alt
      const _isAlt = _isCompose && keyborads.includes("Alt");
      const _isControl = _isCompose && keyborads.includes("Control");
      if (_isAlt) {
        // 是否符合条件 (mac结合Alt事件会有问题)
        event.altKey && keyborads.includes(event.key) && handler();
        return;
      }
      if (_isControl) {
        event.ctrlKey && keyborads.includes(event.key) && handler();
        return;
      }
      // 正常情况 只有一个键盘事件的清情况
      keyborads === event.key && handler();
    }

    window.addEventListener("keyup", keyBoradEventHandler)

    return () => {
      window.removeEventListener("keyup", keyBoradEventHandler);
    }
  }, [keyborads, handler])

}

// 将冗余的data都抽离
export function useFetch(url, options = { method: 'Get', headers: null }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    // console.log("reredner...")
    async function request() {
      if (!options.headers) {
        const GET = 'application/x-www-form-urlencoded', POST = 'application/json';
        options.headers = new Headers();
        options.headers.append("Content-Type", options.method === 'Get' ? GET : POST)
      }
      try {
        let baseUrl = 'https://jsonplaceholder.com';
        const res = await fetch(baseUrl + url, options)
        const result = await res.json();
        setData(result);
      } catch (err) {
        err.message ? setData(err.message) : setData(err);
      }
    }
    request();
  }, [url, options])

  return [data]
}