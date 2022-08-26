import React from "react";
import toast from "react-hot-toast";

const Ask = () => {
  return (
    <div className="py-16 bg-orange-50">
      
      <div className="mx-auto bg-white shadow-lg rounded-md shadow-orange-100 p-10 md:w-[500px] mt-5">
      <h1 className="text-2xl my-5 text-center">
        Do you have any question?  <br />Ask now!
      </h1>
        <textarea
          className="mt-3 md:max-w-[450px] border-2 py-3 px-3 w-full md:min-w-[350px] block rounded-md outline-orange-500"
          name="question"
          cols="30"
          rows="8"
          placeholder="Type your question!"
        ></textarea>
        <button
        onClick={() => toast.success("Successfully send", {id: 'question-send'})  }
          className="mt-3 border-2 py-3 cursor-pointer rounded-md uppercase px-10 block w-full  text-orange-500 bg-orange-100  shadow hover:bg-orange-200"
        >Send </button>
      </div>
    </div>
  );
};

export default Ask;
