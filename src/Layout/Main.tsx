import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <header className="w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm">
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer className='className="w-full py-6 px-4 bg-gray-800'>
                <Footer />
            </footer>
        </div>
    );
};

export default Main;