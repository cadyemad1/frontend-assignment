import { FunctionComponent, useState } from "react";

const Task3: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const searchResults: string[] = ["react","reactjs","angular","vue","vuejs"];

  const handleInputChange= (e:React.ChangeEvent<HTMLInputElement>) =>{ 
  setInputValue(e.target.value);
  const filteredItems = searchResults.filter(el => el.includes(e.target.value))
  setItems(filteredItems)
  }

  return (
    <div>
      <label>Search Input: </label>
      <input value={inputValue} onChange={(e)=>handleInputChange(e)}/>
      <br />
      <br />
      <ul>{items.map(item =><li key={item}> {item}</li> )}</ul>
    </div>
  );
};

export default Task3;