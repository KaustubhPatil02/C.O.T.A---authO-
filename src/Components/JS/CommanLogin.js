import React from 'react'
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import '../CSS/CommanLogin.css'

/*import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../firebaseconfig';
*/
//const firebaseApp = firebase.initializeApp(firebaseConfig);

function CommanLogin() {
/*const {
  user,
  signOut,
  signInWithGoogle,
} = this.props;*/
  return (
    <div className='main' style={{ marginTop: "30px", padding: "5px" }}>
      <div style={{ width: "1000px", height: "620px", backgroundColor: '#d8d6d6', paddingTop: '100px', paddingBottom: "10px", boxShadow: "1px 2px 1px gray" }} className="login">
        <h1 data-aos="fade-right" style={{ textAlign: "center" }} className='heading'>Login</h1>
        <div className="borders" data-aos="fade-left"></div>
        <div id='Contact' style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Phone Number</h5><BsFillTelephonePlusFill /></label>
              <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ height: "46px" }} placeholder="Enter Your Phone" required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label" style={{ display: "flex", textAlign: "center", gap: "10px" }} ><h5>Password</h5><RiLockPasswordFill /></label>
              <input type="password" className="form-control" id="exampleInputPassword1" style={{ height: "46px" }} placeholder="Enter Your Password" required />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
            <h6 style={{ marginTop: "10px" }}> Sign Up As Service Provider<NavLink to='/Admin'>SignUp</NavLink></h6>
            <h6 style={{ marginTop: "10px" }}> Sign Up As Customer<NavLink to='/SimpleUser'>SignUp</NavLink></h6>
          </div>
      </div>
      {/* {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      } */}
    </div>
  )
}
export default CommanLogin;