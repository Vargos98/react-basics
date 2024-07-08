import React, { useState } from "react";

const UpdateVal = () => {
  const [val, setVal] = useState([
    {name: "umesh",age:24},
    {name: "ramesh",age:24},
    {name: "suresh",age:24},

  ]);

  return (
    <div className="w-full h-['100%'] bg-zinc-900 flex justify-center items-center flex-col">
      
      {val.map(item=>
        <div>
        <h1 className="text-4xl text-white mt-3">{item.name}</h1>
        <h2 className="text-4xl text-white mt-3">{item.age}</h2>
        </div>
      )}
      
     <button  
        >
        Update
      </button>

     
    </div>
  );
};

export default UpdateVal;
