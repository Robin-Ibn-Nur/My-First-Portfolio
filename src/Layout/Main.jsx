import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="min-h-screen font-serif">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default Main;