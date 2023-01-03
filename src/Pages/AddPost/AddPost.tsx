import React, { useContext } from 'react';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
type Inputs = {
    title: string;
    description: string;
    category: string;
    tags: string;
    pstImg: string;
}

const AddPost = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate()

    // ---> date
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let date = `${day}-${month}-${year}`;


    // ---> handle img upload file
    const handleAddNewPost: SubmitHandler<Inputs> = data => {
        const tag = data.tags.split(' ');

        const image = data.pstImg[0];
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
                    const postInfo = {
                        title: data?.title,
                        category: data?.category,
                        posted_date: date,
                        description: data?.description,
                        tags: tag,
                        postImg: imgData.data.url,
                        userImg: user?.photoURL,
                        userName: user?.displayName,
                        email: user?.email,
                        isPopular: false
                    }

                    //    ===> store post to database

                    fetch(`http://localhost:5000/posts`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged === true) {
                                navigate('/');
                                toast.success("New Post created successfully")
                            }

                        }).catch(err => {
                            toast.error(err.message)
                        })

                }
            }).catch(err => toast.error(err.message))
    }

    return (
        <div>
            <div className="w-full">
                <div className="bg-gradient-to-b from-green-500 to-green-600 h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center">Add New Post</p>
                        <form onSubmit={handleSubmit(handleAddNewPost)}>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Title</label>
                                    <input
                                        {...register("title")}
                                        type="text"
                                        required
                                        className="leading-none text-gray-800 p-3 focus:outline-none focus:border-green-500 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                            </div>

                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="font-semibold leading-none">Description</label>
                                    <textarea
                                        {...register("description")}
                                        required
                                        className="h-40 text-base leading-none text-gray-800 p-3 focus:oultine-none focus:border-green-500 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                        htmlFor="category">
                                        Category
                                    </label>
                                    <div className="relative">
                                        <select
                                            {...register("category")}
                                            className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="category" required>
                                            <option>Technology</option>
                                            <option>Science</option>
                                            <option>Sports</option>
                                            <option>Global</option>
                                        </select>
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Tags</label>
                                    <input
                                        {...register("tags")}
                                        required
                                        type="text"
                                        className="leading-none text-gray-900 p-3 focus:outline-none focus:border-green-500 bg-gray-100 border rounded border-gray-200" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor='image' className='block mb-2 text-gray-800 text-sm'>
                                    Select Image:
                                </label>
                                <input type='file'
                                    {...register("pstImg")}
                                    required />

                            </div>
                            <div className="flex items-center justify-center w-full mt-8">
                                <Button>Add Post</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddPost;