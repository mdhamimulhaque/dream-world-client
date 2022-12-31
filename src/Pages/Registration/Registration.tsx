import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

// ---> react hook form
type Inputs = {
    fullName: string;
    email: string;
    password: any;
    userImg: string;
}

const Registration: React.FC = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const registrationSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div className="w-full bg-green-100">
            <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
                <div className="w-full overflow-hidden bg-white p-8 shadow-sm dark:bg-gray-800 sm:max-w-md sm:rounded-lg">
                    <div className="flex items-center justify-center">
                        <Link to="/"
                            className="cursor-pointer flex justify-center gap-2 text-gray-800 mb-5 items-center"
                        >
                            <img src={Logo} alt="logo" className='w-10' /> <span className='font-semibold text-xl '>KnowledgeTunes</span>
                        </Link>

                    </div>

                    <form onSubmit={handleSubmit(registrationSubmit)}>
                        <div className="mb-6">
                            <input
                                type="text"
                                {...register("fullName")}
                                placeholder="Full Name"
                                className=" border-gray-300 w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="Email"
                                className=" border-gray-300 w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                {...register("password")}
                                placeholder="password"
                                className=" border-gray-300 w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor='image' className='block mb-2 text-gray-800 text-sm'>
                                Select Image:
                            </label>
                            <input type='file'
                                {...register("userImg")}
                                required />

                        </div>
                        <div className="mb-10">
                            <button className='w-full rounded border border-green-500 hover:shadow-lg bg-green-500 px-8 md:px-10 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:text-green-500'>Registration</button>
                        </div>
                    </form>
                    <p className="text-base text-gray-800 text-center">
                        Not a member yet?
                        <Link to="/author/login" className="text-green-400 ml-2 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;