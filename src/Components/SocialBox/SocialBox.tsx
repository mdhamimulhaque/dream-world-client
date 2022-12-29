import React from 'react';
import Logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';

const SocialBox = () => {
    return (
        <>
            <div className="site_logo flex items-center gap-2">
                <img src={Logo} alt="img"
                    className='w-10'
                />
                <span className='text-2xl'>Dream World</span>
            </div>
            <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            <div className="social_box flex justify-center">
                <div className="py-4 px-2 flex">
                    <Link to="#link" className="text-gray-800 duration-300 hover:text-green-500">
                        <span className="sr-only">Facebook</span>
                        <BsFacebook className='text-2xl' />
                    </Link>
                    <Link to="#link" className="ml-3 text-gray-800 duration-300 hover:text-green-500">
                        <span className="sr-only">Twitter</span>
                        <BsTwitter className='text-2xl' />
                    </Link>
                    <Link to="#link" className="ml-3 text-gray-800 duration-300 hover:text-green-500">
                        <span className="sr-only">Instagram</span>
                        <BsInstagram className='text-2xl' />
                    </Link>
                    <Link to="#link" className="ml-3 text-gray-800 duration-300 hover:text-green-500">
                        <span className="sr-only">Linkedin</span>
                        <BsLinkedin className='text-2xl' />
                    </Link>
                    <Link to="#link" className="ml-3 text-gray-800 duration-300 hover:text-green-500">
                        <span className="sr-only">GitHub</span>
                        <BsGithub className='text-2xl' />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SocialBox;