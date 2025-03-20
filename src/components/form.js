import React, { useState } from "react";
import Button from "./reusablecomponents/Button";
import Input from "./reusablecomponents/Input";
import Card from "./reusablecomponents/Card";
import "./form.css";

const Form = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const addToList = (event) => {
    if (task.trim() !== "") {
      setList([...list, { id: Date.now(), value: task, selected: false }]);
      setTask("");
    }
  };

  const toggleSelection = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const removeSelectedItems = () => {
    setList(list.filter((item) => !item.selected));
  };

  const toggleSelectAll = () => {
    let allSelected = list.every((item) => item.selected);
    setList(list.map((item) => ({ ...item, selected: !allSelected })));
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="box1">
      <div>
        <input
          className="select-all"
          type="checkbox"
          onChange={toggleSelectAll}
          checked={list.length > 0 && list.every((item) => item.selected)}
        />

        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addToList()}
        />
      </div>

      <div>
        {list.map((item) => (
          <Card
            key={item.id}
            item={item}
            toggleSelection={toggleSelection}
            removeItem={removeItem}
          />
        ))}
      </div>

      {list.length > 0 && (
        <div id="footer1">
          <p id="count">{list.length} items left</p>
          <Button text="All" variant="secondary" />
          <Button text="Active" variant="secondary" />
          <Button text="Completed" variant="secondary" />
          {list.some((item) => item.selected) && (
            <Button
              text="Clear completed"
              onClick={removeSelectedItems}
              variant="danger"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
