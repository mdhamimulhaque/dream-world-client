import React from 'react';
import { Users } from '../AllUsers';
import PlaceImg from "../../../../img/placeholder_user.png";


type Props = {
    index: number,
    user: Users
}

const UsersTableRow = ({ index, user }: Props) => {
    return (
        <>
            <tr className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} whitespace-nowrap`}>
                <td className="py-3 flex items-center gap-1 px-4 text-base text-gray-700 font-semibold">
                    <img src={user?.userImg ? user?.userImg : PlaceImg} alt="img"
                        className='rounded-full h-8 w-8 object-cover'
                    />
                    <span>{user?.fullName ? user?.fullName : "No name set"}</span>
                </td>
                <td className="py-3 px-4 text-base text-gray-500 font-medium">{user?.email}</td>
                <td className="py-3 px-4 text-base text-gray-500 font-medium">{user?.role}</td>
                <td className="py-3 px-4 flex justify-center items-center space-x-6 text-base text-gray-700 font-medium">
                    <span className={user?.role === 'admin' ? "hidden" : " py-0.5 px-2.5 border-none rounded-full cursor-pointer bg-green-100 text-xs text-green-500 font-medium"}>
                        Sub-Admin
                    </span>
                    <span className={user?.role === 'admin' ? "hidden" : " py-0.5 px-2.5 border-none rounded-full cursor-pointer bg-blue-100 text-xs text-blue-500 font-medium"}>
                        Verified User
                    </span>
                </td>
                <td className="py-3 px-4 space-x-6 text-base text-gray-700 font-medium">
                    <button type="button" className="text-sm text-red-500 font-semibold hover:text-red-600">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default UsersTableRow;