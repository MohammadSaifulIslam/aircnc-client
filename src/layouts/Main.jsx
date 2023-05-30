import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "../components/shared/Navbar/Navbar"

const Main = () => {
  return (
    <div className="relative">
      <Navbar />
      <ScrollRestoration />
      <div className='pt-28 pb-20'>
        <Outlet />
      </div>
    </div>
  )
}

export default Main
