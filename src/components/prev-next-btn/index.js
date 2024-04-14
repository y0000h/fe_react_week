import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const PrevNextBtn = ({decrement, increment})=>{

    return (
        <div className='prev-next-btn'>
            <FaChevronLeft  onClick={ decrement } /> 
            <FaChevronRight onClick={ increment } /> 
        </div>
    )
}

export default PrevNextBtn;