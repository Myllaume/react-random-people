import React from 'react';
import Modal from './modal'

export default class People extends React.Component {
    state = {
        editing: false,
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
        this.setState({
            editing: true
        });
    }

    render () {

        const { id, first_name, last_name, title, email } = this.props;

        if (this.state.visible === false) {
            return <div></div>;
        }

        return (
            <div
                className='box columns'
                style={{
                    maxWidth: '500px',
                    margin: '20px auto'
                }}
                onMouseEnter={(event) => this.onMouseEnter(event)}
                onMouseLeave={(event) => this.onMouseLeave(event)}
            >

                <div className='column'>
                    <h3 className='title is-5'>{ first_name } { last_name }</h3>
                    <p>{ title }</p>
                    <p>{ email }</p>
                </div>

                <div className='column is-narrow buttons'>
                    <button
                        className={`button is-small is-primary ${(this.state.visibleTools ? null : 'is-invisible')}`}
                        onClick={(event) => this.onClickUpdate(event)}
                    >
                        <span><i class="fas fa-check is-small"></i></span>
                        <span>Modifier</span>
                    </button>

                    <button
                        className={`button is-small is-danger ${(this.state.visibleTools ? null : 'is-invisible')}`}
                        onClick={(event) => this.onClickDelete(event)}
                    >
                        <span><i class="fas fa-times is-small"></i></span>
                        <span>Supprimer</span>
                    </button>
                </div>
                
                {
                (this.state.editing ?
                    <Modal isOpen={this.state.editing} />
                    :
                    null
                )
            }

            </div>
        );
    }
}