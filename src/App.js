import './App.css';
import React, {useState} from 'react'

function App() {
  const [values, setValues] = useState('')
  return (
    <div className="form-container">
      <form className="register-form">
        <input
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <button> Register</button>
      </form>
    </div>
  );
}

export default App;
