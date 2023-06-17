import React from 'react'
import PictureItem from './PictureItem'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
const  Pictures=({pictures,loading})=>{
    
    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div style={pictureStyle}>
                {pictures.map((picture) => (
                    <PictureItem key={picture.id} picture={picture}/>
                ))}
          </div>
        )
    }
    
  }


const pictureStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}
Pictures.propTypes = {
    loading: PropTypes.bool.isRequired,
    pictures:PropTypes.array.isRequired,
}
export default Pictures