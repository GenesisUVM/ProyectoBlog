import { useState } from "react";
import '../blogPage/menuLateral.css'

function MenuGorup({ items, heading, onSelectItem }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2>{heading}</h2>
      {items.length === 0 && <p>No item found</p>}
      <ul className="listGroup">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "listGroupItem active"
                : "listGroupItem"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuGorup;
