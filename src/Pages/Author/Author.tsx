import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { PostData } from '../Home/HomeBlog/HomeBlog';
import AuthorPostCard from './AuthorPostCard/AuthorPostCard';
import userPlaceholderImg from '../../img/placeholder_user.png';


const Author: React.FC = () => {
    const { user, loading } = useContext(AuthContext);
    const [authorPost, setAuthorPost] = useState<PostData[]>([]);

    useEffect(() => {
        fetch(`http://localhost:5000/author?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAuthorPost(data))
    }, [user?.email, authorPost])

    return (
        <main>
            <div className="author_info p-5 bg-green-50">
                <img alt="img" src={authorPost[0]?.userImg ? authorPost[0]?.userImg : userPlaceholderImg}
                    className="mx-auto object-cover rounded-full h-20 w-20 " />
                <h2 className='text-2xl text-semibold text-center mt-2'>
                    {authorPost[0]?.userName ? authorPost[0]?.userName : "No name set"}
                </h2>
            </div>

            <main className='grid grid-cols-12 px-4 mt-5'>

                {
                    authorPost.length > 0 ?
                        authorPost.map(authPData => <AuthorPostCard authPData={authPData} />)
                        : "You have no post"
                }

            </main>
        </main>
    );
};

export default Author;