const Indecator = ({ length, setShow , show})=>{
    // 길이를 넘겨서 큰 데이터를 넘기는 대신 작은 숫자만 넘기므로 
    // 처리 속도 향상 
    
    return (
        <ul className='indecator'>
            {
                [...Array(length)].map((_,index)=> 
                    <li onClick={()=>setShow(index)}
                        className={ show === index ? "select" : null}
                    >{index+1}</li>
                )
            } 
        </ul>
    )
}

export default Indecator; 