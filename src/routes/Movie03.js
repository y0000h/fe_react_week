import React, { useEffect, useState } from 'react'
import './Movie.css'
import { useThemeContext } from '../contexts/theme';
import { Link } from 'react-router-dom';
import StarRating from '../components/star-rating';

const Movie = ({movies}) => {
  const { isDark } = useThemeContext();

 
  return (
    <div className='movie-container'
         style={{ 
            background : isDark ?   "transparent" : "black",
            color : isDark ?  "black" : "white" 
        }}
    >
      <div>
        {
            movies.length <= 0 ? 
            "loading ... " :  
            movies.map( movie => 
                <div className='movie_card' key={movie.title.slice(0, 10)}>
                  
                    

                      {/* 
                        // 60782, 60783, 60784, 60785
                        // localhost:300/movie/60782
                        // localhost:300/movie/60783
                        // localhost:300/movie/60784
                        // localhost:300/movie/60785
                      */}
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
                      > 자세히 보기 {movie.id}</Link>
                </div> 
            )
        }
      </div>
    </div>
  )
}

export default Movie
