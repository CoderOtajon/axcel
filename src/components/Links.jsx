import React from 'react';
import { NavLink } from 'react-router-dom';
const links = [
  { url: '/search', text: 'All' },
  { url: '/news', text: 'News' },
  { url: '/image', text: 'Images' },
  { url: '/video', text: 'Videos' },
];
const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, i) => (
        <NavLink
          key={i}
          to={url}
          className={({ isActive }) =>
            isActive
              ? 'm-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'
              : 'm-2 mb-0 dark:text-white'
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
