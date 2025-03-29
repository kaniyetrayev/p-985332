
import React from "react";

export const SuccessMessage: React.FC = () => {
  return (
    <>
      <h1 className="text-[32px] font-bold text-center mb-4">
        Payment successful
      </h1>
      
      <p className="text-gray-500 text-center text-lg max-w-md mb-8">
        Welcome to World Connect. We've created your eSIM and you're good to go.
      </p>
    </>
  );
};
