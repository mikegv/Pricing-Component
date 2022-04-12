import './App.css';
import CardHolder from './components/cardHolder/CardHolder'
import Heading from './components/heading/Heading'
import Toggle from './components/toggle/Toggle'
import { useState } from 'react';

const options = [
  {
    name: "Basic",
    monthlyPrice: "$19.99",
    yearlyPrice: "$199.99",
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    name: "Professional",
    monthlyPrice: "$24.99",
    yearlyPrice: "$249.99",
    features: ["1TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    name: "Master",
    monthlyPrice: "$39.99",
    yearlyPrice: "$399.99",
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  }
];


function App() {

  const [isChecked, setIsChecked] = useState(false)

  const toggleSwitched = () => {
    setIsChecked(prevState => !prevState)
  }
  return (
    <div className="App">

      <Heading />

      <Toggle isChecked={isChecked} toggleSwitched={toggleSwitched} />

      <CardHolder subscriptions={options} isChecked={isChecked} />


    </div>
  );
}

export default App;
