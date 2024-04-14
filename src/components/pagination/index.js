import { useEffect, useState } from 'react';
import './styles.css'
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

const Pagination = ({
    postPerPage, totalPosts,
    currentPage, setCurrentPage 
})=>{
     
    const pageLiNumbers = [];
    for(let i=1; i<=Math.ceil(totalPosts/postPerPage);i++){
        pageLiNumbers.push(i)
    }

    const prevHandle = ()=>{
        if( currentPage <= 1 ){ 
            return 
        }else{
            setCurrentPage(currentPage - 1)
        }
    }
    const nextHandle = ()=>{
        if( currentPage >= pageLiNumbers.length ){ 
            return 
        }else{
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className='pager-container'>
            {/* <h2>pagination</h2> */}

            <FaCaretLeft onClick={prevHandle}
                    style={{ opacity : currentPage === 1 ? 0 : 1}}
            />

            <ul className='pager'>
                {
                    pageLiNumbers.map((number, index)=>
                    <li key={number} 
                        className={ number === currentPage ? "active" : null }
                        onClick={ ()=>setCurrentPage(number)}    
                    >{number}</li>
                    )
                }
            </ul>
            
            <FaCaretRight onClick={nextHandle}
                    style={{ opacity : currentPage === pageLiNumbers.length ? 0: 1}}
             />
        </div>
    )
}

export default  Pagination;
 