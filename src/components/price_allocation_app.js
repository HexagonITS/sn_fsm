import '../App.css';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { OverallProgress } from './overall_progress';
import { StepWindowContent } from './step_window_content';

import Button from '@material-ui/core/Button';

export const PriceAllocationApp = props => {
    const [currentStep, setCurrentStep] = useState(0);
    const [currentStyle, setCurrentStyle] = useState(0);
    const [workData, setWorkData] = useState({
        workOrderNumber: '#DISP0012234'
    });

    const setAndClampCurrentStep = (i) => {
        i = Math.min(Math.max(i, 0), 2);
        setCurrentStep(i);

    }

    return (
        <div className="App">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="App-header">
                        <p><h3>Dispatch {workData.workOrderNumber}</h3></p>
                        <p>Tied to <em>3</em> Work Orders</p>
                    </div>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                        <OverallProgress activeStep={currentStep} />
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0}>
                        <div>
                            <StepWindowContent currentStep={currentStep} currentStyle={currentStyle} onDistributionStyleChange={setCurrentStyle} />
                        </div>

                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                                    <Button variant="contained" onClick={() => setAndClampCurrentStep(currentStep - 1)} disabled={currentStep <= 0 ? true : false} >Previous</Button>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{ textAlign: 'right', marginRight: '10px' }}>
                                    <Button variant="contained" onClick={() => setAndClampCurrentStep(currentStep + 1)} disabled={currentStep >= 2 ? true : false} >Next</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
}