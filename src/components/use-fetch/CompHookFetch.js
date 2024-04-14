import React from 'react'
import useFetch from '.'

const CompHookFetch = () => {
    // const MOVIE_API = `https://yts.mx/api/v2/list_movies.json`;
    const COIN_API = `https://api.coinpaprika.com/v1/tickers`;
    // const products_API = `https://dummyjson.com/products`;
    const { data , pending, error } = useFetch(COIN_API);
  return (
    <div>
        {
                pending ? <h2> 로딩중입니다. </h2> : null
        }
        {
                error ? <h2>{ error }</h2> : null
        }
        {/* {
                data && data.products && data.products.length ? 
                data.products.map( 
                    product => <p key={product.title}>{product.title}</p>
                ):null
        } */}
      
        {/* {
            data && data.data.movies && data.data.movies.length ? 
            data.data.movies.map( 
                movie => <p key={movie.title}>{movie.title}</p>
            ):null
        } */}
        {
            data &&  data.length ? 
            data.map( 
                coin => <p key={coin.id}>{coin.id}</p>
            ):null
        }
    </div>
  )
}

export default CompHookFetch
