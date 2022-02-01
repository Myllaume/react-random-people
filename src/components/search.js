import React from 'react';

export default function ({ value, onChange }) {
    return (
        <input
            onChange={onChange}
            className='search'
            type="search"
            value={value}
        />
    )
}