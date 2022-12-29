import React from 'react';
type Props = {
    children: React.ReactNode;
}

const Tag = (props: Props) => {
    return (
        <div className='px-3 py-2 text-xs rounded bg-white shadow-lg hover:shadow-sm cursor-pointer duration-300 hover:text-green-500 text-center'>
            {props.children}
        </div>
    );
};

export default Tag;