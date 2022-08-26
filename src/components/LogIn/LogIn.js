import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.inti";
import Loading from "../Loading/Loading";

const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (loading) {
    return <Loading />;
  }
  console.log(user);

  if (error) {
    toast.error(error.message, { id: "user-error" });
  }
  return (
    <div className="bg-white p-5 flex justify-center items-center h-[90vh] m-5">
      <div className=" border-orange-500 shadow-orange-300 rounded-md border-2 shadow-lg p-10">
        <form className="" action="">
          <h1 className="text-2xl text-center mb-5">Please LogIn!</h1>
          <input
            required
            className="mt-3 border-2 py-3 px-3 w-full min-w-[350px] block rounded-md outline-orange-500"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            required
            className="mt-3 border-2 py-3 px-3 w-full min-w-[350px] block rounded-md outline-orange-500"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="mt-3 border-2 py-3 cursor-pointer rounded-md uppercase px-10 block w-full  text-orange-500 bg-orange-100  shadow hover:bg-orange-200"
            type="submit"
            value="Log In "
          />
        </form>
        <p className="my-3">
          Don't have an account?{" "}
          <Link className="text-blue-600" to="/sign-up">
            SignUp
          </Link>{" "}
        </p>
        <div className="grid grid-cols-3 my-3 w-full">
          <span className=" border-t-4 border-orange-400 rounded-sm mt-2 w-full text-center"></span>{" "}
          <span className="text-gray-600 text-center">OR</span>{" "}
          <span className=" border-t-4 border-orange-400 rounded-sm mt-2 w-full text-center"></span>
        </div>
        <button
          onClick={() => signInWithGoogle()}
          className="mt-3 border-2 py-3 cursor-pointer rounded-md uppercase px-10 block w-full  text-orange-500 bg-orange-100  shadow hover:bg-orange-200"
        >
          {" "}
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
