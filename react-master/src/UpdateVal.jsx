import React, { useState } from "react";

const UpdateVal = () => {
  const [val, setVal] = useState([1,2,3,4,5,6,7,8,9,10]);

  return (
    <div className="w-full h-screen bg-zinc-900 flex justify-center items-center flex-col">
      
      {val.map(item=>
        <h1 className="text-4xl text-white mt-3">{item}</h1>
      )}
      
      
      <button
        onClick={() => {
          setVal(()=>val.filter((item,index)=> index !== val.length-1) );
          console.log(val);
          
        }}
        className="px-6 py-2 bg-black rounded-full text-white text-2xl mt-10"
      >
        Click
      </button>
    </div>
  );
};

export default UpdateVal;
