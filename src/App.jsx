import CalorieRecord from "./components/CalorieRecord";
function App() {
  
  return (
    <div className='App'>
      <h1>Welcome to React with Almdrasa !</h1>  
      <CalorieRecord date={new Date(2024,3,1)} meal="Breakfast" content="chicken" calories="600"></CalorieRecord>
      <CalorieRecord date={new Date(2024,3,1)} meal="Breakfast" content="chicken" calories="600"></CalorieRecord>
      <CalorieRecord date={new Date(2024,3,1)} meal="Breakfast" content="chicken" calories="600"></CalorieRecord>
      <CalorieRecord date={new Date(2024,3,1)} meal="Breakfast" content="chicken" calories="600"></CalorieRecord>   
    </div>
  )
}

export default App;
