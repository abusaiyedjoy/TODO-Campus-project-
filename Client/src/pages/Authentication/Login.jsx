/* eslint-disable react/no-unescaped-entities */

import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="bg-gray-100 flex items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/tpFBnyBF/todo-list.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <a
        href="/"
        className="absolute left-3 top-3 bg-slate-500 px-[10px] py-1 rounded-full text-xl my-5 font-bold text-center text-gray-200 hover:text-primary"
      >
        <FaArrowLeft />
      </a>
      <div className="w-full max-w-md p-6 my-5 space-y-3 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800">Login</h1>
        <p className="text-sm text-center text-gray-600">Sign in to your account</p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter your password"
              required
            />
            <Link to="/forgot" className="text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>


          <button
            type="submit"
            className="w-full py-2 bg-primary text-white text-2xl font-bold rounded-md shadow hover:bg-secondary focus:ring focus:ring-offset-2 focus:ring-primary"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center mt-4 space-x-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-600">or login with Google</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center px-4 w-full">
          <Link to="/login" className="flex items-center w-full gap-3 px-4 justify-center mt-2 text-gray-600 transition-colors duration-300 transform border rounded-lg">
            <FcGoogle />
            <span className=" py-3 font-bold text-center">Sign in with Google</span>
          </Link>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don't have an account? <Link to='/register' className="text-primary hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
