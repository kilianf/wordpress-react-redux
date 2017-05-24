import React, { Component } from 'react'
import App from './App.js'
import { Route} from 'react-router-dom'


class BuildRoutes extends Component {
    render() {
        let data = this.props.dater.map((page, i) => {
             return <Route foo="bar" key={ page.id } path={`/${page.slug}`} render={() => <App page={page} /> } />
        });
        return (
            <div>{ data }</div>
        )
    }
}

export default BuildRoutes;