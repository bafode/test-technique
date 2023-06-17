import React,{Fragment} from 'react'

function About() {
  return (
    <Fragment>
      <div className="container">
      <h1>About this App</h1>
        <p>App to search pictures from Pixabay API</p>
        <p>version:1.0.0</p>
        <div className='text-center py-3'>Copyright &copy; My Digital School 2023</div>
      </div>
     </Fragment>
  )
}

export default About