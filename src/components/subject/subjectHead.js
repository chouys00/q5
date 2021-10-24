import {useEffect} from 'react';

const SubjectHead = ({data}) => {
    useEffect(()=>{
        // console.log(1111111111111,data)
    },[])

    const onGiveUp = () => {
      
    }

    return (
        <div className="h-2/5 border-solid mb-6 border-solid border-black border-2 flex flex-col relative flex justify-center items-center p-4">
            <button className="absolute top-4 left-4 text-blue-500" onClick={onGiveUp}>放棄</button>
            <div className="flex flex-col">
                <h1 className='text-7xl mb-2'>{data.subject}</h1>
                <h2 className='text-gray-400'>{data.subjectDescribe}</h2>
            </div>
        </div>
    )

}

export default SubjectHead;