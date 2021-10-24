import React from 'react';
import ChatRoom from '@Components/chatRoom'
import Subject from '@Components/subject'
import ScoreBoard from '@Components/scoreBoard'
import ElectricClock from '@Components/electricClock'

const home = () => {
    return (
        <div className='h-full w-full flex py-12 px-20'>
            <div className="w-1/5 flex flex-col mr-6">
                <ElectricClock/>
                <ScoreBoard/>
            </div>
            <Subject/>
            <ChatRoom/>
        </div>
    )

}

export default home;