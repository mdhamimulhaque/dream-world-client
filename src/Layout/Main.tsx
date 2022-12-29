import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Header from '../Components/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <header className="w-full bg-gray-800 text-gray-100 body-font shadow-sm">
                <Header />
            </header>
            <main className='grid grid-cols-12 gap-4 '>
                <section className='col-span-12 md:col-span-8 lg:col-span-9 bg-red-400'>
                    <Outlet />
                </section>
                <aside className='col-span-12 md:col-span-4 lg:col-span-3 bg-green-400'>
                    sidebar area
                </aside>
            </main>
            <footer className='className="w-full py-6 px-4 bg-gray-800'>
                <Footer />
            </footer>
        </div>
    );
};

export default Main;