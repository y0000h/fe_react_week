import React, { useEffect, useState } from 'react'
import './Movie.css'


// summary 비어 있을 경우 임의의 문자열을 처리하는 방법 

const Movie = () => {
  const [ movies, setMovies ] = useState([]);

  const MOVIE_API = `https://yts.mx/api/v2/list_movies.json`;

  const load_Movie = ()=>{
      fetch(MOVIE_API)
      .then(res=>res.json())
      .then( res=>{
        setMovies(res.data.movies)
        console.log( res.data.movies[0] )
      })
  }
  
  useEffect(()=>{
    load_Movie();
  }, [])

  return (
    <div className='movie-container'>
      {
        movies.length <= 0 ? 
        "loading ... " :  
        movies.map( movie => 
            <div className='movie_card' key={movie.title.slice(0, 10)}>
                <h2>{movie.title}</h2>
                <p>
                  {
                    movie.summary.length > 100 ?  
                    movie.summary.slice(0, 100) + "..." : 
                    movie.summary.length === 0 ?
                    `
                    ‘맥심커피배 입신최강전’은 국내 프로 바둑 9단들만 참여하여
                    ‘입신 중의 입신’을 가리는 대회입니다. 각종 세계대회와 국내대회 본선
                    성적을 점수화 한 ‘카누 포인트’ 제도를 전면 도입하여 본선 32강 초청전이 토너먼트 형태로 진행됩니다.
                    `:
                    movie.summary
                  }
                </p>
            </div> 
        )
      }
    </div>
  )
}

export default Movie
