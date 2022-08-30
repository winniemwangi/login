import React from "react";
import bike from "./images/bikeremoved.png"
<script src="https://kit.fontawesome.com/3fc43c6e4b.js" crossorigin="anonymous"></script>


const Users = ()=>{
  return(
    <div className='main'>
      <div className="form">
        <h5>EddieShop</h5> 
        <h6>don't have an account? signup</h6>
        <div className="header3">
          <p>Welcome Back</p>
        </div>
        <div className='formm'>
      
          <form className="form1">
            <label for="email">Email</label>
            <br></br>
            <input type="text" id="email" placeholder="your email" name="email" required></input>
            <br></br>
            <label for="password">password</label>
            <br></br>
            <input type="text" id="password" placeholder="atleast 8 characters" name="password" required></input>
          </form>
        </div>
    
        <div className='checkbox'>
          <input type="checkbox" id="veh" name="veh" value="name"></input>
          <div className="log">
            <p>keep me logged in </p>
          </div>
          <div className="pass">
            <a href="forgot password">forgot password?</a>
          </div> 
          <button type="submit" className="btn">button</button>
        </div>
        <div className="or">
          <p>-------------------Or--------------------</p>
        </div>

        <div className="facebook">
        <i class="fa-brands fa-facebook" />
        </div>

        <div className="google">
        <i class="fa-brands fa-google" />
        </div>
        <div className="insta">
        <i class="fa-brands fa-square-instagram" />
        </div> 
        
      </div>

      <div className="image">
        <img src= {bike} alt=""/>
      </div>

      
    </div>
  )
}


// / import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
    
//   );
// }

// export default App;
export default Users