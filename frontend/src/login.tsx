import React from 'react';
import '../src/style/login.css';

function Login() {
    return (
      <div className="background">
        <table style={{margin:"auto"}}>
          <tbody>
            <tr>
              <td><label >Username:</label></td>
              <td><input type="text" id="username" name="username"></input></td>
            </tr>
            <tr>
              <td>
                <label >Password:</label>
              </td>
              <td>
                <input type="password" id="password" name="password"></input>
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={{textAlign:"center"}} >
              <input type="submit" value="Login"></input>
              </td>
            </tr> 
          </tbody>        
        </table>
      </div>
    );
  }
  
  export default Login;