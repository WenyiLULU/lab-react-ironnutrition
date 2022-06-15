import './App.css';
import { Row, Col, Divider} from 'antd';
import basicFoods from './foods.json';
import { useState } from 'react';
import useId from 'react-use-uuid';
import FoodBox from './Component/FoodBox';
import AddFoodForm from './Component/AddFoodForm';

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
  
  function handleNewFood(newFood){
    const updatedFoods = JSON.parse(JSON.stringify(foods))
    updatedFoods.push(newFood)
    setFoods(updatedFoods)
  }

  return (
    <div className="App">
      <AddFoodForm addNewFood={handleNewFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>        
        {foods.map((food)=>{
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
