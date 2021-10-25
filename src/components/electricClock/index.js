import {useEffect,useState} from 'react';
import { BsClock } from "react-icons/bs";

const data = 60 * 60

const ElectricClock = () => {
    const [seconds, setSeconds] = useState(null)

    useEffect(()=>{
        fecthData()
    },[])

    useEffect(() => {
        if(seconds===null) return


        const countDownTimer = setInterval(() => {
            setSeconds(seconds - 1);
        }, 1000);


        if(seconds<=0){
            fecthData()
        }


        return () => clearInterval(countDownTimer);
    }, [seconds])


    const fecthData = () => {
        setTimeout(() => {
            setSeconds(data)
        }, 1000)
    }

    return (
        <div className="h-24 w-full flex justify-center items-center">
            <BsClock className='h-16 w-16'/>
            <div className='text-6xl ml-4'>
                {new Date(seconds * 1000).toISOString().substr(14, 5)}
            </div>
        </div>
    )

}

export default ElectricClock;

