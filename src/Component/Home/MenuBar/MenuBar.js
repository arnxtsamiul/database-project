import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div>
             <div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/read">Read</Link>
            <Link to="/update">Update</Link>
            <Link to="/delete">Delete</Link>

        </div>
        </div>
    );
};

export default MenuBar;