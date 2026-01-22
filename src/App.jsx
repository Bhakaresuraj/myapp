import './App.css';
import Product from './Product.jsx'
let name = "suraj";
function App() {

  let arr=["h1","h2","h3"];
  const obj={
    name:"suraj",
    age:20,
    gen :"Male"
  }
  return (
    <>
      <p>hello ,{name}</p>
      <p>Goog game {name}</p>
      < Product title="phone" price="20000" position={arr} object={obj}/>
      < Product title="mobile" price="70000"position={arr} object={obj}/>
      < Product title="tv" price="35000"position={arr}object={obj}/>
      < Product title="laptop" price="45000"position={arr} object={obj}/>
    </>
  )
}
export default App
