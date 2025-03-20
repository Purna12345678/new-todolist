import React from "react";

const Card = ({ item, toggleSelection, removeItem }) => {
  return (
    <div className="listitem1">
      <input
        type="checkbox"
        className="item-checkbox"
        checked={item.selected}
        onChange={() => toggleSelection(item.id)}
      />
      {item.selected ? (
        <strike>
          <li className="listitem2">{item.value}</li>
        </strike>
      ) : (
        <li className="listitem">{item.value}</li>
      )}
      {item.selected && (
        <button className="remove-this" onClick={() => removeItem(item.id)}>
          x
        </button>
      )}
    </div>
  );
};

export default Card;
