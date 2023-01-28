import React from 'react'
import "./Styles.css"

const Form = () => {
  return (
    <div id="wrapper">
        <main>
            <div id="form-div">
                <div id="form-top-section">
                    <h1>Create Account</h1>
                    <button className="social-login"><i className="fa-brands fa-google"></i>Sign up with Facebook</button>
                    <button className="social-login"><i className="fa-brands fa-facebook"></i>Sign up with Google</button>
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