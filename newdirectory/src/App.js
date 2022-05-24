import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Yune is learning reactjs
    //     </a>
    //   </header>
    // </div>、
    <>
      <TodoList></TodoList>
      <input type="text"></input>
      <button>add todo</button>
      <button>clear completed to dos</button>
      <div>0 left to do</div>
    </>
    
    
  );
}

export default App;
