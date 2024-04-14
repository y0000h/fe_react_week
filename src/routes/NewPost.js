import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewPost.css'
import { format } from 'date-fns'
// 게시판 목록
const NewPost = ({setPosts, posts}) => {
  
  // 입력될 데이터는 title, body, 자동생성, id, datetime 
  const navigate = useNavigate();
  const [postTitle, setPostTitle ] = useState('')
  const [postBody, setPostBody ] = useState('')
   
  // 순차처리로 바꿀 것임 
  const boardNewPostFetch=(newPost)=>{
    // fetch('http://localhost:4500/board',{
    fetch('https://be-node-week.vercel.app/board',{
      method:"POST",
      headers:{'Content-Type' : 'application/json;chatset=utf-8'},
      body:JSON.stringify(newPost)
    })
    .then(res=>res.json())
    .then(res=> console.log('200', res.method))
  }

  const submitHandle = (event)=>{
      event.preventDefault();

      const newPost = {
        id : posts[posts.length-1].id + 1,
        title : postTitle,
        body : postBody,
        datetime : format(new Date(), 'yyyy-MM-dd')
      }

      // posts.push( newPost )
      console.log( newPost );
      // const newPosts = [...posts]; // 새로운 배열을 만들고 복사 
      // newPosts.push(newPost);
      // setPosts(newPosts);
      setPosts([...posts, newPost]);

      boardNewPostFetch(newPost);      

      navigate('/board'); // 등록 후 바로 이동 
  }

  const resetHandle = ()=>{
    setPostTitle('')
    setPostBody('')
    navigate('/board');
  }
  return (
    <div className='paddingTop'>
      <h2>문의하기</h2>
      <form onSubmit={ submitHandle }>
          <label htmlFor='postTitle'>제목</label>
          <input type="text" 
                 id="postTitle"
                 required
                 onChange={(event)=>setPostTitle(event.target.value)}
          />
          <label htmlFor='postTitle'>내용</label>
          <textarea type="text" 
                 id="postTitle"
                 required
                 cols="30"
                 rows="10"
                 onChange={(event)=>setPostBody(event.target.value)}
          ></textarea>

          <label>
            <button onClick={ submitHandle }>등록</button>
            <button onClick={ resetHandle }>취소</button>
          </label>
      </form>
      {/* <button onClick={()=>navigate('/board')}>목록보기</button> */}
    </div>
  )
}

export default NewPost
