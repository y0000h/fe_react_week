import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './MovieDetail.css'
import StarRating from '../components/star-rating';


// 60782, 60783, 60784, 60785
// localhost:300/movie/60782
// localhost:300/movie/60783
// localhost:300/movie/60784
// localhost:300/movie/60785
const MovieDetail = ({searchMovie}) => {
  // const { id } = useParams();
  // // url 주소에서 문자열로 입력된 데이터를 찾음 // 문자열 
 
  // useEffect(()=>{
  //   console.log(id); 
  //   console.log("movie :", searchMovie)
  // },[id])
   
  return (
    <div className='movie_detail'>
       <div className='height_center'>
          <div className='movie_cover_image'>
                <img src={`${searchMovie.medium_cover_image}`}  title={searchMovie.title_long} />
          </div>
          <div className='movie_summary'>
                <h2> { searchMovie.title } </h2>
                <p> { searchMovie.summary } </p>
                <StarRating  rating={searchMovie.rating} limit={10}  />  

                <Link to="/movie">뒤로가기</Link>
          </div> 
       </div>
    </div>
  )
}

export default MovieDetail
