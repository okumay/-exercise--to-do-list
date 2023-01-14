import { useState } from "react";

const ListItem = ({ addListItem, removeListItem, value, onChange, id }) => {
  const [checked, setChecked] = useState("");

  return (
    <li key={id}>
      <input
        type="checkbox"
        className="check"
        defaultChecked={false}
        onClick={() => setChecked((checked) => !checked)}
        disabled={value ? false : true}
      ></input>
      <input
        id={id}
        value={value}
        type="text"
        placeholder="type something!"
        data-checked={checked ? true : false}
        className={checked ? "checked" : ""}
        onChange={(e) => onChange(id, e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addListItem(id) : "")}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      ></input>
      <button
        className="remove"
        onClick={() => removeListItem(id)}
        type="button"
      >
        ×
      </button>
    </li>
  );
};

export default ListItem;
