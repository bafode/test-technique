import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
const PictureItem=({picture:{tags,previewURL,pageURL}})=> {
    
    return (
        <div className='card text-center'>
            <img src={previewURL} alt="" className="img-fluid" style={{width:'80%',height:'60%'}} />
            <h3>{tags}</h3>
            <div>
                <a href={pageURL} className="btn btn-dark btn-sm my-1">More</a>
            </div>
      </div>
    )
  }

PictureItem.propTypes = {
    picture:PropTypes.object.isRequired,
}

export default PictureItem
