import './App.css';
import {Container, Header, Image, Input, Tab} from "semantic-ui-react";
import React, {Component} from "react";
import Users from './users.json'


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      name:""
    }
  }


  render(){

    let panes = Users.data.filter((user)=>{
        if(user.username.toLowerCase().includes(this.state.name.toLowerCase())){
          return user;
        }

    }).map(
      (user)=>({
        menuItem: user.username,
        render: () => <Tab.Pane>
          <div>
            <Header as='h2' color='violet'>
              <Image circular src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' /> {user.username}
            </Header>
            <h5>{user.age}</h5>
          <h2>{user.position} at {user.company}</h2>
          <p>{user.skills.join(", ")}</p>
        </div>
        </Tab.Pane>
      })
    );

    const Table =()=>(	<Tab menu={{ fluid: true, vertical: true }}
                             menuPosition='left'
                             panes={panes} />)

    return(
      <Container style={{ margin: 20 }}>
        <Header as="h3">The List of the Users</Header>
        <Input name="search" icon='users' iconPosition='left' placeholder='Search users...' onChange={(e)=>{this.setState({name:e.target.value})}}/>
        <br/>  <br/>
      <Table />
      </Container>
    );
  }}


export default App;
