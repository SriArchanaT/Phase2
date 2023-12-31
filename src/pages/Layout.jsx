import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';


function Layout() {
    return(
        <div className='box'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;