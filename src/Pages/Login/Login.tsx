import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../img/logo.png';
import { FaGofore, FaGithub } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { app } from '../../Firebase/FirebaseConfig';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { toast } from 'react-toastify';

type Inputs = {
    email: string;
    password: any;
}


const auth = getAuth(app);

const Login: React.FC = () => {
    const { loading, setLoading, user, setUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();
    // --->handle formlogin
    const loginSubmit: SubmitHandler<Inputs> = data => {
        // --->login with email-pass
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(res => {
                if (res?.user?.email) {
                    navigate('/');

                    toast.success('login successfully')
                }
            }).catch(err => toast.error(err.message))
    }



    // --->google login
    const provider = new GoogleAuthProvider();
    const handleGoogleLogIn = async () => {
        signInWithPopup(auth, provider)
            .then(res => {
                setUser(res?.user);
                const fullName = res?.user?.displayName;
                const email = res?.user?.email;
                const userImg = res?.user?.photoURL;
                saveUserInfoToDatabase(fullName, email, userImg);
            })
            .catch(err => toast.error(err.message))
    }


    // ===> save user info to database
    const saveUserInfoToDatabase = (fullName: string | null, email: string | null, userImg: string | null) => {
        // ---> save userInfo to Database
        const userInfo = {
            fullName,
            email,
            userImg,
            role: 'user',
            verified: false,
        }

        fetch(`http://localhost:5000/users`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Login successfully")
                }

            })
            .catch(err => toast.error(err.message))

    }


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

                            <form onSubmit={handleSubmit(loginSubmit)}>
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
                                        placeholder="Password"
                                        className=" border-gray-300 w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                </div>
                                <div className="mb-10">
                                    <button className='w-full rounded border border-green-500 hover:shadow-lg bg-green-500 px-8 md:px-10 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:text-green-500'>Login</button>
                                </div>
                            </form>

                            <div className="-mx-2 mb-12 flex justify-center gap-2">
                                <button className=' rounded border flex items-center gap-1 border-blue-500 hover:shadow-lg bg-blue-500 px-8 md:px-10 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:text-blue-800'
                                    onClick={handleGoogleLogIn}
                                >
                                    <FaGofore className='text-xl' /> Google
                                </button>
                                <button className=' rounded border flex items-center gap-1 border-gray-800 hover:shadow-lg bg-gray-800 px-8 md:px-10 py-3 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring active:text-gray-800'>
                                    <FaGithub className='text-xl' /> GitHub
                                </button>
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