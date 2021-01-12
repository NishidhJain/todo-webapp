import React from 'react'
import Todo from './Todo'

function App() {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <div className="jumbotron pl-5 w-100 ">
        <h1 >Todo App</h1>
        <h4>What's your plan today??</h4>
      </div>

      {/* <div className="w-50 mt-5 container">
        <Todo />
      </div>
    </div> */}
      <div className="container">
        <Todo />
      </div>
    </div>
  )
}

export default App
