import React from 'react';

export default class Modal extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            item: props.item
        }
    }

    onChangeInput (event) {
        const value = event.target.value
            , name = event.target.name;

        let item = this.state.item;
        item[name] = value;
        this.setState({
            item: item
        });
    }

    render () {
        return (
            <div className='modal is-active'>
                <div className="modal-background"></div>
                    <div className="modal-content">
                        
                    <form onSubmit={(event) => this.props.onSubmitSaveModal(event, this.state.item)}>
                        <div className="field">
                            <label className="label">First name</label>
                            <div className="control">
                                <input
                                    className="input"
                                    name="first_name"
                                    value={this.state.item.first_name}
                                    type="text"
                                    required
                                    onChange={(event) => this.onChangeInput(event)}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Last name</label>
                            <div className="control">
                                <input
                                    className="input"
                                    name="last_name"
                                    value={this.state.item.last_name}
                                    type="text"
                                    required
                                    onChange={(event) => this.onChangeInput(event)}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input
                                    className="input"
                                    name="title"
                                    value={this.state.item.title}
                                    type="text"
                                    required
                                    onChange={(event) => this.onChangeInput(event)}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">email</label>
                            <div className="control">
                                <input
                                    className="input"
                                    name="email"
                                    value={this.state.item.email}
                                    type="email"
                                    required
                                    onChange={(event) => this.onChangeInput(event)}
                                />
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Save</button>
                            </div>
                            <div className="control">
                                <button
                                    className="button is-link is-light"
                                    onClick={() => this.props.onClickCloseModal()}
                                >Cancel</button>
                            </div>
                        </div>
                    </form>

                    </div>
                <button
                    className="modal-close is-large"
                    onClick={() => this.props.onClickCloseModal()}
                ></button>
            </div>
        )
    }
}