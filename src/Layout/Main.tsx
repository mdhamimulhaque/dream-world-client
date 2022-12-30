import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Header/Header';
import MainSidebar from '../Components/Shared/MainSidebar/MainSidebar';

const Main: React.FC = () => {
    return (
        <div>
            <header className="w-full bg-gray-800 text-gray-100 body-font shadow-sm">
                <Header />
            </header>
            <main className='grid grid-cols-12 gap-2 bg-gray-100'>
                <section className='col-span-12 lg:col-span-9 '>
                    <Outlet />
                </section>
                <aside className='col-span-12  lg:col-span-3'>
                    <MainSidebar />
                </aside>
            </main>
            <footer className='className="w-full py-6 px-4 bg-gray-800'>
                <Footer />
            </footer>
        </div>
    );
};

export default Main;