import {useEffect} from 'react';

const SubjectContent = ({data}) => {

    return (
        <div className="flex-1 border-solid border-black border-2 overflow-y-auto p-4">
            {
                data && data.map((item, index) =>
                    <div className='text-left mb-2'>{item.content}</div>
                )
            }
        </div>
    )

}

export default SubjectContent;