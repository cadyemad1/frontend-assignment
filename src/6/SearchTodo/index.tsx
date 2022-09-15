import {useState} from "react";

const Search = ({onSearch}:any) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange= (e:React.ChangeEvent<HTMLInputElement>) =>{ 
      setInputValue(e.target.value);
      onSearch(e.target.value);
      }

  return (
    <div>
      <input placeholder="Search for a todo..." value={inputValue} onChange={(e)=>handleInputChange(e)}/>
    </div>
  );
};

export default Search;