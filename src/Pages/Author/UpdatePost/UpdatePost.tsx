import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { PostData } from '../../Home/HomeBlog/HomeBlog';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { toast } from 'react-toastify';

interface Inputs {
    title: string,
    description: string
}

const UpdatePost = () => {
    const postData = useLoaderData() as PostData;
    const { _id, title, description } = postData;
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate()

    // ---> handle update Post
    const handleUpdatePost: SubmitHandler<Inputs> = data => {
        const updateData = {
            title: data.title,
            description: data.description
        }

        fetch(`https://knowledge-tunes-server.vercel.app/author/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    navigate('/author');
                    toast.success("post update successfully")
                }
            }).catch(err => toast.error(err.message))
    }

    return (
        <div className="w-full h-screen overflow-y-auto bg-gradient-to-r from-green-400 via-green-500 to-green-400 p-4 flex items-center justify-center" >
            <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
                <div className="sm:text-3xl text-2xl font-semibold text-center text-green-500  mb-12">
                    Update Post
                </div>
                <form onSubmit={handleSubmit(handleUpdatePost)}>
                    <div className="">
                        <input type="text"
                            defaultValue={title}
                            {...register('title')}
                            required
                            className="focus:outline-none border-b w-full pb-2 border-green-500 placeholder-gray-500 mb-8"
                            placeholder="Post Title" />
                    </div>
                    <div className="">
                        <textarea
                            required
                            defaultValue={description}
                            className="focus:outline-none border-b w-full pb-2 border-green-500 placeholder-gray-500 mb-8"
                            {...register('description')}
                            placeholder="Post Description " />
                    </div>

                    <div className="flex justify-center my-6">
                        <button type="submit" className="py-2 px-4 my-4 bg-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Update
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdatePost;