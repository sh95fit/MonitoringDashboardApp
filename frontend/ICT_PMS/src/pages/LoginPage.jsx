import coverimg from "../assets/images/zero_solution.png"
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  return (
    <div className="flex justify-center my-5">
      <img className="w-[30%] lg:flex hidden" src={coverimg} alt="" />
      <div className="w-96 bg-white shadow">
        <div className="m-5">
          <h2 className="text-3xl text-center text-primary">Login</h2>
          <form action="">
            {/* ---- input email --- */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="">
                <span className="label-text">Your E-mail</span>
              </label>
              <input type="email"
                placeholder="Your E-mail"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* ---- input password --- */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="">
                <span className="label-text">Your Password</span>
              </label>
              <input type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex justify-start">
              <input type="submit" value="Sign In" className="btn btn-primary max-w-xs text-white w-full my-5"/>
            </div>
          </form>

          <p>If you new here, Please <a href="#" className="text-primary">Sign Up</a></p>

          <div className="divider">OR</div>

          <button className="flex btn btn-primary max-w-xs text-white w-full my-5 w-20px"><FcGoogle className="text-2xl" /> Continue with Google</button>
        </div>
      </div>
    </div>
  )
}


export default LoginForm;