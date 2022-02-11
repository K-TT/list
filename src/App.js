import './App.css';
import { Container, Header, Input, Tab} from "semantic-ui-react";
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
        render: () => <Tab.Pane><div>
          <h1>{user.username}. {user.position}</h1>
          <h2>{user.company}</h2>
          <p>{user.skills.join(", ")}</p>
        </div></Tab.Pane>
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
