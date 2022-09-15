import {useState} from "react";

import "./index.less";

const CreateTodo = ({onCreate}:any) => {
    const [newTodo,setNewTodo] = useState<string>();

    const handleCreate = () =>{
        setNewTodo('');
        onCreate(newTodo)
    }
  return (
    <div className="wrapper"> 
      <input className="input-todo" value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}}/>
        <button className="btn-todo" onClick={handleCreate}>add todo</button>
    </div>
  );
};

export default CreateTodo;