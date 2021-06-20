import  ListUser from './components/ListUser';
import { JSON_API } from './util/constansts'
import axios from 'axios';

import React, { Component } from 'react'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    axios.get(JSON_API + `users`)
      .then(res => {
        const users = res.data;
          this.setState({ users });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { users } = this.state
    return (
      <div className="Home">
      {/* Main */}
      <div className="my-3">
              {users && users.map((user) => (
                <ListUser  
                key={user.id}
                user ={user}
                />
              ))}
          </div>
          {/* end Main */}
    </div>
    )
  }
}

