import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive }) =>isActive? "bg-lime-800 m-4 p-2 rounded": ""}
                  >
                    {children}
                  </NavLink>
    );
};

export default ActiveLink;