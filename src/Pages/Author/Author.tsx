import React from 'react';
import Footer from '../../Components/Shared/Footer/Footer';
import Header from '../../Components/Shared/Header/Header';
import AuthorPostCard from './AuthorPostCard/AuthorPostCard';

const Author = () => {
    return (
        <div>
            {/* header */}
            <header className='w-full bg-gray-800 text-gray-100 body-font shadow-sm'>
                <Header />
            </header>
            {/* main body */}
            <main className='grid grid-cols-12 px-4 mt-5'>
                <AuthorPostCard />
                <AuthorPostCard />
                <AuthorPostCard />
                <AuthorPostCard />
                <AuthorPostCard />
            </main>
            {/* footer */}
            <footer className='className="w-full py-6 px-4 bg-gray-800'>
                <Footer />
            </footer>
        </div>
    );
};

export default Author;