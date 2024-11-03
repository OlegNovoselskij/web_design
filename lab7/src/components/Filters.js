// Filters.js
import React from 'react';
import './Filters.css'

function Filters() {
  return (
    <div className='filters_button' >
        <div className="filters">
            <select>
            <option>Filter 1</option>
            </select>
            <select>
                <option>Filter 2</option>
            </select>
            <select>
                <option>Filter 3</option>
            </select>
        </div>
        <div>
            <button>Apply</button>
        </div>
    </div>
  );
}

export default Filters;
