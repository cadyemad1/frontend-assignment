import { useState } from "react";

import TodoItem from '../TodoItem';
import Search from "../SearchTodo";
import { TodoStatus } from '../Constant';
import * as Types from '../Types'
import CreateTodo from "../CreateTodo";

import './index.less';

const items = [
    { id: '1', title: 'Run errands', status: TodoStatus.PENDING },
    { id: '2', title: 'Clean Home', status: TodoStatus.PENDING },
    { id: '3', title: 'Do homework', status: TodoStatus.PENDING },
    { id: '4', title: 'Go shopping', status: TodoStatus.PENDING },
];

const TodoList = () => {
    const [status, setStatus] = useState(TodoStatus.PENDING);
    const [searchValue, setSearchValue] = useState('');
    const [todos, setTodos] = useState<Array<Types.TodoItem>>(items);

    const onCheck = (todoId: string) => {
        const updatedTodos: Array<Types.TodoItem> = todos.map((todo: Types.TodoItem) => {
            if (todo.id === todoId) {
                return todo.status === TodoStatus.PENDING
                    ? { ...todo, status: TodoStatus.DONE }
                    : { ...todo, status: TodoStatus.PENDING }
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const onDelete = (todoId: string) => {
        const filteredTodos = todos.filter((todo: Types.TodoItem) => todo.id !== todoId);
        setTodos(filteredTodos);
    }

    const onSearch = (value: string) => {
        setSearchValue(value)
    }

    const onCreate = (value:string) =>{   
        const newTodos = todos.concat({id:`${todos.length +1}`, title:value,status:TodoStatus.PENDING});
        setTodos(newTodos);
    }
    return (
        <>

            <Search onSearch={(value: string) => onSearch(value)} />

            <button className={`filters-btn ${status === TodoStatus.DONE ? 'active' : ''}`} onClick={() => setStatus(TodoStatus.DONE)}>Show Done Todos</button>
            <button className={`filters-btn ${status === TodoStatus.PENDING ? 'active' : ''}`}  onClick={() => setStatus(TodoStatus.PENDING)}>Show Pending Todos</button>
            
            <CreateTodo onCreate={onCreate}/>
         
            {todos
                .filter((el: Types.TodoItem) => el.status === status)
                .filter(el => el.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
                .map((item: Types.TodoItem) => <TodoItem
                    key={item.id}
                    title={item.title}
                    onCheck={() => onCheck(item.id)}
                    status={item.status}
                    onDelete={() => onDelete(item.id)}
                />)
            }
           
        </>)
}

export default TodoList;



