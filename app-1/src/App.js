import React, { useState } from "react";
import List from "./components/List";
import AddTodo from "./components/AddTodo";

import "./App.css";

function App() {
  const [list, setList] = useState([]);

  function AddItem(item) {
    const newList = [...list, item];
    setList(newList);
  }

  return (
    <div className="App">
      <AddTodo AddItem={AddItem} />
      <List list={list} />
    </div>
  );
}

export default App;
