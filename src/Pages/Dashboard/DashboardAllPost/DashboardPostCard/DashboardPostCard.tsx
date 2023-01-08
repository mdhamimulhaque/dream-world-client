import React from 'react';
import { Link } from 'react-router-dom';
import { PostData } from '../../../Home/HomeBlog/HomeBlog';
import { HiArchiveBoxXMark, HiSparkles } from "react-icons/hi2";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';


type Props = {
    post: PostData
}

const DashboardPostCard = ({ post }: Props) => {
    const { _id, title, category, posted_date, postImg, isPopular } = post;
    // ---> handle delete post
    const handleDeletePost = (id: React.MouseEventHandler<SVGElement>) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#22C55E',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // --->method
                fetch(`https://knowledge-tunes-server.vercel.app/author/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // ---> toast delete msg
                            Swal.fire(
                                'Deleted!',
                                'Your Post has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(err => toast.error(err.message))
            }
        })

    }

    // ---> handle make popular post
    const handleMakePopularPost = (id: React.MouseEventHandler<SVGElement>) => {
        fetch(`https://knowledge-tunes-server.vercel.app/posts?id=${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Popular post created')
                }
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }


    return (
        <div className='col-span-12 md:col-span-6 lg:col-span-3 shadow-lg '>
            <article className="flex flex-col">
                <Link to='#' className='relative'>
                    <img className="object-cover w-full h-52 " src={postImg} alt="img" />
                    {
                        isPopular && <span className='absolute flex items-center bg-red-400 px-2 text-white right-0 top-0'>
                            Popular
                            <HiSparkles className='ml-2 text-green-500' />
                        </span>
                    }
                </Link>
                <div className="flex flex-col flex-1 p-6">
                    <div className="icon_box flex items-center justify-between gap-2 text-lg cursor-pointer">
                        <span className="inline-flex bg-green-100 text-gray-800 rounded-full text-xs h-6 px-3 justify-center items-center">
                            {category}
                        </span>
                        <HiArchiveBoxXMark
                            onClick={() => handleDeletePost(_id)}
                            className='text-red-500 hover:text-red-600' />
                    </div>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                        <span>Posted: {posted_date}</span>
                    </div>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title && title.slice(0, 50)}...</h3>
                </div>


                {
                    !isPopular &&
                    <button className='inline-block rounded border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring active:text-green-500'
                        onClick={() => handleMakePopularPost(_id)}>
                        Make Popular Post
                    </button>
                }

            </article>
        </div>
    );
};

export default DashboardPostCard;