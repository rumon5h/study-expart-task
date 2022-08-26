import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.inti";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const [
    signInWithGoogle, 
    gUser, 
    gLoading, 
    gError
] = useSignInWithGoogle(auth);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, uError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user || gUser) {
      navigate("/");
    }
  }, [user, navigate, gUser]);

  if (loading || gLoading || updating) {
    return <Loading/>
  }
  console.log(user);

  if (error || uError || gError) {
    toast.error(error.message || uError.message || gError.message , { id: "user-error" });
  }


  const handleSignUp = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if(password !== confirmPassword){
        return toast.error("Password did not match", {id: 'pass-error'})
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName: name});
  }

  return (
    <div className="bg-white p-5 flex justify-center items-center h-[90vh] m-5">
      <div className=" border-orange-500 shadow-orange-300 rounded-md border-2 shadow-lg p-10">
        <form onSubmit={handleSignUp}>
          <h1 className="text-2xl text-center mb-5">Create New Account!</h1>
          <input
            required
            className="mt-3 border-2 py-3 px-3 w-full min-w-[350px] block rounded-md outline-orange-500"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            required
            className="mt-3 border-2 py-3 px-3 w-full min-w-[350px] block rounded-md outline-orange-500"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            required
            className="mt-3 border-2 py-3 px-3 w-full min-w-[350px] block rounded-md outline-orange-500"
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            required
            className="mt-3 border-2 py-3 px-3 w-full min-w-[350px] block rounded-md outline-orange-500"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
          <input
            className="mt-3 border-2 py-3 cursor-pointer rounded-md uppercase px-10 block w-full  text-orange-500 bg-orange-100  shadow hover:bg-orange-200"
            type="submit"
            value="Sign Up "
          />
        </form>
        <p className="my-3">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/log-in">
            LogIn
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

export default SignUp;
