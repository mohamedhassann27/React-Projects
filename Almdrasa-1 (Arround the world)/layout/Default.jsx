import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

function Default() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Default
