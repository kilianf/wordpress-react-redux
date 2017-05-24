import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class BuildNav extends Component {
    render() {

        let data = this.props.dater.map((page) => {
            return <li><Link key={ page.id } to={`/${page.slug}`}>{page.slug}</Link></li>
        })

        return (
            <ul>
                {data}
            </ul>
        )

    }

}

export default BuildNav;