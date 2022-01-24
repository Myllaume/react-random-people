import React from 'react';

export default class Search extends React.Component {
    state = {
        value: '',
    };

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //       value: this.props.value || ''
    //     };
    //   }

    // handleInput(nb) {
    //     this.setState({
    //         value: 'coucou'
    //     })
    // }

    render () {
        return <input type="search" value={value} />
        return (
            <input onInput={handleInput} type="search" value={value} />
        )
    }
}

// export default function ({
//     // value
//   }) {
  
//     const [value, setInput] = useState(points);
  
//     const handleInput = () => {
//       setInput('toto');
//     }
  
//     // return (
//     //   <li onClick={handleClick} className={`list-group-item ${number >= 25 ? 'list-group-item-info' : ''} d-flex justify-content-between align-items-start`}>
//     //     <div className='ms-2 me-auto'>
//     //       <div className='fw-bold'>{name}</div>
//     //       {description}
//     //     </div>
//     //     <span className='badge bg-primary rounded-pill'>{number}</span>
//     //   </li>
//     // )
//     return <input onInput={handleInput} type="search" value={value} />
//   }