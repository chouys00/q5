import {useEffect, useState} from 'react';
import {FaRegThumbsDown, FaRegThumbsUp} from "react-icons/fa";

const BoardItem = ({data, user}) => {

    return (
        <div className="flex mb-6">
            <div className="h-20 w-20 overflow-hidden relative">
                {
                    (data.rank <= 3) &&
                    <div className="h-6 w-6 bg-white
                    border-solid border-black border-2
                    absolute top-0 left-0
                    rounded-full
                    flex justify-center items-center">
                        {data.rank}
                    </div>
                }
                <img className="w-full object-cover rounded-full" src={data.avatar}/>
                <div
                    className={`h-2 w-2 ${data.onLine ? 'bg-green-500' : 'bg-gray-300'} absolute bottom-0 right-0 rounded-full`}/>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center px-4 py-2">
                <div>
                    <span>{data.name}</span>
                    {
                        data.name === user.name && <span>(you)</span>
                    }
                    <span className='ml-2'>{data.score}分</span>
                </div>
                <div className='flex mt-2'>
                    <FaRegThumbsUp className='mr-2 cursor-pointer'/>
                    <FaRegThumbsDown className='cursor-pointer'/>
                </div>
            </div>
        </div>
    )

}

export default BoardItem;