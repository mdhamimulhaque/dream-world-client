import React from 'react';

type BtnProps = {
    children: React.ReactNode;
}

const Button = (props: BtnProps) => {
    return (
        <button className="inline-block rounded border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring active:text-green-500">
            {props.children}
        </button>
    );
};

export default Button;