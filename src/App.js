import './App.css';
import React from 'react';
import { PriceAllocationApp } from './components/price_allocation_app';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      currentStyle: 0,
      workOrderNumber: '#DISP0012234',
      myObject: {
        name: 'Blah',
        someNumber: 34,
        anArray: ['', '', '', ':O']
      }
    };
  }

  onDistributionStyleChange = (choiceIndex) => {
    this.setState({ currentStyle: choiceIndex });
  };

  render() {
    return (
      <PriceAllocationApp />
    );
  }
}

export default App;
