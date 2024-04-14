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
  MovieDetail,
  CoinDetail,
  Board,
  NewPost,
  PostDetail,
  Makeup
} from './routes'
import StarRating from './components/star-rating'; 
// index.js 최상위 카테고리이므로 생략 가능 


function App() {
   
    const [ movies, setMovies ] = useState([]);
    const MOVIE_API = `https://yts.mx/api/v2/list_movies.json`;

    const str = `
    ‘맥심커피배 입신최강전’은 국내 프로 바둑 9단들만 참여하여
    ‘입신 중의 입신’을 가리는 대회입니다. 각종 세계대회와 국내대회 본선
    성적을 점수화 한 ‘카누 포인트’ 제도를 전면 도입하여 본선 32강 초청전이 토너먼트 형태로 진행됩니다.
    `

    const load_Movie = ()=>{
        fetch(MOVIE_API)
        .then(res=>res.json())
        .then( res=>{
          
          // 함수처리 해야함 
          // 영화목록중 비어있는 summary에 문자열 조립함 
          const newMovies = res.data.movies.map( movie =>{ 
            if (movie.summary.length === 0 ){
              return { ...movie, summary : str} 
            } 
            return movie; 
          })

          setMovies( newMovies );
          // console.log(res.data.movies[0]);
        })
    }

     
    // 영화를 검색하는 searchMovies
    const [ searchMovie, setSearchMovie] = useState({});
    const searchMovies =  (id)=>{
      // movie.id === 숫자, id === 문자
      const findMovie = movies.find((movie)=> movie.id  === +id );
      setSearchMovie(findMovie);
    }
    
  //  아직 사용하지 않음 
    const updateSummary = (movies)=>{ 
        return movies.map( movie =>{ 
          if (movie.summary.length === 0 ){
            return { ...movie, summary : str}
          } 
          return movies; 
        })
    }
    
    let timer ;
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const load_coins = async ()=>{
        const res = await fetch(`https://api.coinpaprika.com/v1/tickers`);
        const datas = await res.json();

        // 2000 => 100 종목 
        // 목록의 상태를 pagination을 검증하기 위해서 목록의 상태를 바꾸어줌
        const dataMap =  datas.map( (data,index)=>{      
              return {...data, myId : index+1}
        })
        const data100 = dataMap.filter( (data,index)=> index<100 )
        setCoins(data100); 

        // 데이터 1개의 모양을 확인하기 위함
        console.log(coins.length ? coins[0] : datas[0])
        
        timer = setTimeout(()=>{
          setIsLoading(false);
        }, 3000)
    }

    const boardFetch=()=>{
      // fetch('http://localhost:4500/board')
      fetch('https://be-node-week.vercel.app/board')
      .then(res=>res.json())
      .then(res=> setPosts(res))
    }

    useEffect(()=>{
      load_Movie(); 
      load_coins();
      boardFetch(); 
    }, [])

    useEffect(()=>{
      if( !isLoading ){
          console.log( 'clearTimeout')
          return  clearTimeout(timer)
      } 
    }, [isLoading])


    // 게시판 데이터 
    // 입력될 데이터는 title, body, 자동생성, id, datetime 
    const [ posts, setPosts ] = useState([])

    const [searchPost, setSearchPost] = useState({});
    const searchPostHandle = (id)=>{
        const findPost = posts.find( post=>post.id === +id )
        setSearchPost(findPost);
    }

    const deletePostHandle = (id) =>{
        console.log("delete : " ,id)
        const deletePosts = posts.filter(post=> post.id !== +id);
        setPosts([...deletePosts]);
    }

  return (
     <BrowserRouter>
     <ThemeContextProvider>
      <AuthProvider>
        <Wrapper>
          <Header />
         
          <Routes>
            <Route path="/" element={<Home/>}  />
            {/* http://localhost:3000/  */}
            <Route path="/home" element={<Home/>}  />
            {/* http://localhost:3000/home */}

            <Route path="/makeup" element={<Makeup  posts={posts} />}  />

            <Route path="/board" element={<Board  posts={posts} />}  />
            <Route path="/newpost" element={
                   <NewPost  setPosts={setPosts} posts={posts} />}  
            />
            <Route path="/postdetail/:id" element={
                   <PostDetail  searchPost={searchPost}
                                setSearchPost={ setSearchPost }
                                searchPostHandle={searchPostHandle}
                                deletePostHandle={deletePostHandle}
                                posts={posts} 
                                setPosts={setPosts}
                   />}  
            />

            <Route path="/coin" element={
                  <Coin coins={coins} isLoading={isLoading} />} 
            />
            <Route path="/coin/:id" element={<CoinDetail coins={coins} />}  />

            <Route path="/movie" element={
                <Movie movies={movies} searchMovies={searchMovies} />}  
            />
            <Route path="/movie/:id" element={ 
                <MovieDetail  searchMovie={searchMovie} />   
            } />
            
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

