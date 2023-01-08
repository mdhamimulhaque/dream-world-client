import React, { useState, useContext, useEffect } from 'react';
import { CommentType } from '../PostDetails';
import placeholderImg from '../../../img/placeholder_user.png';
import { HiOutlineCalendarDays, HiArchiveBoxXMark } from "react-icons/hi2";
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

type Props = {
    commentData: CommentType;
}


const CommentBox = ({ commentData }: Props) => {
    const [handleCommentUserEmail, setCommentUserEmail] = useState(false);
    const { _id, comment, email, userName, userImg, posted_date } = commentData;
    const { user } = useContext(AuthContext);

    // ---> handle comment delete button
    useEffect(() => {
        if (email === user?.email) {
            setCommentUserEmail(true)
        }
    }, [user?.email])

    // ---> handle delete user comments
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
                fetch(`https://knowledge-tunes-server.vercel.app/comments/${id}`, {
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
        <div className="post_owner_info mt-3 p-4 border border-green-200 rounded">
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={userImg ? userImg : placeholderImg}
                        alt="userImg"
                        className='rounded-full w-12 h-12'
                    />
                    <div className='text-sm'>
                        <h4 className='font-semibold'>{userName ? userName : "No Name Set"}</h4>
                        <small className='flex items-center gap-1'> <HiOutlineCalendarDays className='text-green-500' />{posted_date}</small>
                    </div>
                </div>
                {
                    handleCommentUserEmail &&
                    <div className="comment_delete_icon">
                        <HiArchiveBoxXMark
                            onClick={() => handleDeleteComment(_id)}
                            className='cursor-pointer text-xl text-red-500 hover:text-red-600' />
                    </div>
                }

            </div>
            <p className='text-gray-600 mt-2'>{comment}</p>
        </div>
    );
};

export default CommentBox;