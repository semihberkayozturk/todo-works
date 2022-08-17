import React, {useState} from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ToDoSchema from "./ToDoSchema.jsx";

const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputTodo(newValue)
  }

  const addValue = () => {
    setToDos((prevValues) => {
      return [...prevValues, inputTodo]
    })
    setInputTodo("");
};

  return (
    <div>
    <Header />
    <ToDoSchema 
      value={inputTodo}
      change={handleChange}
      ul={toDos.map((toDoItem) => <li>{toDoItem}</li>)}
      click={addValue}
    />
    <Footer />
    </div>
  )
};

export default App;
