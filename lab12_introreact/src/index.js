import React from 'react';
import ReactDOM from 'react-dom/client';
import whitecar from './images/car.jpg'
import './index.css'

//content in the app
const App = function(){
  // creating a JSX variable
  const anymsg= "I am text constant variable"

  return(
    <>
     <h1 style={{color:'magenta', textAlign: 'center'}}>Welcome to React js </h1> 
     <h2 style={{fontFamily: 'algerian'}} className='subtitle'>Daniel Quan</h2>
     <figure style={{border: 'inset olive 20px', width: '60%', margin:'auto'}}>
      <img src={whitecar} style={{width:'100%', display:'block'}}/>
     </figure>
     <h2 style={{padding: '2em'}}>{anymsg}</h2>
    </>
  )
}

//rooting and running the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);