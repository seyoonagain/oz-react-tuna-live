import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Contents = () => {
  const [contents, setContents] = useState([
    { id: 1, content: 'content 1' },
    { id: 2, content: 'content 2' },
    { id: 3, content: 'content 3' },
  ]);
  return (
    <>
      <ul>
        {contents.map((item) => (
          <li key={item.id}>
            <NavLink to={`${item.id}?content=${item.content}`}>
              {item.content}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Contents;
