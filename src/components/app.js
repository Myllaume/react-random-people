import React from 'react';
import data from '../get-data'
import People from './people'
import Search from './search'

export default class App extends React.Component {
    state = {
        externalData: null,
    };

    componentDidMount () {
        this._asyncRequest = data().then(
            externalData => {
                this._asyncRequest = null;
                this.setState({externalData});
            }
        )
    }

    render () {
        if (this.state.externalData === null) {
            return <p>Chargement en cours</p>
        }

        const Peoples = this.state.externalData.map((people) => {
            return <People
                first_name={people.first_name}
                last_name={people.last_name}
                title={people.title}
                email={people.email}
                id={people.id}
            />
        })

        return (
            <div>
                <Search value='toto' />
               { Peoples }
            </div>
        );
    }
}