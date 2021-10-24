import {useEffect} from 'react';

const ChatContent = ({data, colorRule}) => {
    useEffect(() => {
        // console.log(1111111111111,data)
    }, [])

    return (
        <div className='flex-1 p-4'>
            {
                data.map((item) =>
                    <div className={`${colorRule[item.type]} text-left`}>
                        <span>{item.time}</span>
                        <span>{item.textContent}</span>
                    </div>
                )
            }
        </div>
    )

}

export default ChatContent;