import { NavLink, useLocation, useRoutes } from "react-router-dom"
import { Suspense } from "react"
import routes from "./router"
import Home from './pages/home'

function App() {
  const { pathname, search } = useLocation()
  console.log(Home())
  return (
    <Suspense fallback={<div> current content is loading... </div>}>
      {pathname}
      {search}
      {useRoutes(routes)}
      <NavLink to={"/"}>home</NavLink>
      <NavLink to="/history">history</NavLink>
      <NavLink to="/keyborad">keyboradw</NavLink>
      <NavLink to="/smartSpeek">smartSpeek</NavLink>
    </Suspense>
  );
}

export default App;
