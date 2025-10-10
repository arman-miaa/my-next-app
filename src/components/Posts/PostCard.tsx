import { IPost } from '@/types';
import React from 'react';

const PostCard = ({post}: {post: IPost}) => {
    return (
        <div className='bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition'>
            <h2 className="text-lg text-gray-800 font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm">{ post.body}</p>
        </div>
    );
};

export default PostCard;