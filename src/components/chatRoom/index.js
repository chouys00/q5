import {useEffect,useState} from 'react';
import ChatInput from './chatInput'
import ChatContent from './chatContent'

const data = [
    {
        time: '2021/10/20 13:20:10',
        textContent: 'frank 加入了房間',
        type: 'join'
    },
    {
        time: '2021/10/20 13:21:45',
        textContent: 'kelly 離開了房間',
        type: 'leave'
    },
    {
        time: '2021/10/20 13:21:45',
        textContent: 'kelly 作答正確+10',
        type: 'correct'
    },
    {
        time: '2021/10/20 13:21:45',
        textContent: 'elisa 作答錯誤-4',
        type: 'incorrect'
    },
    {
        time: '2021/10/20 13:21:45',
        textContent: 'kelly: 你好爛',
        type: 'message'
    },
    {
        time: '2021/10/20 13:21:45',
        textContent: 'elisa: 別吵-_-',
        type: 'message'
    },
    {
        time: '2021/10/20 13:21:45',
        textContent: 'frank 給 kelly 倒讚',
        type: 'boo'
    },
    {
        time: '2021/10/20 13:21:45',
        textContent: 'frank 給 elisa 倒讚',
        type: 'boo'
    },
    {
        time: '2021/10/20 13:21:45',
        textContent: 'frank 放棄了題目-10',
        type: 'giveUp'
    },
]

const ChatRoom = () => {
    const [chatData,setChatData] = useState([])

    const colorRule = {
        'join':'text-green-400',
        'leave':'text-red-500',
        'correct':'text-green-400',
        'incorrect':'text-red-500',
        'message':'text-black',
        'boo':'text-gray-400',
        'giveUp':'text-red-500',
    }

    useEffect(() => {

        setTimeout(()=>{
            setChatData(data)
        },1000)

    }, [])


    return (
        <div className="flex-1 flex flex-col border-solid border-black border-2 overflow-y-auto">
            <ChatContent data={chatData} colorRule={colorRule}/>
            <ChatInput/>
        </div>
    )

}

export default ChatRoom;