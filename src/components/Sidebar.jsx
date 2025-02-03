import { useState, useCallback } from "react";

export default function Sidebar({ initialMenuItems }) {  // Accept initialMenuItems as a prop
  let [newMenuItem, setNewMenuItem] = useState("");
  let [filter, setFilter] = useState("");
  
  // TODO 2: Maintain menu items as state
  let [menuItems, setMenuItems] = useState(initialMenuItems); 

  // TODO 3: Implement addMenuItem function
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems([...menuItems, newMenuItem]);  // Add new item to state
      setNewMenuItem(""); // Clear input field after adding
    }
  }, [newMenuItem, menuItems]);

  // TODO 4: Filter menu items dynamically
  let filteredItems = menuItems.filter(item => 
    new RegExp(filter, "i").test(item)  // Case-insensitive filtering
  );

  return (
    <div>
      {/* Filter Input */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
      <br />

      {/* Render the filtered menu items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Add New Item Input */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />

      {/* Add Button */}
      <button onClick={addMenuItem}>Add Item</button>
    </div>
  );
}
