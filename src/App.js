import './App.css';
import Post from './Post'
import React, {useEffect, useState} from 'react'
import { db } from './firebase'

function App() {
  const [posts, setPosts] = useState([
    {
      username:'veronica', 
      caption:' this works', 
      imageUrl:'https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/portfolioreact.png'
    },
    {
      username:'johndoe', 
      caption:' this works', 
      imageUrl:'https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/portfolioreact.png'
    }
  ])

  useEffect(()=> {

  }, [])

  return (
    <div className="app">
      <div className='app_header'>
        <img 
          className='app_headerImage'
          src='https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=""
        />
      </div>

      <h1>Hi There</h1>
      {
        posts.map(post=> (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
    </div>
  );
}

export default App;
