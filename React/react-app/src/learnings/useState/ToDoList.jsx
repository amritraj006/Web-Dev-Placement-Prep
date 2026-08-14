
import {useState} from 'react'

const ToDoList = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const addToDo = () => {
        setList((prev) => [...prev, input]);
        setInput("");
    }

    const deleteTodo = (index) => {
        setList((prev) => prev.filter((_, i) => i !== index));
    }

  return (
    <div>
        <div>
        <h1>
            To Do List
        </h1>

        <input value={input} onChange={handleChange} type="text" placeholder='Add Task' />
        <button onClick={addToDo}>Add</button>
        </div>

        <div>
            <ol>
                {list.map((item, index) => (
                    <li key={index}>{item} <span onClick={() => deleteTodo(index)} style={{ color: "red", cursor: "pointer" }}>X</span></li>
                ))}
            </ol>
        </div>
    </div>
  )
}

export default ToDoList