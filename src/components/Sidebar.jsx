import { useState, useCallback } from "react";

export default function Sidebar({ initialMenuItems }) {  
  // TODO 2: Maintain menu items as state, initialized from the prop "initialMenuItems"
  let [menuItems, setMenuItems] = useState(initialMenuItems); 
  let [newMenuItem, setNewMenuItem] = useState(""); 
  let [filter, setFilter] = useState(""); 

  // TODO 3: Implement addMenuItem function to add a new item from the input box
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems(prevItems => [...prevItems, newMenuItem]); 
      setNewMenuItem(""); 
    }
  }, [newMenuItem]);

  // TODO 4: Filter menu items dynamically using case-insensitive matching
  let filteredItems = menuItems.filter(item => 
    new RegExp(filter, "i").test(item)  
  );

  return (
    <div>
      {/* TODO 4: Input field to filter menu items */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
      <br />

      {/* TODO 1: Render menu items as an unordered list */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* TODO 3: Input field for adding a new menu item */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />

      {/* TODO 3: Button to add new menu item */}
      <button onClick={addMenuItem}>Add Item</button>
    </div>
  );
}
