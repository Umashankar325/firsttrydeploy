import React from "react";

const App = () => {
  // const Clickhandler=()=>{
  //   console.log("button clicked");

  // }
  const Clickhandler = (msg) => {
    console.log(msg);
  };
  const wrapper = () => Clickhandler("button cliked ");


  const dikahna = import.meta.env.VITE_CROMPASSS
  console.log(dikahna)
  // let status=

  return (
    <div className="text-3xl bg-slate-300 text-red text-center">
      <h1>App</h1>
      <h2>{dikahna}</h2>
      {/* <button
        onClick={() => Clickhandler("button cliked ")}
        className="px-4 py-2 bg-red-300 rounded mt-5  "
      >
        Click me
      </button> */}
    </div>
  );
};

export default App;
