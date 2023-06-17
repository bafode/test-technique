import React,{useState,useEffect} from 'react';
import { Router, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Pictures from './components/pictures/Pictures'
import Search from './components/pictures/Search'

const App = () => {
  const [pictures, setPictures] = useState([])
  const [loading, setLoading] = useState(false)
  const [picture, setPicture] = useState({})
  const [alert, setAlert] = useState([])
  
  // const getPictures =async() => {
  //   setLoading(true)
  //   const res = await axios.get(`https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640`)
  //   setPictures(res.data.hits)
  //   setLoading(false)
  // }

  const searchPictures =async text => {
    setLoading(true)
    const res = await axios.get(`https://pixabay.com/api/?key=17555297-
    46a99d3dc7abf78679ec9e640&q=yellow+flowers&image_type=photo&pretty=true/`)
    setPicture(res.data.hits)
    setLoading(false)
  }


  const clearPictures =async text => {
    setPictures([])
    setLoading(false)
  }


  //set Alert
  const showAlert=(msg, type)=>{
    setAlert( { msg, type })
    
    setTimeout(()=>setAlert(null),5000)
  }

  // useEffect(() => {
  //   getPictures()
  // },[])

  return (
    <div className="App">
      <Navbar />
      <div className="container">  
      <Alert alert={alert} />
        <Search
          searchPictures={searchPictures}
          clearPicture={clearPictures}
          showClear={pictures.length > 0 ? true : false}
          setAlert={showAlert}
        />
        <Pictures pictures={pictures} loading={loading} />
      </div>
    </div>
  );
}

export default App;
