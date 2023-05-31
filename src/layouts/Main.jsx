import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../components/shared/Footer/Footer"
import Navbar from "../components/shared/Navbar/Navbar"

const Main = () => {
  return (
    <div className="relative">
      <Navbar />
      <ScrollRestoration />
      <div className='pt-28 pb-20'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Main
