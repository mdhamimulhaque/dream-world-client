import React from 'react';
import Tag from '../Tag/Tag';

const TagSection = () => {
    return (
        <div className='flex flex-wrap gap-2 mb-2 justify-center'>
            <Tag>Mobile</Tag>
            <Tag>Graphic Design</Tag>
            <Tag>Web Design</Tag>
            <Tag>Technology</Tag>
        </div>
    );
};

export default TagSection;