import {useEffect} from 'react';

const ChatInput = () => {
    useEffect(()=>{
        // console.log(1111111111111,data)
    },[])

    const onChange = (e) => {
        switch (e.key) {
            case 'Enter':
                break;
            case '\n':
                break;
        }
    }

    const onSubmit = () => {
      
    }
    

    return (
        <div className='h-20 flex justify-center items-center p-4'>
            <input
                className='h-full w-full border-solid border-black border-2'
                onKeyPress={onChange}
                onClick={onSubmit}
            />
            <button className='w-10 ml-2'>送出</button>
        </div>
    )

}

export default ChatInput;