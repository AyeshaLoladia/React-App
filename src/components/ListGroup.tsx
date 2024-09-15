import { useState } from "react";


function ListGroup() {
  let items = ["NY", "CA", "India"];
  let selectedIndex = 0
  
  // Hook
  const arr = useState(-1)
  arr[0]
  arr[1]




  return (
    <>
      <h1>LIST</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {selectedIndex = index}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
