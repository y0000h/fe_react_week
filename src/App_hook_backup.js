import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import { ThemeContextProvider } from './contexts/theme'; 
import Wrapper from './layouts/Wrapper';
import { AuthProvider, useAuth } from './contexts/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 
{
  Home, 
  Coin,
  About,
  Movie,
  NotFound,
  Login,
  MovieDetail
} from './routes'
import StarRating from './components/star-rating';
import CompHookFetch from './components/use-fetch/CompHookFetch';
import useFetch from './components/use-fetch';
// index.js 최상위 카테고리이므로 생략 가능 


function App() {
   
    const MOVIE_API = `https://yts.mx/api/v2/list_movies.json`;
    const COIN_API = `https://api.coinpaprika.com/v1/tickers`;
    const products_API = `https://dummyjson.com/products`;

    // movies
    const { data , pending, error } = useFetch(MOVIE_API); 
 
    const [coins, setCoins] = useState([]);
    const load_coins = async ()=>{
        const res = await fetch(`https://api.coinpaprika.com/v1/tickers`);
        const datas = await res.json();
        setCoins(datas); 
    }

    useEffect(()=>{
      console.log( data.data.movies[0])
      load_coins();
    }, [])

  return (
     <BrowserRouter>
     <ThemeContextProvider>
      <AuthProvider>
        <Wrapper>
          <Header />
          <CompHookFetch />
          <Routes>
            <Route path="/" element={<Home/>}  />
            {/* http://localhost:3000/  */}
            <Route path="/home" element={<Home/>}  />
            {/* http://localhost:3000/home */}
            <Route path="/coin" element={<Coin coins={coins} />}  />

            <Route path="/movie" element={<Movie movies={data.data.movies} />}  />
            <Route path="/movie/:id" element={ <MovieDetail  movies={data.data.movies} />   } />
            
            <Route path="/about" element={<About/>}  /> 
            <Route path="/login" element={<Login/>}  /> 
            <Route path="/*" element={<NotFound/>}  /> 
          </Routes>

          <Footer />
        </Wrapper>
      </AuthProvider>
     </ThemeContextProvider>
     </BrowserRouter>
  );
}

export default App;

