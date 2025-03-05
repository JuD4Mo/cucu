import React, { useState } from "react";
import Display from "./components/Display/Display"
import ButtonPanel from "./components/ButtonPanel/ButtonPanel";

const App = () => {
  const [input, setInput] = useState("");
 
  const handleClick = (value) => {

    if(input.length >= 1){
    let lastCharacter = input.slice(-1)
    if(lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' || lastCharacter == '/' || lastCharacter == '.'){
      if(value == '+' || value == '-' || value == '*' || value == '/' || value == '.'){
          return;
      }
    }
  }
    if (value === "=") {
      try {
        setInput(eval(input));
      } catch {
        setInput("Error");
      }
    }else if (value === "C") {
      setInput("");
    }else if (value === "DEL"){
      setInput(input.slice(0,-1));
    }else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};

export default App;
