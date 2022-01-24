import React from 'react';

export default function (props) {
    return (
        <div className='people' data-people={ props.id }>
            <h3>{ props.first_name } { props.last_name }</h3>
            <p>{ props.title }</p>
            <p>{ props.email }</p>
        </div>
    );
}