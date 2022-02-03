import React from 'react';

export default class People extends React.Component {
    state = {
        isOpen: this.props.isOpen
    }

    onClickClose () {
        this.setState({
            isOpen: false
        });
    }

    render () {
        return (
            <div className={`modal ${(this.state.isOpen ? 'is-active' : null)}`}>
                <div className="modal-background"></div>
                    <div className="modal-content">
                        
                        Coucou c'est super

                    </div>
                <button className="modal-close is-large" onClick={(event) => this.onClickClose(event)}></button>
            </div>
        )
    }
}