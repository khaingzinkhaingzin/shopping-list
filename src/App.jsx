import { useState } from "react";
import "./styles.css"

const App = () => {
  const [items, setItems] = useState([]);

  function addToList(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });

    setItems(newItems);
  }

  return (
    <>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <h2>Items To Buy</h2>
        <form onSubmit={addToList}>
          <input 
            type="text" 
            name="item"
            placeholder="Add a new item"
            required
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item 
              key={index}
              item={item}
              onRemoveItem={onRemoveItem}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

function Item({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
}

export default App