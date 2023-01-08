import React, { useState, useEffect } from 'react';
import UsersTableRow from './UsersTableRow/UsersTableRow';

export interface Users {
    _id: any,
    fullName: string,
    email: string,
    userImg?: string,
    role: string,
    verified: boolean
}

const AllUsers: React.FC = () => {
    const [users, setUsers] = useState<Users[]>([]);

    useEffect(() => {
        fetch(`https://knowledge-tunes-server.vercel.app/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    return (
        <>
            {/* page title */}
            <div className='font-semibold px-4 mt-5'>
                <h2 className='text-center text-green-500 text-4xl'>All Users</h2>
                <h2 className="text-xl text-gray-800 ">Total : {users?.length}</h2>
            </div>
            <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto mt-10">
                <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
                    <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                        <tr>
                            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Name</th>
                            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Email</th>
                            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Role</th>
                            <th className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide" scope="col">Handle Role</th>
                            <th className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide" scope="col">Actions</th>
                        </tr>
                    </thead>


                    {/* :TABLE BODY */}
                    <tbody className="">
                        {users.map((user, index) => (
                            <UsersTableRow user={user} index={index} />
                        ))
                        }
                    </tbody>

                </table>
            </div>
        </>

    );
};

export default AllUsers;