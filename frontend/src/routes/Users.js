import '../App.css';
import Paper from "@mui/material/Paper";

import User from '../components/User';
import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';
import React, { Component } from 'react';

import axios from 'axios';

class Users extends Component {
  constructor(props){
    super(props);

    this.state = {
      users: [
        {
          "_id": "62c8ee98f90d46b8e03d5a13", 
          "email": "carlitos@gmail.com", 
          "name": "Carlitos", 
          "password": "carlitos"
        }
      ]
    };
  }
  
  componentDidMount(){
    axios.get("http://18.204.17.108:5000/users")
    .then(response =>{
      this.setState({ users: response.data});
    })
  }

  render(){
    const { users } = this.state;
    
    return (
      <div className="App">
        <Navbar>
          <Paper className="ViewContainer">
            <Viewtitle buttonText="Crear Usuario" buttonUrl="/create-user" showButton="True">
              Users
            </Viewtitle>
            { 
              users?
                users.map((user,index)=>
                <User id={user._id}  name={user.name} email={user.email} rol={"Administrador"} activeSearchs={2} doneSearchs={1} url={"https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1"} />
                )
                :
                null
            }
          </Paper>
        </Navbar>
      </div>
      
    );
  }
}



/*function Users() {
  const users = ["Jessy Kris", "James Segura", "Jack Pilar"];
  const imgUrl = [
    "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
    "https://imgur.com/KkOwbfy.jpg",
    "https://imgur.com/Vfnyz06.jpg"
  ]
  const items = [];

  users.map((user,index) => {
    items.push(<User name={user} rol={"Administrador"} activeSearchs={2} doneSearchs={1} url={imgUrl[index]} />);
  })


  return (
    <div className="App">
      <Navbar>
        <Paper className="ViewContainer">
          <Viewtitle>
            Users
          </Viewtitle>
          {items}
        </Paper>
      </Navbar>
    </div>
    
  );
}*/

export default Users;
