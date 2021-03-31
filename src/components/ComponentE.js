import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {

    // static contextType = UserContext

    render() {
        return (
            <div>
                <h1>Component Context Type</h1>
                Component E context is {this.context}
                <ComponentF/>
            </div>
        )
    }
}

ComponentE.contextType = UserContext

export default ComponentE
