import axios from 'axios';
import { useState  } from 'react';

// login function
export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // submit logic
     const submit = async (e) =>{
        e.preventdefault();
        const user = {
            username:username,
            password:password,
        };
        //create a post request to the backend
        const {data} = await axios.post('https://http://127.0.0.1:8000/token/',user,{headers:{'content-type':'application/json'},withCredentials:true})
        //initialize and access the refresh token from the response
        localStorage.setItem('refresh_token',data.refresh);
        //access the access token from the response
        localStorage.setItem('access_token',data.access);
        axios.defaults.headers['Authorization'] = `Bearer ${data.access}`;//set the default authorization header for future requests
        window.location.href = '/';//redirect to home page after login
     }


    return (
        <>
           <form action="post" className = 'flex flex-col justify-center items-center' onSubmit={submit}><br/>
               <label >Username:</label><br />
               <input type='text' placeholder='Username' value={username} onChange={e =>setUsername(e.target.value)}></input><br/>
                <label >Password:</label>   <br />
                <input type='password' placeholder='Password' value={password} onChange={e =>setPassword(e.target.value)}></input><br/>
                <button type='submit'>Login</button>
           </form>
           
             
        </>
    )
};