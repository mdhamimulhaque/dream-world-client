import React from 'react';
import { Users } from '../AllUsers';
import PlaceImg from "../../../../img/placeholder_user.png";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';


type Props = {
    index: number,
    user: Users
}

const UsersTableRow = ({ index, user }: Props) => {
    // ---> handle user delete
    const handleUserDelete = (id: React.MouseEventHandler<SVGElement>) => {
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
                fetch(`https://knowledge-tunes-server.vercel.app/users/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // ---> toast delete msg
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(err => toast.error(err.message))
            }
        })

    }

    // ---> handle make admin
    const handleMakeAdmin = (id: React.MouseEventHandler<SVGElement>) => {
        fetch(`https://knowledge-tunes-server.vercel.app/make-admin?id=${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('make admin successfully')
                }
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

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
                    <span
                        onClick={() => handleMakeAdmin(user?._id)}
                        className={user?.role === 'admin' ? "hidden" : " py-0.5 px-2.5 border-none rounded-full cursor-pointer bg-green-100 text-xs hover:bg-green-200 text-green-500 font-medium"}>
                        Admin
                    </span>
                </td>
                <td className="py-3 px-4 space-x-6 text-base text-gray-700 font-medium">
                    <button
                        type="button"
                        onClick={() => handleUserDelete(user?._id)}
                        className="text-sm text-red-500 font-semibold hover:text-red-600">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default UsersTableRow;