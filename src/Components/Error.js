import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const err = useRouteError();
  // console.log(err.error.message);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Oops! Something went wrong...
        </h1>
        <div className="mb-4">
          <p className="text-lg text-gray-600">Error Code: {err.status}</p>
          <p className="text-lg text-gray-600">{err.error.message}</p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => navigate("/")}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
