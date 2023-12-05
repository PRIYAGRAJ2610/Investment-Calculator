import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import {useState} from 'react';
import Result from './Components/Result.jsx';

function App() {

  const[userInput,setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 8,
    duration: 10,

});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue
  }));
}

  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    
    {/* Conditional Rendering */}
    {/* If valid input show result component else show paragraph to enter valid data */}
    
    {inputIsValid && < Result input={userInput} />}
    {!inputIsValid &&  <p className="center"> Please Enter Time duration greater than 0 </p>}
  
    </>
  )
}
export default App;
