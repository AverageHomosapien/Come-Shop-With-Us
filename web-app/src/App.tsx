import logo from './logo.svg';
import ShoppingListComponent from './Components/ShoppingList';
import './App.css';

function App() : JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is being loaded from <code>src/App.tsx</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Make a React App
        </a>
        <ShoppingListComponent listName='my special list'/>
      </header>
    </div>
  );
}

export default App;
//
// ReactDOM.render(<ShoppingListComponent/>);