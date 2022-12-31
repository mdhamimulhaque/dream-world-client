import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png';
import uImg from '../../../img/mdhamimulhaque.jpg';
import Button from '../../Button/Button';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../../Firebase/FirebaseConfig';
import { AuthContext } from '../../../Context/AuthProvider';

const auth = getAuth(app);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user } = useContext(AuthContext);
    // --->handleLogOut
    const handleLogOut = async () => {

        signOut(auth)
            .then(() => {
                console.log('logout successfully')
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <>
            {/* main menu */}
            <div className="container mx-auto flex justify-between items-center py-7 px-5">
                {/* logo */}
                <Link to="/" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
                    <img className='w-8' src={logo} alt="img" />
                    <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">KnowledgeTunes</span>
                </Link>
                {/* Navbar */}
                <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
                    <Link to="/" className="mr-8 hover:text-green-400">Home</Link>
                    <Link to="/all-posts" className="mr-8 hover:text-green-400">All Posts</Link>
                    <Link to="/author" className="mr-8 hover:text-green-400">Author</Link>
                    <Link to="/about-us" className="mr-8 hover:text-green-400">About Us</Link>
                    <Link to="/contact" className="mr-8 hover:text-green-400">Contact</Link>


                </nav>
                {/* Avatar */}
                <div className="hidden relative sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer border-2 rounded-full border-green-300">
                    <img src={uImg} alt="img"
                        className='rounded-full h-8 w-8'
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    />
                    {
                        isDropdownOpen &&
                        <div className='absolute z-50 top-9 right-0 bg-gray-800 rounded px-4 py-2'>
                            {
                                !user?.email ?
                                    <>
                                        <div>
                                            <Link to='/author/login' className='mb-2 hover:text-green-300'>Login</Link>
                                        </div>
                                        <div>
                                            <Link to='/author/registration' className='mb-2 hover:text-green-300'>Registration</Link>
                                        </div>
                                    </> :
                                    <div>
                                        <Link to='/'
                                            className='mb-2 hover:text-red-300'
                                            onClick={handleLogOut}
                                        >
                                            LogOut
                                        </Link>
                                    </div>
                            }
                        </div>
                    }

                </div>
                {/* hand burger icon  */}
                <button
                    className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:green-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <HiBars3BottomRight className='text-2xl' />
                </button>
            </div>

            {/* mobile menu */}
            {isOpen &&
                <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
                    <Link to="/" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-green-400">Home</Link>
                    <Link to="/all-posts" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-green-400">All Posts</Link>
                    <Link to="/author" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-green-400">Author</Link>
                    <Link to="/about-us" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-green-400">About</Link>
                    <Link to="/contact" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-green-400">Contact</Link>


                    {
                        !user?.email ?
                            <>
                                <div className="button_box px-3 py-2 rounded-md">
                                    <Link to='/author/login'><Button>Login</Button></Link>
                                </div>
                                <div className="button_box px-3 py-2 rounded-md">
                                    <Link to='/author/registration'><Button>Registration</Button></Link>
                                </div>
                            </> :
                            <div className="button_box px-3 py-2 rounded-md">
                                <Link to='/'
                                    onClick={handleLogOut}
                                    className='inline-block rounded border border-red-500 bg-red-500 px-12 py-3 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring active:text-red-500'>
                                    LogOut
                                </Link>
                            </div>
                    }

                </div>
            }

        </>
    );
};

export default Header;