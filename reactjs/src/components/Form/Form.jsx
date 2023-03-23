import React from 'react'
import "./Styles.css"
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';

const Form = () => {
  return (
    <div id="wrapper">
        <main>
            <div id="form-div">
                <div id="form-top-section">
                    <h1>Create Account</h1>
                    <div className='log-buttons'>
                        <button className="social-login"><img className="social-icons" src={google} alt="google logo" />Sign up with Facebook</button>
                        <button className="social-login"><img className="social-icons" src={facebook} alt="facebook logo" />Sign up with Google</button>
                    </div>
                </div>
                <p id="or-div">OR</p>
                <form id="form" action="">
                    <input name="name" type="text" placeholder="Full Name" />
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button>Create Account</button>
                    <p id="already-had-account">Already have an account? <a href="./">Login</a></p>
                </form>
            </div>
            <div id="vertical-rl">Company</div>
        </main>
    </div>
  )
}

export default Form