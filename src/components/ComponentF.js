import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
    render() {
        return (<UserConsumer>
            { username => {
                return <div> 
                    <h1>Context Consumer</h1> 
                    Hello {username}
                </div>;
            }}
        </UserConsumer>)
    }
}

export default ComponentF
