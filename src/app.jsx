import React, { Component } from 'react'
import SignupForm from './signup-form'

class App extends Component {

    state = {
        users: []
    }

    createUser = (user) => {
        user.id = new Date().getTime().toString()
        this.setState({
            users: [...this.state.users, user]
        })    
        
    }

    render() {
        
        return (
            
            <div className='container'>
                <SignupForm createUser={this.createUser}/>

                <div>
                    <h3 className='my-5'>All Register Users</h3>
                    <ul className="list-group">
                        {this.state.users.map(user => (
                            <li key={user.id} className='list-group-item'>
                                {user.name}  {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App