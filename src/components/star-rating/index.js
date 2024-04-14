import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import './styles.css'

// 통계용 별점
const  StarRating = ({rating : star, limit = 5})=>{
    // props의 이름이 겹침 현상이 발생하면 error
    // props의 이름은 star로 변경함
    const [ rating, setRating ] = useState(star);
    const [ hover, seHover ] = useState(0);

    return (
        <div>
            {/* <h2>StarRating</h2> */}
            {
                [...Array(limit)].map((_, index)=>{
                    // index : 0 1 2 3 4
                    // 4점을 주고 싶은데 5점을 준것처럼 동작
                    index+=1;
                    // index : 1, 2, 3, 4, 5
                    return(<FaStar className={ index <= rating  ? "active" : "inactive" } key={index}/>)
                })
            }
        </div>
    )
}

// 후기작성용 별점
// const  StarRating = ()=>{
//     const [ rating, setRating ] = useState(0);
//     const [ hover, setHover ] = useState(0);
 
//     // onMouseMove
//     const mouseEnterHandle=(index) =>{
//         console.log(index)
//         setHover(index);
//         // move되었을 때는 move되는 별에 색이 칠해지고
//     }

//     // onMouseLeave
//     const mouseLeaveHandle=() =>{
//         setHover(rating);
//         // 마우스를 때면 클릭한 별점으로 색칠
//     }
//     return (
//         <div>
//             <h2>StarRating</h2>
//             {
//                 [...Array(5)].map((_, index)=>{ 
//                     index+=1; 
//                     return(
//                     <FaStar className={ index <= (rating || hover)  ? "active" : "inactive" }
//                         onClick={ ()=>setRating(index)}
//                         onMouseMove={ ()=>setHover(index)}
//                         onMouseLeave={ ()=>setRating(index)}
//                     />)
//                 })
//             }
//         </div>
//     )
// }

export default StarRating;