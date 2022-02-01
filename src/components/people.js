import React from 'react';

export default class People extends React.Component {
    state = {
        edited: false,
        visible: true,
        visibleTools: false
    }

    onMouseEnter (event) {
        this.setState({
            visibleTools: true
        });
    }

    onMouseLeave (event) {
        this.setState({
            visibleTools: false
        });
    }

    onClickDelete (event) {
        this.setState({
            visible: false
        });
    }

    onClickUpdate () {
        console.log(this.props);
    }

    render () {

        const { id, first_name, last_name, title, email } = this.props;

        if (this.state.visible === false) {
            return <div></div>;
        }

        return (
            <div
                className='people'
                onMouseEnter={(event) => this.onMouseEnter(event)}
                onMouseLeave={(event) => this.onMouseLeave(event)}
            >
                <h3>{ first_name } { last_name }</h3>
                <p>{ title }</p>
                <p>{ email }</p>
                {
                    (this.state.visibleTools ?
                        <div>
                            <button className='update' onClick={(event) => this.onClickUpdate(event)}>Éditer</button>
                            <button className='delete' onClick={(event) => this.onClickDelete(event)}>Supprimer</button>
                        </div>
                        : null)
                }
            </div>
        );
    }
}