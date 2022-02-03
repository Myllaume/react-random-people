import React from 'react';

export default function ({ value, onChange }) {
    return (
        <input
            onChange={onChange}
            className='input is-large'
            type="search"
            value={value}
        />
    )
}