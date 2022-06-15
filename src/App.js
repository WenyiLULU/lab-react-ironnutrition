import './App.css';
import { Row, Col, Divider, Button} from 'antd';
import basicFoods from './foods.json';
import { useState } from 'react';
import useId from 'react-use-uuid';
import FoodBox from './Component/FoodBox';
import AddFoodForm from './Component/AddFoodForm';
import SearchBar from './Component/SearchBar';

function addId(foodsArray){
  const copiedFoodsArray = JSON.parse(JSON.stringify(foodsArray))
  copiedFoodsArray.map(food => {
    food.id = useId()
  });
  return copiedFoodsArray
}

function App() {
  const newArray = addId(basicFoods)  
  //console.log(newArray)
  const [foods, setFoods] = useState(newArray)
  const [search, setSearch] = useState("")

  function handleNewFood(newFood){
    const updatedFoods = JSON.parse(JSON.stringify(foods))
    updatedFoods.push(newFood)
    setFoods(updatedFoods)
  }
  

  return (
    <div className="App">
      <AddFoodForm addNewFood={handleNewFood} />
      <Button> Hide Form / Add New Food </Button>

      <SearchBar search={search} setSearch={setSearch} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>        
        {foods
        .filter((food)=>{
          return(
            food.name.toLowerCase().includes(search.toLowerCase())
          )
        })
        .map((food)=>{
          return (
            <Col key={food.id}>
              <FoodBox food={food} />
            </Col>
          )           
        })}        
      </Row>      
    </div>
  )    
}
export default App;
