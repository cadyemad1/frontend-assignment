import { FunctionComponent, useState } from "react";

const Task2: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const handleInputChange= (e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return (
    <div>
      <label>Controlled Input: </label>
      <input value={value} onChange={(e)=>handleInputChange(e)}/>
      <br />
      <br />
      <p>{value}</p>
    </div>
  );
};

export default Task2;
