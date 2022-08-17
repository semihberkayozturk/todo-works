function ToDoSchema(props) {
    const year = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    return (
        <div className="container">
      <div className="heading">
        <h1>{year}</h1>
      </div>
      <div className="form">
        <input type="text" value={props.value} onChange={props.change}/>
        <button onClick={props.click}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {props.ul}
        </ul>
      </div>
    </div>
    );
}

export default ToDoSchema;