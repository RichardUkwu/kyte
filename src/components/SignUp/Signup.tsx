import "./Signup.scss";

const Signup = () => {
  return (
    <div className="login">
      <div className="card">
        <h1>Sign Up</h1>
        <p>
          By continuing, you agree to our User Agreement and acknowledge that
          you understand the privacy policy
        </p>
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
          <input placeholder="Email *" type="text" />
        </form>
        <p>
          Already on Kyte? <a href="">Log In</a>
        </p>

        <button>Log In</button>
      </div>
    </div>
  );
};
export default Signup;
