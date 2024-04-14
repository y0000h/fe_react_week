import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'
import StarRating from '../components/star-rating';


// 60782, 60783, 60784, 60785
// localhost:300/movie/60782
// localhost:300/movie/60783
// localhost:300/movie/60784
// localhost:300/movie/60785
const MovieDetail = ({movies}) => {
  const { id } = useParams();
  // url 주소에서 문자열로 입력된 데이터를 찾음 // 문자열 

  const [movie, setMovies] = useState();
  const searchMovies = async ()=>{
     // movie.id === 숫자, id === 문자
     const findMovie = await movies.find((movie)=> movie.id  === +id );
     console.log("findMovie :", findMovie)
     setMovies({...findMovie});
  }

  useEffect(()=>{
    console.log(id);
    searchMovies(); 
    console.log("movie :", movie)
  },[id])
   
  return (
    <div className='movie_detail'>
       
       <div className='movie_cover_image'>
            <img src={`${movie.medium_cover_image}`}  title={movie.title_long} />
       </div>
       <div className='movie_summary'>
            <h2> { movie.title } </h2>
            <p> { movie.summary } </p>
            <StarRating />  
       </div> 
        
    </div>
  )
}

export default MovieDetail
