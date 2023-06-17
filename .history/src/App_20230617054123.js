import React,{useState,useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Pictures from './components/pictures/Pictures'
import Search from './components/pictures/Search'
import About from './components/pages/About'

const App = () => {
  const [pictures, setPictures] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  
  const getPictures =async() => {
    setLoading(true)
    const res = await axios.get(`https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640`)
    setPictures(res.data.hits)
    setLoading(false)
  }

  const searchPictures =async text => {
    setLoading(true)
    const res = await axios.get(`https://pixabay.com/api/?q=${text}&key=${process.env.REACT_APP_API_KEY}`)
    setPictures(res.data.hits)
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

  useEffect(() => {
    getPictures()
  },[])

  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="container">  
      <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={
            <>
              <Fragment>
                <Search
                searchPictures={searchPictures}
                clearPicture={clearPictures}
                showClear={pictures.length > 0 ? true : false}
                setAlert={showAlert}
                />
                <Pictures pictures={pictures} loading={loading} />
              </Fragment>  
            </>
          } />
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
