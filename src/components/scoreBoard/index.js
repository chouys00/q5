import {useEffect,useState} from 'react';
import BoardItem from './boardItem'

const ScoreBoard = () => {
    const [scoreBoardList,setScoreBoardList] = useState([])

    const myData={
        name:'frank'
    }
    const data =[
        {
            avatar:'https://picsum.photos/id/237/200/200',
            name:'frank',
            rank:1,
            score:12,
            onLine:true,
            commentActive:false
        },{
            avatar:'https://picsum.photos/id/1005/200/200',
            name:'kelly',
            rank:2,
            score:2,
            onLine:true,
            commentActive:true
        },{
            avatar:'https://picsum.photos/id/1025/200/200',
            name:'lulu',
            rank:3,
            score:1,
            onLine:false,
            commentActive:false
        },{
            avatar:'https://picsum.photos/id/1011/200/200',
            name:'tim',
            rank:4,
            score:0,
            onLine:false,
            commentActive:false
        },{
            avatar:'https://picsum.photos/id/163/200/200',
            name:'elisa',
            rank:5,
            score:-99,
            onLine:true,
            commentActive:true
        },
    ]

    useEffect(()=>{
        setTimeout(()=>{
            setScoreBoardList(data)
        },1000)
    },[])

    return (
        <div className="flex-1 border-solid border-black border-2 overflow-y-auto px-2 py-4 ">
            {
                scoreBoardList.map((item,index)=>
                    <BoardItem data={item} user={myData}/>
                )
            }
        </div>
    )

}

export default ScoreBoard;