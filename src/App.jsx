import CalorieRecord from "./components/CalorieRecord";
import RecordList from "./components/RecordList";
function App() {
  const records = [
    {
        date: new Date(2023, 2, 1),
        meal: 'Breakfast',
        content: 'eggs',
        calories: '340',
    },
    {
        date: new Date(2023, 2, 2),
        meal: 'Lunch',
        content: 'Chicken',
        calories: '450',
    },
    {
        date: new Date(2023, 2, 3),
        meal: 'Dinner',
        content: 'Cheese',
        calories: '250',
    },
    {
        date: new Date(2023, 2, 4),
        meal: 'Snacks',
        content: 'Chocolate',
        calories: '500',
    },
];
  return (
    <div className="App">
      <h1>Welcome to React with Almdrasa !</h1>
      <RecordList records={records}/>
    </div>
  );
}

export default App;
