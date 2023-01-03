import React from 'react';
import { Link } from 'react-router-dom';
import { PostData } from '../../../Home/HomeBlog/HomeBlog';
import { HiPencilSquare, HiArchiveBoxXMark } from "react-icons/hi2";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

type Props = {
    post: PostData
}

const DashboardPostCard = ({ post }: Props) => {
    const { _id, title, category, posted_date, description, postImg, } = post;
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
                fetch(`http://localhost:5000/author/${id}`, {
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




    return (
        <div className='col-span-12 md:col-span-6 lg:col-span-3 gap-2'>
            <article className="flex flex-col ">
                <Link to='#' rel="noopener noreferrer">
                    <img className="object-cover w-full h-52 " src={postImg} alt="img" />
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
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
                </div>
            </article>
        </div>
    );
};

export default DashboardPostCard;