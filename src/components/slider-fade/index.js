import { useState, useEffect } from 'react';
import './style.css'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Indecator from '../indecator';
import PrevNextBtn from '../prev-next-btn';
// 원래 있던 폴더에서 다른 폴더로 이동하면 
// 관련된 컴포넌트 새로 알아서 갱신

const SliderFade = ()=>{
    const [ show, setShow] = useState(2);
    const decrement = ()=>setShow( show <= 0 ? 2 : show-1 )
    const increment = ()=>setShow( show >= 2 ? 0 : show+1 )

    const imgData = [
        {
            id : 0, 
            img_path : "https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
            img_alert: "간단한 설명"
        },
        {
            id : 1, 
            img_path : "https://images.unsplash.com/photo-1711636418389-1ee93ebd56fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
            img_alert: "간단한 설명"
        },
        {
            id : 2, 
            img_path : "https://images.unsplash.com/photo-1707343843982-f8275f3994c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
            img_alert: "간단한 설명"
        }
    ]

    
    useEffect(()=>{
        const timer = setInterval(increment, 3000);
        // return ()=>clearInterval( timer );
    }, [show])
    
    return (
        <div className="slider-fade-container">
            <div className="slider-images">
                {
                    imgData && 
                    imgData.length >= 0 && 
                    imgData.map((imgItem)=> 
                    <div className={ show ===  imgItem.id ? "inShow" : null}> 
                        <img src={imgItem.img_path} alt={imgItem.img_alert} />
                    </div> )
                }
            </div>

            <Indecator length={imgData.length}  
                        setShow={setShow} 
                        show={show} 
            />

            <PrevNextBtn decrement={decrement} increment={increment}/>
        </div>
    )
}

export default SliderFade;