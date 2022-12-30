import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

const Login: React.FC = () => {
    return (
        <section className="bg-green-100 py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div
                            className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
                        >

                            <Link to="/"
                                className="cursor-pointer flex justify-center gap-2 text-gray-800 mb-5 items-center"
                            >
                                <img src={Logo} alt="logo" className='w-10' /> <span className='font-semibold text-xl '>KnowledgeTunes</span>
                            </Link>

                            <form>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className=" border-gray-300 w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className=" border-gray-300 w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                </div>
                                <div className="mb-10">
                                    <button className='w-full rounded border border-green-500 hover:shadow-lg bg-green-500 px-8 md:px-10 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:text-green-500'>Login</button>
                                </div>
                            </form>

                            <div className="-mx-2 mb-12 flex justify-center gap-2">
                                <button className=' rounded border border-blue-500 hover:shadow-lg bg-blue-500 px-8 md:px-10 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:text-blue-800'>Google</button>
                                <button className=' rounded border border-gray-800 hover:shadow-lg bg-gray-800 px-8 md:px-10 py-3 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring active:text-gray-800'>GitHub</button>
                            </div>
                            <p className="text-base text-gray-800">
                                Not a member yet?
                                <Link to="/author/registration" className="text-green-400 ml-2 hover:underline">
                                    Registration
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;