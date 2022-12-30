import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Header/Header';

const Secondary: React.FC = () => {
    return (
        <div>
            {/* header */}
            <header className='w-full bg-gray-800 text-gray-100 body-font shadow-sm'>
                <Header />
            </header>
            {/* main body */}
            <main>
                <Outlet />
            </main>
            {/* footer */}
            <footer className='className="w-full py-6 px-4 bg-gray-800'>
                <Footer />
            </footer>
        </div>
    );
};

export default Secondary;