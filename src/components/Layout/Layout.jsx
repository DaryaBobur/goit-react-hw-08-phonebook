import AppBar from "components/AppBar/AppBar"
import Loader from "components/Loader/Loader";
import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <>
            <AppBar />
            <Suspense fallback={ <Loader/> }>
                <Outlet/>
            </Suspense>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    )
}

export default Layout;