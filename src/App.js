import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import basicFoods from './foods.json';
import { useState } from 'react';
import useId from 'react-use-uuid';
import FoodBox from './Component/FoodBox';

function addId(foodsArray){
  const copiedFoodsArray = JSON.parse(JSON.stringify(foodsArray))
  copiedFoodsArray.forEach(food => {
    food.id = useId()
  });
  return copiedFoodsArray
}

function App() {
  const newArray = addId(basicFoods)  
  //console.log(newArray)
  const [foods, setFoods] = useState(newArray)
  
  return (
    <div className="App">
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
