
import './App.css';
import Button from './Button'
import Button2 from './Button2'
import Button3 from './Button3'
import Card from './Card'

function App() {
  const products = {title: "2021 shoe", 
  description: "This is my 2021 shoe",
  price:  5000
};
const handleProduct = () =>{
  alert(products.title)
}
  return (
    <div className="App">
      <Button text="Sign In"/>
      <Button2 />
      <Button3 />

      <Card myProduct={products} myClick={handleProduct}/>
    </div>
  );
}

export default App;
