import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import PreLoader from "../Component/PreLoader/PreLoader";


const Main = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timedOut = setTimeout(() => {
            setLoading(false)
        }, 4000)
        return () => clearTimeout(timedOut)
    }, [])
    return (
        <>
            {
                loading ? <PreLoader /> :
                    <div className="min-h-screen font-serif">
                        <Header />
                        <Outlet />
                        <Footer />
                    </div>
            }
        </>

    );
};

export default Main;