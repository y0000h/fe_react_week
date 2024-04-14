import React, {useEffect, useRef, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const PostDetail = ({
  posts, setPosts,searchPost, 
  setSearchPost, searchPostHandle, deletePostHandle
}) => {
  const  { id }  = useParams();
  // console.log( id );
  const  navigate = useNavigate();
  const [isReadOnly, setIsReadOnly]=useState(false);
  // 수정=true

  // const [ title, setTitle ]=useState('');
  // const [ body, setBody ]=useState('');

  const titleRef = useRef();
  const bodyRef = useRef();
  // {current:input}
  useEffect(()=>{
    searchPostHandle(id);
  }, [])


  const boardDeletePostFetch= async (id)=>{
      // const res = await fetch(`http://localhost:4500/board`, {
      const res = await fetch(`https://be-node-week.vercel.app/board`, {
        method : 'DELETE',
        headers : { 'Content-Type' : 'application/json;charset=utf-8'},
        body:JSON.stringify({id})
      })

      const resDatas = await res.json();
      console.log( resDatas.method )
  }

  const gotoBoard = ()=>{
    deletePostHandle(searchPost.id);

    boardDeletePostFetch( searchPost.id )
    navigate('/board');
  }

  const boardUpdatePostFetch= async (searchPost)=>{
    const res = await fetch(`http://localhost:4500/board`, {
      method : 'PUT',
      headers : { 'Content-Type' : 'application/json;charset=utf-8'},
      body:JSON.stringify({ 
          id: searchPost.id ,
          title: searchPost.title ,
          body: searchPost.body  
        })
    })

    const resDatas = await res.json();
    console.log( resDatas.method )
  }

   const onChangeHandle =(event)=>{
      // searchPost.title = event.target.value
      setSearchPost({ 
        ...searchPost, 
        title : titleRef.current.value,
        body : bodyRef.current.value
      })
      // posts = searchPost 
      const updatePosts = posts.map(post=>{
        if( post.id === searchPost.id ){
            return searchPost;
        }else{
          return post
        }
      })
      setPosts([...updatePosts]);
  }

  const updateHandle = ()=>{
    setIsReadOnly(!isReadOnly);
    titleRef.current.focus();
    isReadOnly && onChangeHandle();
    // true &&  뒷실행

    boardUpdatePostFetch( searchPost );
    // 수정된 post
  }

  return (
    <div className='paddingTop'>
      <div>
        <h2>id {searchPost.id}</h2>
        <p> 제목  </p>
        <input type="text" 
                ref={titleRef}
                // placeholder={searchPost.title} 
                defaultValue={searchPost.title} 
                readOnly={!isReadOnly ? true : false}

                onChange={ onChangeHandle}
                />
        <p> 내용 </p>
        <textarea
                cols="30"
                rows="10"
                readOnly={!isReadOnly}
                // placeholder={searchPost.body}
                defaultValue={searchPost.body} 
                ref={bodyRef}
                onChange={ onChangeHandle}
        ></textarea>
        <p>게시일 </p>
        <input type="datetime" placeholder={searchPost.datetime} readOnly/>
        <br />

        <Link to="/board"  class="linkBtn">게시판 목록으로 가기</Link>
        <button onClick={gotoBoard}>삭제</button>
        <button onClick={updateHandle}>
          {
            !isReadOnly ? "수정" : "완료"
          }
        </button>
        {/* {
          isReadOnly ? <button  onClick={upDateFetchHandle}>등록</button> : null
        } */}
      </div>
    </div>
  )
}

export default PostDetail

// 
