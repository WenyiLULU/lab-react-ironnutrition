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
  const [hide, setHide] = useState(true)

  function handleNewFood(newFood){
    const updatedFoods = JSON.parse(JSON.stringify(foods))
    updatedFoods.push(newFood)
    setFoods(updatedFoods)
  }
  
  function deleteFood(id){
    setFoods(foods.filter(food => food.id !== id))
  }

  return (
    <div className="App">
      <AddFoodForm addNewFood={handleNewFood} hide={hide}/>
      <Button onClick={()=>{setHide(!hide)}}> 
      {hide ? <span>Add New Food</span> : <span> Hide Form</span>} 
      </Button>

      <SearchBar search={search} setSearch={setSearch} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>        
        {foods.length > 0 ?
        foods
        .filter((food)=>{
          return(
            food.name.toLowerCase().includes(search.toLowerCase())
          )})
        .map((food)=>{
          return (
            <Col key={food.id}>
              <FoodBox food={food} deleteFood={deleteFood} />
            </Col>
          )})
          : <div>
            <p>Oops! There is no more content to show 0_0</p>
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmFKB7UIlWFUWwFUgaOwi5FSLIvoK1RXonw&usqp=CAU" alt="Nothing to show" ></img></div>
            </div>
        }        
      </Row>      
    </div>
  )    
}
export default App;
