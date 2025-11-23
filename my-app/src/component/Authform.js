import React from 'react'

function Authform() {
  const [islogin, setIslogin] = React.useState(false);
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={islogin ? 'active' : ''} onClick={() => setIslogin(true)}>Login</button>
          <button className={!islogin ? 'active' : ''} onClick={() => setIslogin(false)}>sign up</button>

        </div>
        {islogin ? <>
          <div className='form'>
            <h2>Login form</h2>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <a href="#">forgot password</a>
            <button>Login</button>
            <p>not a member? <a href='#' onClick={() => setIslogin(false)}>Signup Now</a></p>
          </div>
        </> : <>
          <div className='form'>
            <h2>Signup form</h2>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirm Password' />
            <button>Sign up</button>

            </div>
 
          
        )}
        


        </div>

      </div>
      )
}

      export default Authform
