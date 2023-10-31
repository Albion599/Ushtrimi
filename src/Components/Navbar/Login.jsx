import React, { useContext, useState } from 'react';
import { Box, Modal } from '@mui/material';
import "./Navbar.scss";
import { Context } from '../../Context/Products';
// import axios from 'axios';

const Login = ({ open, handleClose }) => {
  const [state, dispatch] = useContext(Context);
  const style = {
    minHeight: "50vh",
    backgroundColor: "#fff",
    margin: "auto",
  };
  const [userData, setUserData] = useState();

  const handelChanges = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }
  const login = () => {
    console.log("userData", userData);
    // const url = "https://achieved-shy-shamrock.glitch.me/auth";
    // const header = {
    //   "Accept": "application/json, text/plain, */*",
    //   "Content-Type": 'application/json',
    //   'Referer': 'http://localhost:3000/',
    //   'Sec-Ch-Ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
    //   'Sec-Ch-Ua-Mobile': '?0',
    //   'Sec-Ch-Ua-Platform': '"Windows"',
    //   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
    // }
    // axios.post(url, userData, { headers: header } ).then((res) => {
    //   console.log("res", res)
    // }).catch((err) => {
    //   console.log("err", err)
    // })
    localStorage.setItem('token', userData?.user )
    dispatch({
      type: "USER",
      payland: { username: userData?.user }
    });
    handleClose();
  };

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
    >
        <Box className="modal-content" sx={{ ...style, width: 600 }}>
            <h2 id="parent-modal-title">Login</h2>
            <div className='form-group'>
              <label>Username</label>
              <input
                type='text'
                placeholder='Username'
                name='user'
                onChange={handelChanges}
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='text'
                placeholder='Password'
                name='password'
                onChange={handelChanges}
              />
            </div>
            <button onClick={() => login()} className='btn'>
              Login
            </button>
        </Box>
    </Modal>
  )
}

export default Login;
