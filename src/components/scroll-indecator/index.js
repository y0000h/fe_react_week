import { useState, useEffect } from 'react';
import './styles.css'

const ScrollIndecator = ()=>{
    const [ scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            // console.log(document.scrollTop, document.documentElement.scrollTop);
            // console.log(              html,   body);

            console.log(document.documentElement.scrollHeight); // 전체 문서의 높이 
            console.log(document.documentElement.clientHeight); // 탭이나 상태표시줄 높이를 제외한 실제 높이

            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

            setScrollPercentage( document.documentElement.scrollTop / height * 100 ) 
        })
    }, [])
    return(
        <div  className="scroll-progress-tracking-container">
            <div className="current-progress-bar"
                style={{ width: `${scrollPercentage}%`}}
            >
            </div>
        </div>
    )
}

export default ScrollIndecator; 