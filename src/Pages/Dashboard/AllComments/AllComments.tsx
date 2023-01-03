import React, { useEffect, useState } from 'react';
import { CommentType } from '../../PostDetails/PostDetails';
import CommentsCard from './CommentsCard/CommentsCard';


const AllComments: React.FC = () => {
    const [comments, setComments] = useState<CommentType[]>([]);

    // ---> all comments
    useEffect(() => {
        fetch(`http://localhost:5000/all-comments`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [comments])


    return (
        <>
            {/* page title */}
            <div className='font-semibold px-4 mt-5'>
                <h2 className='text-center text-green-500 text-4xl'>All Comments</h2>
                <h2 className="text-xl text-gray-800 ">Total : {comments?.length}</h2>
            </div>

            <section className='comments_wrapper grid grid-cols-12 gap-2'>
                {
                    comments?.map(commentData => <CommentsCard key={commentData?._id} commentData={commentData} />)
                }
            </section>
        </>
    );
};

export default AllComments;