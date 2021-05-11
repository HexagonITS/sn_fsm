import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

export const OverallProgress = props => {
    return (
        <Stepper activeStep={props.activeStep}>
            <Step key={0}>
                <StepLabel>Choose a distribution style</StepLabel>
            </Step>
            <Step key={1}>
                <StepLabel>Distribute the charges</StepLabel>
            </Step>
            <Step key={2}>
                <StepLabel>Review and confirm your changes</StepLabel>
            </Step>
        </Stepper>

    );
};