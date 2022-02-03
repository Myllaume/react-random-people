import React from 'react';
import Fuse from 'fuse.js';
import data from '../get-data';
import People from './people';
import Search from './search';
import Modal from './modal';

export default class App extends React.Component {
    state = {
        data: null,
        searchString: '',
        modal: {
            isOpen: false,
            itemId: undefined
        }
    };

    componentDidMount() {
        this._asyncRequest = data().then(
            data => {
                this._asyncRequest = null;
                this.setState({ data });
            }
        )
    }

    onChange(event) {
        const value = event.target.value;

        this.setState({
            searchString: value
        });

        if (value === '') {
            this.setState({
                data: this.state.data.map((item) => {
                    item.isVisible = true;
                    return item;
                })
            });
            return;
        }

        const fuse = new Fuse(this.state.data, {
            includeScore: true,
            shouldSort: true,
            keys: ['first_name', 'last_name']
        });

        const resultIds = fuse
            .search(value)
            .map(value => value.item.id)

        this.setState({
            data: this.state.data
                .map((item) => {
                    if (resultIds.includes(item.id) === false) {
                        item.isVisible = false;
                    } else {
                        item.isVisible = true;
                    }
                    return item;
                })
        });
    }

    onClickDelete (id) {
        this.setState({
            data: this.state.data
                .filter(item => item.id !== id)
        });
    }

    onClickOpenModal (id) {
        this.setState({
            modal: {
                isOpen: true,
                itemId: id
            }
        });
    }

    onClickCloseModal () {
        this.setState({
            modal: {
                isOpen: false,
                itemId: undefined
            }
        });
    }

    onSubmitSaveModal (event, itemEdited) {
        event.preventDefault();

        for (const meta in itemEdited) {
            const value = itemEdited[meta]
            if (value === '') {
                return;
            }
        }

        this.setState({
            data: this.state.data
                .map((item) => {
                    if (item.id === itemEdited.id) {
                        item = itemEdited;
                    }
                    return item;
                })
        });

        this.onClickCloseModal();
    }

    render () {

        if (this.state.data === null) {
            return <p>Chargement en cours</p>
        }

        return (
            <div>
                <div 
                    className="field"
                    style={{
                        position: 'fixed',
                        top: '0px',
                        left: '0px',
                        width: '100%'
                    }}
                >
                    <p className="control has-icons-left">
                    <span className="icon is-large is-left">
                        <i className="fas fa-search"></i>
                    </span> 
                        <Search
                            value={this.state.searchString}
                            onChange={(event) => this.onChange(event)}
                        />
                    </p>
                </div>

                <div
                    style={{
                        paddingTop: '100px'
                    }}
                >
                    {
                        this.state.data
                            .filter(item => item.isVisible === true)
                            .map(({ id, first_name, last_name, title, email, isVisible }) => (
                                <People
                                    first_name={first_name}
                                    last_name={last_name}
                                    title={title}
                                    email={email}
                                    id={id}
                                    key={id}
                                    isVisible={isVisible}

                                    onClickDelete={this.onClickDelete.bind(this)}
                                    onClickOpenModal={this.onClickOpenModal.bind(this)}
                                />
                            ))
                    }
                </div>

                {
                    (this.state.modal.isOpen ?
                        <Modal
                            item={this.state.data.find(item => item.id === this.state.modal.itemId)}

                            onClickCloseModal={this.onClickCloseModal.bind(this)}
                            onSubmitSaveModal={this.onSubmitSaveModal.bind(this)}
                        />
                        :
                        null
                    )
                }
            </div>
        );
    }
}