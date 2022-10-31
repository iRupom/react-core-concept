import './App.css';

function App() {
  var person = {
    name: "Rakib Talukder",
    job: "Student"
  };
  return (
    <div className="App">
      <header className="App-header">
        <Person>This is inside person</Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
     
  );
}

/**
 * Creating a component.
 * we have to decalre a function and return some html code from that
 */

function Person() {
  let personStyle = {
    backgroundColor: 'cyan',
    color: 'black',
    border: '5px solid red',
    margin: '5px'
  }
  return (
    <div style={personStyle}>
      <h1>My name is Rakib Talukder Rupom</h1>
      <h2>I am currently learning react</h2>
      <p>I love programming.</p>
    </div>
  )
}

export default App;
