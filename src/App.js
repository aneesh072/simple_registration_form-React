import './App.css';
import React, { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form">
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registration
          </div>
        ) : null}
        <input
          value={values.firstName}
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName ? (
          <span>Pelase enter a first name</span>
        ) : null}
        <input
          value={values.lastName}
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName ? (
          <span>Pelase enter a last name</span>
        ) : null}
        <input
          value={values.email}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email ? <span>Pelase enter an Email</span> : null}

        <button onClick={handleSubmit}> Register</button>
      </form>
    </div>
  );
}

export default App;
