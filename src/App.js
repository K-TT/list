import './App.css';
import Table from "./Table";
import { Container, Header } from "semantic-ui-react";
import {Component} from "react";

class App extends Component{
  constructor(props) {
    super(props);
    this.state={}
  }
  render(){

    return(
      <Container style={{ margin: 20 }}>
        <Header as="h3">The List of the Users</Header>

     <Table />
      </Container>
    );
  }}


export default App;
