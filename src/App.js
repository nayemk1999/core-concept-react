import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';



  // main body core part website
  function App() {
    const person = {
      firstName: 'Nayem',
      lastName: 'Khan',
      job: 'Programmer'
    }
    const products = [
      { name: 'Photography  (20GB)', price: 9.99 },
      { name: 'All Apps', price: 8.54 },
      { name: 'Acrobat Pro', price: 7.04 },
      { name: 'Photoshop', price: 5.04 },
      { name: 'Premiere Pro', price: 20.04 }
    ]
    const bookLists = ['Bangla', 'Bangla 2', 'English', 'Math', 'Science']
 
    return (
      <div className="App" >
        <header className="App-header" >
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p> My Heading: {person.firstName + ' ' + person.lastName} </p>

        <Counter></Counter>

          {
            <ul>
              {products.map(product => <li>{product.name}</li>)}
            </ul>
          }
          {
            <ul>
              {bookLists.map(bookList => <li>{bookList}</li>)}
            </ul>
          }
          <Users></Users>

          <Product name={products[0].name} price={products[0].price}></Product>
          <Product name={products[1].name} price={products[1].price}></Product>
        </header>
      </div>
    );
  }

function Product(props) {
  const productStyle = {
    width: '200px',
    height: '250px',
    backgroundColor: 'gray',
    boxShadow: '5px 5px 7px lightgray',
    padding: '10px',
    borderRadius: '10px',
    color: 'red',
    margin: '10px'
  }
  const gridStyle = {
    display: 'flex',
  }
  return (
    <div style={gridStyle}>
      <div style={productStyle}>
        <h4>{props.name}</h4>
        <h3>US ${props.price}</h3>
        <button>Buy Now</button>
      </div>
    </div>
  )

}

function Counter() {
  const [count, setState] = useState(0);
  const increaseBtn = () => {
    setState(count + 1);
  };
  const decreaseBtn = () => {
    if (count > 0) {
      setState(count - 1);
    }
  };
  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onClick ={increaseBtn} >Increase</button>
      <button onClick ={decreaseBtn} >Decrease</button>
    </div>
  )
}

// API Calling
function Users() {
  const [users, setUser] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return(
    <div>
      {/* <h1>Dynamic Users :{users.length}</h1> */}
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}
export default App;