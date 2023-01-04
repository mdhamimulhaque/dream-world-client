import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram, BsTwitter, BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { AuthContext } from '../../../Context/AuthProvider';

const Footer: React.FC = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <h2 className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl flex flex-col items-center text-gray-100">
                <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center">

                    {/* social  */}
                    <div className="py-4 px-2 flex">
                        <Link to="#link" className="text-gray-100">
                            <span className="sr-only">Facebook</span>
                            <BsFacebook className='text-xl duration-300 hover:text-green-500' />
                        </Link>
                        <Link to="#link" className="ml-3 text-gray-100">
                            <span className="sr-only">Twitter</span>
                            <BsTwitter className='text-xl duration-300 hover:text-green-500' />
                        </Link>
                        <Link to="#link" className="ml-3 text-gray-100">
                            <span className="sr-only">Instagram</span>
                            <BsInstagram className='text-xl duration-300 hover:text-green-500' />
                        </Link>
                        <Link to="#link" className="ml-3 text-gray-100">
                            <span className="sr-only">Linkedin</span>
                            <BsLinkedin className='text-xl duration-300 hover:text-green-500' />
                        </Link>
                        <Link to="#link" className="ml-3 text-gray-100">
                            <span className="sr-only">GitHub</span>
                            <BsGithub className='text-xl duration-300 hover:text-green-500' />
                        </Link>
                    </div>

                    {/* navigation */}
                    <nav className="py-4 px-2 flex flex-wrap justify-center list-none">
                        <li className="p-3 hover:font-semibold cursor-pointer hover:text-green-500 duration-200"><Link to="/">Home</Link></li>
                        <li className="p-3 hover:font-semibold cursor-pointer hover:text-green-500 duration-200"><Link to="/all-posts">All Posts</Link></li>
                        {
                            user?.email &&
                            <>
                                <li className="p-3 hover:font-semibold cursor-pointer hover:text-green-500 duration-200"><Link to="/author">Author</Link></li>
                                <li className="p-3 hover:font-semibold cursor-pointer hover:text-green-500 duration-200"><Link to="/author/add-post">Add Post</Link></li>
                            </>
                        }

                        <li className="p-3 hover:font-semibold cursor-pointer hover:text-green-500 duration-200"><Link to="/dashboard/home">Dashboard</Link></li>
                        <li className="p-3 hover:font-semibold cursor-pointer hover:text-green-500 duration-200"><Link to="/about-us">About Us</Link></li>
                        <li className="p-3 hover:font-semibold cursor-pointer hover:text-green-500 duration-200"><Link to="/contact">Contact</Link></li>
                    </nav>

                    {/* contact */}
                    <div className="px-2 flex flex-col">
                        <p className="flex text-xs text-gray-300 font-medium tracking-wide">
                            <BsFillEnvelopeFill className='mr-2' />
                            <Link to="#email">info@gmail.com</Link>
                        </p>
                        <p className="flex text-xs text-gray-300 font-bold">
                            <BsFillTelephoneFill className='mr-2' />
                            <span>+880 123 345</span>
                        </p>
                    </div>
                </div>

                {/* copyright */}
                <p className="pt-10 text-sm text-gray-300 text-center">&copy;Md Hamimul Haque All Rights Reserved.</p>

            </div>
        </>
    );
};

export default Footer;