import React from 'react';
import { HiArchiveBoxXMark, HiOutlineCalendarDays } from 'react-icons/hi2';
import { CommentType } from '../../../PostDetails/PostDetails';
import PlaceholderImg from '../../../../img/placeholder_user.png';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

type Props = {
    commentData: CommentType
}

const CommentsCard = ({ commentData }: Props) => {
    const { _id, comment, userName, userImg, posted_date } = commentData;

    // ---> handle delete user post
    const handleDeleteComment = (id: React.MouseEventHandler<SVGElement>) => {
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
                fetch(`http://localhost:5000/comments/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // ---> toast delete comment
                            Swal.fire(
                                'Deleted!',
                                'Your comment has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(err => toast.error(err.message))
            }
        })
    }
    return (
        <div className='col-span-12 md:col-span-6 lg:col-span-4 gap-2'>
            <div className="flex items-start  mb-2 px-4 py-6 shadow-lg hover:shadow-sm">
                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={userImg ? userImg : PlaceholderImg} alt="avatar" />
                <div className="">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">{userName ? userName : 'no name set'}</h2>
                        <HiArchiveBoxXMark
                            onClick={() => handleDeleteComment(_id)}
                            className='text-red-500 hover:text-red-600 cursor-pointer' />
                    </div>
                    <div className='flex gap-1 items-center'>
                        <HiOutlineCalendarDays className='text-green-500' />
                        <small className='text-xs'>{posted_date}</small>
                    </div>
                    <p className="mt-3 text-gray-800 text-sm">
                        {comment.slice(0, 100)}...
                    </p>

                </div>
            </div>
        </div>
    );
};

export default CommentsCard;