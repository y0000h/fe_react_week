import React, { useEffect, useState } from 'react'
import './Movie.css'
import { useThemeContext } from '../contexts/theme';
import { Link, useNavigate } from 'react-router-dom';
import StarRating from '../components/star-rating';

const Movie = ({movies,  searchMovies}) => {
  const { isDark } = useThemeContext();
  const navigate = useNavigate(); // App 사용하지 못함 
  const [ theShow, setTheShow ]  = useState(4);
  // 4, 8, 12, 16... // movies.length 까지만 더보기 버튼이 나타남

  const [ theShowMovies, setTheShowMovies ]  = useState([])

  useEffect(()=>{
    movies.length &&  setTheShowMovies([...movies].slice(0, theShow));
    console.log( theShow)
  }, [theShow])

  const gotoDetail = (id)=>{
     searchMovies(id);
     navigate(`/movie/${id}`);
  }

  const theShowClickHandle = ()=>setTheShow(theShow >= movies.length ? 4 : theShow + 4);

  return (
    <div className='movie-container'
         style={{ 
            background : isDark ?   "transparent" : "black",
            color : isDark ?  "black" : "white" 
        }}
    >
      <div>
        {
            theShowMovies.length <= 0 ? 
            "loading ... " :  
            theShowMovies.map( (movie,index )=> 
                <div className='movie_card' key={movie.title.slice(0, 10)}
                      onClick={ ()=>gotoDetail(movie.id)}
                  >
                        <h2>{movie.title.slice(0, 18)}</h2>
                        <StarRating  rating={movie.rating} limit={10} />
                        <img src={movie.medium_cover_image}
                            title={movie.slug}
                            alt={movie.slug}
                        />
                        <p>
                        {
                            movie.summary.length > 100 ?
                            movie.summary.slice(0, 100) + "...":
                            movie.summary
                        }
                        </p>
                        <Link to={`/movie/${movie.id}`}
                            className='goDetailBtn'
                        > 자세히 보기</Link>
                </div> 
            )
        }

        {
          movies.length >= theShow ? <button onClick={theShowClickHandle}>더보기</button> : null
        }
      </div>
    </div>
  )
}

export default Movie
