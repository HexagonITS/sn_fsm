import logo from './logo.svg';
import './App.css';
import React from 'react';
import { positions } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { OverallProgress } from './components/overall_progress';
import StepWindowContent from './components/step_window_content';

import Button from '@material-ui/core/Button';
import { cardClasses } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      workOrderNumber: '#DISP0012234',
      myObject: {
        name: 'Blah',
        someNumber: 34,
        anArray: ['', '', '', ':O']
      }
    };
  }

  onDistributionStyleChange = (choiceIndex) => {
    this.setState({ currentStep: choiceIndex });
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <SomeComp blah="bluh"></SomeComp>
        </div>
        <Button variant="contained">Derp</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div class="App-header">
              <p><h3>Dispatch {this.state.workOrderNumber}</h3></p>
              <p>Tied to <em>3</em> Work Orders</p>
            </div>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <OverallProgress activeStep={this.state.currentStep} />
            </Grid>
            <Grid item xs={2} />
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0}>
              <div>
                <StepWindowContent currentStep={this.state.currentStep} onDistributionStyleChange />
              </div>
              <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <Button variant="contained" onClick={() => this.setState({ currentStep: this.state.currentStep - 1 })}>Previous</Button>
              </div>
              <div style={{ textAlign: 'right', marginRight: '10px' }}>
                <Button variant="contained" onClick={() => this.setState({ currentStep: this.state.currentStep + 1 })}>Next</Button>
              </div>
            </Paper>
          </Grid>
        </Grid>

      </div >
    );
  }
}

export default App;
