import React from 'react';

export default function (props) {
    return (
        <div className='people'>
            <h3>{ props.first_name } { props.last_name }</h3>
            <p>{ props.title }</p>
            <p>{ props.email }</p>
        </div>
    );
}