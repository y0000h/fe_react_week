import { useEffect, useState } from 'react';
import './styles.css'

const Pagination = ()=>{
    const [ datas, setDatas ] = useState([]); // pager를  넣는 배열 
    const listsLength = 100; // 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1
    const currentPerPage = 21;
    let currentPage = 5; 
    let pager = Math.ceil( listsLength/currentPerPage );
    let endList = currentPage * currentPerPage;  // 끝나는 번호 
    let startList = endList - currentPerPage;  /// 끝나는 번호 - 5

    function  dataSetup(){
        const lists = [];
        for(let a=1; a<=pager ; a++)   {
            lists.push(a)
        }

        return lists; 
    }

    useEffect(()=>{
        setDatas(dataSetup())
    }, [])

    return (
        <div>
            <h2>pagination</h2>
            <p>시작 번호{startList}, 끝번호{endList} </p>
            <p>pager</p>
            <ul>
                {
                     datas.map(data=><li key={data}>{data}</li>)
                }
            </ul>
             
        </div>
    )
}

export default  Pagination;

/*
    전체 목록의 개수 : 100개
    목록 개수(한화면당 보일 목록수) : 5, 7, 10, 15, 20, 30

    pager : Math.ceil(100/5) 
    pager : Math.ceil(전체 목록의 수/한화면당 보일 목록수) 
    1,2,3,4 ....
        
    시작 목록 번호  1, 6
    끝 목록 번호    5, 10


    시작 목록 번호  1, 8
    끝 목록 번호    7, 14
*/

/*
    주말 : basic, ES6, typescript
    frontend : js, typescript
*/