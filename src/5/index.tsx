import { FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";

const Task4: FunctionComponent = () => {
  const searchResults: string[] = ["react","reactjs","angular","vue","vuejs"];
  const [items, setItems] = useState<string[]>([]);

  const handleSearch = (value:string) =>{
    if(value){
      const filteredItems = searchResults.filter(el => el.includes(value))
      setItems(filteredItems)
    }
    else{
      setItems([])
    }
  }

  return (
    <div>
      <Input handleSearch={handleSearch} />
      <br />
      <List items={items} />
    </div>
  );
};

export default Task4;
