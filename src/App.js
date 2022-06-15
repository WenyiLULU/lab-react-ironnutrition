import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import basicFoods from './foods.json';
import { useState } from 'react';
import useId from 'react-use-uuid';

function App() {
  const [foods, setFoods] = useState(basicFoods)
  return (
    <div className="App">
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food)=>{
          
          return(
          <Col>
            <Card
              title={food.name}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={food.image} height={60} alt="food" />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
              </p>
              <Button type="primary"> Delete </Button>
            </Card>
          </Col>)
        })}
      </Row>
      
    </div>
  )
    
}
export default App;
