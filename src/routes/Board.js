import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Posts
const Board = ({posts}) => {
  const navigate = useNavigate();
  return (
    <section className='paddingTop'>
      <table>
      <thead>
        <tr>
            <th> 번호 </th>
            <th> 제목 </th>
            <th> 내용 </th>
            <th> 게시날짜 </th>  
        </tr>
      </thead>
      <tbody>
      {
        posts.map( post=> 
        <tr key={post.id}>
          <td>{post.id}</td>
          <td><Link to={`/postdetail/${post.id}`}>{post.title}</Link></td>
          <td>{post.body}</td>
          <td>{post.datetime}</td>  
        </tr>)
      }
      </tbody>
      </table>

      <button onClick={()=>navigate('/newpost')}>글쓰기</button>
    </section>
  )
}

export default Board

// 게시판
// 목록 보기 : 여러분들이 할 수 있음 
// 글쓰기 => 등록 => 목록 보기( 목록은 갱신 되어 있음 )
// 지우기 => 목록 지우고 클릭 = > 목록보기 ( 목록은 갱신 되어 있음 )
// 수정 


