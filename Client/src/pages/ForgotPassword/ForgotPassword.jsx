import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div
      className="bg-gray-100 flex items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/HBYwtL2/v2osk-1-Z2nii-BPg5-A-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <a
        href="index.html"
        className="absolute left-3 top-3 bg-slate-500 px-[10px] py-1 rounded-full text-xl my-5 font-bold text-center text-gray-200 hover:text-[#1DD100]"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="w-full max-w-md p-6 my-5 space-y-3 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Forgot Password</h1>
        <p className="text-sm text-center text-gray-600">Enter your email to reset your password</p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#1DD100] focus:border-[#1DD100]"
              placeholder="example@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#1DD100] text-white text-xl font-bold rounded-md shadow hover:bg-[#16b100] focus:ring focus:ring-offset-2 focus:ring-[#1DD100]"
          >
            Reset Password
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Remembered your password? <Link to="/login" className="text-[#1DD100] hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
