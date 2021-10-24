import {useEffect, useState} from 'react';
import SubjectContent from './subjectContent'
import SubjectHead from './subjectHead'


const data = {
    subject: '信箱',
    subjectDescribe: '就是信箱的正則',
    subjectContent: [
        {
            content: 'sadknascall1@'
        },
        {
            content: "mv;f;samald@dsaskad/v';ask;c/as@"
        },
        {
            content: 'aa@aa.aa'
        },
        {
            content: 'fsaas@adasdsa'
        },
        {
            content: 'csaxassxa@fskl;as;X@/cp'
        },
    ],
}

const Subject = () => {
    const [subjectData, setSubjectData] = useState({})


    useEffect(() => {
        setTimeout(()=>{
            setSubjectData(data)
        },1000)
    }, [])


    return (
        <div className="flex-1 flex flex-col mr-6">
            <SubjectHead data={subjectData}/>
            <SubjectContent data={subjectData.subjectContent}/>
        </div>
    )

}

export default Subject;