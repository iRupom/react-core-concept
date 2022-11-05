import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const person = {
    nayak: "Rakib Talukder",
    job: "Student"
  };

  const friends = [
    {
      name: 'Rakib Talukder',
      type: 'careful about money'
    },
    {
      name: 'Marajul Islam Shawn',
      type: 'very thinkful about money'
    },
    {
      name: 'Takrimul Hasan',
      type: 'selfish about everythiing'
    },
    {
      name: 'Adith Mollah',
      type: 'Very boring'
    },
    {
      name: 'Tariful Islam Fahim',
      type: 'Weak about ladies and woman friend'
    }
  ]

  const nayoks = ['Razzak', 'Alomgir', 'Jasim', 'Salman', 'Riaz'];
  console.log(nayoks);

  const products = [
    {
      name: 'Photoshop',
      price: 'US 100$'
    },
    {
      name: 'Adobe Premier Pro',
      price: 'US 200$'
    },
    {
      name: 'Adobe InDesign',
      price: 'US 300$'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{ nayok}</li>)
          }
        </ul> 
        This is product without dynamic syntax
        <Product product={products[0]}></Product>

        Below are the products listing with dynamic context.
        {
          products.map(product => <Product product={product}></Product>)
        }

        <h1>Again creating a friend list card about their type and behiviour</h1>

        {
          friends.map(friend => <Friend friend={friend}></Friend>)
        }
      </header>
    </div>
     
  );
}

/**
 * Creating friend component
 */

function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>Dynamic Users</h1>
      <ul>
        {
          users.map(user => <li>{user.name }</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  let [counter, setCounter] = useState(10);
  const handleIncrease = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  }
  const handleDecrease = () => { 
    const newCount = counter - 1;
    if (newCount < 0) {
      counter = 0;
      setCounter(0);
    } else {
      setCounter(newCount);
    }
  }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Friend(props) {
  const friendCardStyle = {
    height: '300px',
    width: '300px',
    backgroundColor: 'yellow',
    color: 'black',
    margin: '10px',
    padding: '5px',
    borderRadius: '5px',
    boxShadow: '5px 5px 10px gray'
  }

  return (
    <div style={friendCardStyle}>
      <h2>Name of the friend : {props.friend.name}</h2>
      <h3>Type of the friend : {props.friend.type }</h3>
    </div>
  )
}

/**
 * Creating a component.
 * we have to decalre a function and return some html code from that
 */

function Product(props) {
  const productStyle = {
    border: '5px solid red',
    borderRadius: '5px',
    backgroundColor: 'lightsalmon',
    height: '300px',
    width: '300px',
    float: 'left',
    margin: '5px',
    color: 'white'
  }

  // console.log(props);

  return (
    <div style={productStyle}>
      <h2>Name : { props.product.name}</h2>
      <h3>Price : { props.product.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  let personStyle = {
    backgroundColor: 'cyan',
    color: 'black',
    border: '5px solid red',
    margin: '5px'
  }
  // console.log(props);
  return (
    <div style={personStyle}>
      <h1>{ props.nayak}</h1>
      <h2>{props.nayika }</h2>
      <p>That was a romantic movie.</p>
    </div>
  )
}

export default App;
