import React from 'react';

export default class People extends React.Component {
    state = {
        editing: false,
        isVisible: true,
        visibleTools: false
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            isVisible: this.props.isVisible
        });
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

    render () {

        const { first_name, last_name, title, email } = this.props;

        if (this.state.isVisible === false) {
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

                <div
                    className='column is-narrow buttons'
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <button
                        className={`button is-small is-primary ${(this.state.visibleTools ? null : 'is-invisible')}`}
                        onClick={() => this.props.onClickOpenModal(this.props.id)}
                    >
                        <span><i className="fas fa-check is-small"></i></span>
                        <span>Modifier</span>
                    </button>

                    <button
                        className={`button is-small is-danger ${(this.state.visibleTools ? null : 'is-invisible')}`}
                        onClick={() => this.props.onClickDelete(this.props.id)}
                    >
                        <span><i className="fas fa-times is-small"></i></span>
                        <span>Supprimer</span>
                    </button>
                </div>
            </div>
        );
    }
}