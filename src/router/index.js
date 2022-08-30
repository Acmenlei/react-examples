import React from "react";

const Home = React.lazy(() => import("../pages/home"))
const History = React.lazy(() => import("../pages/history"))
const KeyBoard = React.lazy(() => import("../pages/keyborad"))
const SmartSpeek = React.lazy(() => import("../pages/smartSpeek"))

const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/history',
    element: <History/>
  },
  {
    path: '/keyborad',
    element: <KeyBoard/>
  },
  {
    path: '/smartSpeek',
    element: <SmartSpeek/>
  }
]

export default routes;