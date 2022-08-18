import React, {useState} from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ToDoItem from "./ToDoItem.jsx";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  //Show the previous ToDos via useState.
  const [toDos, setToDos] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputTodo(newValue)
  }

  const addValue = () => {
    setToDos((prevValues) => {
      return [...prevValues, inputTodo]
    })
    //Clear the input area after submitting.
    setInputTodo("");
};

  return (
    <div>
    <Header />
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputTodo} />
        <button onClick={addValue}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDos.map(todoItem => (
            <ToDoItem 
              text={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  )
};

export default App;
