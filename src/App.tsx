import React from 'react';
import './App.css';
import Form from './components/Form';
import { State } from './interfaces';
import DataView from './components/DataView';

class App extends React.Component {
  state: State = {
    name: '',
  };
  onSubmitNameApp = (name: string) => {
    this.setState({ name });
  };
  render() {
    return (
      <>
        <h1>Planets</h1>
        <Form onSubmitName={this.onSubmitNameApp} />
        <hr />
        <DataView name={this.state.name} />
      </>
    );
  }
}

export default App;
