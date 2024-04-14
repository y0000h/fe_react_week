import { useState } from 'react';
import './style.css'

const SliderFade = ()=>{
    const [ show, setShow] = useState(2);
    const decrement = ()=>setShow( show <= 0 ? 2 : show-1 )
    const increment = ()=>setShow( show >= 2 ? 0 : show+1 )

    return (
        <div className="slider-fade-container">
            <div className="slider-images">
                <div className={ show ===  0 ? "inShow" : null}> {/* <img /> */} image1    </div>
                <div className={ show ===  1 ? "inShow" : null}> {/* <img /> */} image2    </div>
                <div className={ show ===  2 ? "inShow" : null}> {/* <img /> */} image3    </div>
            </div>

            <ul>
                <li onClick={()=>setShow(0)}>1</li>
                <li onClick={()=>setShow(1)}>2</li>
                <li onClick={()=>setShow(2)}>3</li>
            </ul>

            <button  onClick={ decrement }>prev</button>
            {/* 0 2 1, 0 2 1 */}
            <button onClick={ increment }>next</button>
            {/* 0 1 2, 0 1 2 */}
        </div>
    )
}

export default SliderFade;