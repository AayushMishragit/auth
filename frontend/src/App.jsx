import { useState,useEffect } from 'react';
import React from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/hello/")
    .then(response => {setData(response.data.message)
      setLoading(false);
    })

    .catch(error => document.error("There was an error!", error));
  },[]);

  return (
    <>
    
    
    <h1>
      <h1>data</h1>
      <mark>{data}</mark>
    </h1>
      
    </>
  )
}

export default App
