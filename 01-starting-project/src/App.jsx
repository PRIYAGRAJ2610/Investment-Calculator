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
    <Result input={userInput}/>
    </>
  )
}
export default App;
