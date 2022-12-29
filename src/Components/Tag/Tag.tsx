import React from 'react';
type Props = {
    children: React.ReactNode;
}

const Tag = (props: Props) => {
    return (
        <div className='px-3 py-2 bg-white shadow-lg text-center'>
            {props.children}
        </div>
    );
};

export default Tag;