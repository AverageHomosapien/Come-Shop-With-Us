import { Component } from 'react';
import logo from './logo.svg';
import ShoppingList from './Components/ShoppingList';
import HeaderBar from './Components/Common/HeaderBar';
import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() : void {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async (): Promise<any> => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async (e:any) : Promise<void> => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };

  render() : JSX.Element {
    return (
      <div className="App">
        <HeaderBar firstName='Naomi'/>
        <header className="App-header">
          <ShoppingList listName='my app list'/>
        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;