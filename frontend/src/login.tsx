import React from 'react';

function Login() {
    return (
      <div className="Login">
        <header className="Login-header">
            <label >Username:</label>
            <input type="text" id="username" name="username"></input><br></br>
            <label >Password:</label>
            <input type="text" id="password" name="password"></input><br></br>
            <input type="submit" value="Login"></input>
        </header>
      </div>
    );
  }
  
  export default Login;