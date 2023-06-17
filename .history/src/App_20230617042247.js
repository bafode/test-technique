import React,{useState,useEffect} from 'react';
import { Router, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar'

const App = () => {
  const [pictures, setPictures] = useState([])
  const [loading, setLoading] = useState(false)
  const [picture, setPicture] = useState({})
  const [alert, setAlert] = useState([])
  
  const getPictures =async() => {
    setLoading(true)
    const res = await axios.get(`https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640`)
    setPictures(res.data.hits)
    setLoading(false)
  }

  const clearPictures =async text => {
    setPictures([])
    setLoading(false)
  }

  useEffect(() => {
    getPictures()
  },[])

  return (
    <div className="App">
      <Navbar />
      {JSON.stringify(pictures)}
    </div>
  );
}

export default App;
