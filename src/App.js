import './App.css';
import Post from './Post'
import React, {useEffect, useState} from 'react'
import { db } from './firebase'
import { collection, onSnapshot } from "firebase/firestore";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};


function App() {

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleClose = () => setOpen(false);

  useEffect(()=> {
    onSnapshot(collection(db,"posts"), (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id, 
        post:doc.data()
      })))
   );
  }, []);

  const signUp = (e) => {
    e.preventDefault();
  }

  return (
    <div className="app">
      <Modal
       open={open}
       onClose={handleClose}
      >
        <Box sx={style}>
          <form className='app_signup'>
          <center>
            <img
            className='app_headerImage'
            src='https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
            alt=''
            />
          </center>
          <Input
            type='text'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
          <Input
            placeholder='email'
            type='text'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
          <Input
            placeholder='password'
            type='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <Button type='submit' onClick={signUp}>Sign Up</Button>
          </form>
        </Box>
      </Modal>
      <div className='app_header'>
        <img 
          className='app_headerImage'
          src='https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=""
        />
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>


      <h1>Hi There</h1>
      {
        posts.map(({id, post})=> (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
    </div>
  );
}

export default App;
