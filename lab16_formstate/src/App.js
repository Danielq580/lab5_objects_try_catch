import './App.css';
import { useState } from 'react';

function App() {
  // OPEN AND CLOSE BUTTON
  const [isOpen, setIsOpen] = useState(false)

  //Function to toggle the isOpen state
  const openreadmore = function (){
    setIsOpen(!isOpen)
  }

  // setState for 'form'
  const [inputs, setInputs] = useState ({}) 

  // function to capture the input username
  const capturename = function (e){
    setName(e.target.value)
  }

  // function to submit the form
  const submitform = function(e){
    e.preventDefault()
    alert(`Welcome to React form ${inputs.username} \nYour age is ${inputs.age}`)
  }

  //function to collect all values in the form
  const handlechage = function(e){
    const name = e.target.name
    const value = e.target.value
    setInputs(values => ({...values, [name]:value}))
  }
  return (
    <div className="App">
      <h1>Daniel Quan</h1>
      <div className='info'>
        <p><b>Cat (Felis catus)</b>, commonly referred to as the domestic cat or house cat</p>
        <button className='readmorebtn' onClick={openreadmore}>{isOpen ? "Hide" : "Read More"} </button>
      </div>
      <section>
        {
          isOpen &&
        <div className='readmore'>
          <p> The cat is meow meow meow. dog is dog and cat is cat.</p>
        </div>
}
      </section>

      <form onSubmit={submitform}>
        <fieldset>
          <legend>User information</legend>
            <label for="username">Enter a name: </label>
            <input 
            type='text'
            id='username' 
            name='username'
            placeholder='Type your name...' 
            value={inputs.username} 
            onChange={handlechage}
            />
            <label for ="age">Enter an age: </label>

            <input
              type='number'
              name='age'
              id='age'
              value={inputs.age}
              onChange={handlechage}
            />
          {/** submit button */}
          <div>
            <input type='submit'/>
          </div>

        </fieldset>
      </form>

    </div>
  );
}

export default App;
