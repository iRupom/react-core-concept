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
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product> */}
        {/* <Person nayak="Nayak Rubel" nayika="Nayika Moushumi"></Person>
        <Person nayak="Nayak Razzak" nayika="Nayika Suchorita"></Person>
        <Person nayak="Nayak Jasim" nayika="Nayika Shabana"></Person> */}
      </header>
    </div>
     
  );
}

/**
 * Creating friend component
 */

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
