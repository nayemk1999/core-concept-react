import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    firstName: 'Nayem',
    lastName: 'Khan',
    job: 'Programmer'
  }
  const product = [
    {name: 'Photography  (20GB)', price :9.99},
    {name: 'All Apps', price :8.54},
    {name: 'Acrobat Pro', price :7.04},
    {name: 'Photoshop', price :5.04},
]
  return (
    <div className="App" >
      <header className="App-header" >
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> My Heading: {person.firstName + ' ' + person.lastName} </p>
        <Product name = {product[0].name} price = {product[0].price}></Product>
        <Product name = {product[1].name} price = {product[1].price}></Product>
        <Product name = {product[3].name} price = {product[3].price}></Product>
        <Person name = 'Musi' country = 'Bangladesh'></Person>
        <Person name = 'Gayle' country = 'Westerlies'></Person>
        <Person name = 'Sakib Al Hasan' country = 'Bangladesh'></Person>
        <Person name = 'Warner' country = 'Australia'></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border : '2px solid yellow',
    margin : '10px',
    padding : '10px'
  }

  return (
    <div style={personStyle}>
      <h1>Player Name : {props.name}</h1>
      <h3>Country : {props.country}</h3>
    </div>
  )
}

function Product(props){
  const productStyle = {
    width:'200px',
    height:'250px',
    backgroundColor : 'gray',
    boxShadow : '5px 5px 7px lightgray',
    padding : '10px',
    borderRadius:'10px',
    color:'red',
    margin : '10px'
  }
  const gridStyle = {
    display: 'flex',
  }
  return(
    <div style = {gridStyle}>
      <div style = {productStyle}>
        <h4>{props.name}</h4>
        <h3>US ${props.price}</h3>
        <button>Buy Now</button>
      </div>
    </div>
  )
  
}
export default App;