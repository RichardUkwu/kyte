import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className='card'>
        <h1>Log In</h1>
        <p>By continuing, you agree to our User Agreement and acknowledge that you understand the privacy policy</p>
        <div>
          <img src="Icons/google.png" alt="" />
          <p>Continue with google</p>
        </div>
        <div>
          <img src="/Icons/apple.png" alt="" />
          <p>Continue with apple</p>
        </div>
        <span></span>
        <form>
          <input placeholder='Email or username *' type="text" />
          <input placeholder='password *' type="text" />
        </form>
        <p><a href="">Forgot password</a></p>
        <p>New to reddit? <a href="">Sign Up</a></p>
        
        <button>Log In</button>
      </div>
    </div>
  );
}
export default Login;