import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TopicQuiz = () => {
  const quizLoad = useLoaderData();
  const quizData = quizLoad.data;
  const quizQuestion = quizData.questions;
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div className="py-5 pb-9 md:w-9/12 mx-auto">
      <div className="text-center py-4">
        <h3 className="text-4xl text-blue-700 font-bold">
          Quiz of {quizData.name}
        </h3>
      </div>
      <div className="question">
        {quizQuestion.map((singleQus, index) => (
          <div className="bg-base-100 shadow-lg py-5 px-2 rounded-md mb-6">
            <h2 className="text-center mb-2 text-xl font-semibold text-blue-600">
              Quiz: {index + 1} {singleQus.question}
            </h2>
            <div className="options grid md:grid-cols-2 gap-4 p-4 text-left">
              {singleQus.options.map((option, index) => (
                <div className="form-control" key={index}>
                  <label className="label justify-start cursor-pointer">
                    <input
                      type="radio"
                      name="radio"
                      onChange={() => {
                        if (singleQus.correctAnswer === option) {
                          setCount(count + 1);
                          toast("congratulations!you selected Wrong Answer ");
                        } else {
                          toast("Sorry! you selected wrong Answer");
                        }
                      }}
                      className="radio checked:bg-red-500"
                    />
                    <span className="label-text ml-2">{option}</span>
                  </label>

                  <ToastContainer />
                </div>
                // <div
                //   onClick={() => handleAddToClick(option)}
                //   className="border text-xl rounded-md p-4 text-left cursor-pointer"
                // >
                //   <span className=" text-blue-600">{index + 1}. </span>
                //   <span>{option}</span>
                // </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicQuiz;
