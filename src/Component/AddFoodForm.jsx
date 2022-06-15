import { Divider, Input } from 'antd';
import { useImperativeHandle, useState } from 'react';
import useId from 'react-use-uuid';



// Iteration 4


function AddFoodForm({addNewFood}) {
    const id = useId()
    const [name, setName] = useState(" ")
    const [image, setimage] = useState(" ")
    const [calories, setCalories] = useState(1)
    const [servings, setServings] = useState(1)

    function handleChange(event){
        const value = event.target.value
        switch (event.target.name) {
            case 'name':
                setName(value)
                break;
            case 'image':
                setimage(value)
                break;
            case 'calories':
                setCalories(value)
                break;
            case 'servings':
                setServings(value)
                break;
            default:
                break;
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        const newFood = {id, name, image, calories, servings}
        addNewFood(newFood)
        setName(" ")
        setimage(" ")
        setCalories(1)
        setServings(1)
        console.log({newFood})
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={name} type="text" onChange={(event) => {handleChange(event)}} />

      <label>Image</label>
      <Input name="image" value={image} type="text" onChange={(event) => {handleChange(event)}} />

      <label>Calories</label>
      <Input name="calories" value={calories} type="number" onChange={(event) => {handleChange(event)}} />

      <label>Servings</label>
      <Input name="servings" value={servings} type="number" onChange={(event) => {handleChange(event)}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;