import { configureStore } from "@reduxjs/toolkit" // 编译时运行 导出的是一个引用
import counterReducer from "./reducer"

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store;