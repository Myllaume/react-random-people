import React from 'react';
import Fuse from 'fuse.js';
import data from '../get-data'
import People from './people'
import Search from './search'

export default class App extends React.Component {
    state = {
        externalData: null,
        searchData: null,
        searchString: ''
    };

    componentDidMount() {
        this._asyncRequest = data().then(
            externalData => {
                this._asyncRequest = null;
                this.setState({ externalData });
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
                searchData: null
            });
            return;
        }

        const fuse = new Fuse(this.state.externalData, {
            includeScore: true,
            shouldSort: true,
            keys: ['first_name', 'last_name']
        });

        const resultIds = fuse
            .search(value)
            .map(value => value.item.id)

        this.setState({
            searchData: this.state.externalData.filter(item => resultIds.includes(item.id))
        });
    }

    render () {
        const data = this.state.searchData || this.state.externalData;

        if (data === null) {
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
                        data.map(({ id, first_name, last_name, title, email }) => (
                            <People
                                first_name={first_name}
                                last_name={last_name}
                                title={title}
                                email={email}
                                key={id}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}