import logo from './logo.svg';
import ShoppingList from './Components/ShoppingList';
import HeaderBar from './Components/Common/HeaderBar';
import './App.css';

function App() : JSX.Element {
  return (
    <div className="App">
      <HeaderBar firstName='Naomi'/>
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
        <ShoppingList listName='my special list'/>
      </header>
    </div>
  );
}

export default App;
