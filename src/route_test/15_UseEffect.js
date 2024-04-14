import React, { useEffect, useState } from 'react'

const MyUseEffect = () => {
    const [ count, setCount ] = useState(0);
    const [ num, setNum ] = useState(0);

    useEffect(()=>{
        console.log( "화면이 갱신")
    })
    // 맨처음 한번 로드될때, 렌더링(화면이 변경될때) 될때마다 
    useEffect(()=>{
        console.log( "맨처음 한번 로드될때")
    },[])
    // 맨처음 한번 로드될때,
    useEffect(()=>{
        console.log( "변수가 바뀔때")
    },[num])
    // [변수] : 디펜던스 어레이
    // 변수가 변경될때 

  return (
    <div>
      <button onClick={ ()=> setCount(count + 1)}> 
         count { count } 
      </button>
      <button onClick={ ()=> setNum(num + 10)}> 
         num { num } 
      </button>
    </div>
  )
}

export default MyUseEffect
