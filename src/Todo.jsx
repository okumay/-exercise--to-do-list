import { useState } from "react";
import ListItem from "./ListItem";

const Todo = () => {
  const [list, setList] = useState([{ id: 0, value: "" }]);

  const addListItem = (id) => {
    const listArr = [...list, { id: id, value: "" }];
    console.log(listArr);
    setList(listArr);
  };

  const removeListItem = (id) => {
    if (list.length) {
      const listArr = list.filter((l) => l.id !== id);
      setList(listArr);
    }
  };

  return (
    <div className="todo">
      <form onSubmit={(e) => e.preventDefault()}>
        <ul>
          {list.length
            ? list.map((l, i) => (
                <ListItem
                  key={i}
                  addListItem={addListItem}
                  removeListItem={removeListItem}
                />
              ))
            : ""}
        </ul>
        <div className="buttons">
          <button
            type="button"
            className="clear"
            onClick={() => {
              setList([{ id: 0, value: "" }]);
            }}
          >
            Clear list
          </button>
        </div>
      </form>
    </div>
  );
};

export default Todo;
