import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const LayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="pt-24 min-h-[calc(100vh-68px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;