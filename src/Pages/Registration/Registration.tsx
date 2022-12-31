import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { Link, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../Context/AuthProvider';
import Logo from '../../img/logo.png';

// ---> react hook form
type Inputs = {
    fullName: string;
    email: string;
    password: any;
    userImg: string;
}

const Registration: React.FC = () => {
    const { loading, setLoading, user, setUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const registrationSubmit: SubmitHandler<Inputs> = data => {
        // ---> handle img upload file
        const image = data.userImg[0];
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success === true) {
                    // ---> handle registration (create user)
                    createUserWithEmailAndPassword(auth, data.email, data.password)
                        .then(res => {
                            const fullName = data.fullName;
                            const email = data.email;
                            const password = data.password;
                            const userImg = imgData.data.url;

                            // --->pass UserInfo 
                            if (res?.user?.email) {
                                saveUserInfoToDatabase(fullName, email, userImg)
                            }

                        })
                        .catch(err => console.log(err))
                }
            }).catch(err => console.log(err))
    };

    // ===> save user info to database
    const saveUserInfoToDatabase = (fullName: string, email: string, userImg: string) => {
        // -->(((((removable)))))
        const userOptional = {
            displayName: fullName,
            photoURL: userImg,
            email: email
        }
        setUser(userOptional)
        // -->((((((()))))))

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
                    navigate('/')
                    console.log("registration successfully")
                }

            })
            .catch(err => console.log(err))

    }

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
                            <button type='submit' className='w-full rounded border border-green-500 hover:shadow-lg bg-green-500 px-8 md:px-10 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:text-green-500'>
                                Registration</button>
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