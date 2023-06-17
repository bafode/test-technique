import React, { useState } from 'react'
import PropTypes from 'prop-types'
const Search = ({showClear,clearPicture,setAlert,searchPictures}) => {
    const [text,setText]=useState("")
    


    const onSubmit=(e)=> {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light')
        } else {
            searchPictures(text)
            console.log(text)
             setText('')
        }
    }
    const onChange = (e) => {
        setText(e.target.value)
    }
 
    return (
        <div>
            <form onSubmit={onSubmit} className="from">
                <input type="text" name="text" placeholder='Search Users...' value={text} onChange={onChange} />
                <input type="submit" value="Search" className='btn btn-dark btn-block' />
            </form>
            {showClear&&<button className="btn btn-light btn-block" onClick={clearPicture}>Clear</button>}
      </div>
    )
  }


Search.propTypes = {
    searchPictures: PropTypes.func.isRequired,
    clearPicture: PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
}

export default Search