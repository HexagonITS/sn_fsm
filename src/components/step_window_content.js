import { Typography } from '@material-ui/core';
import React from 'react';
import { DistributionStylePicker } from './distribution_style_picker';

export const StepWindowContent = props => {
    // constructor(props) {
    //   super(props);
    // }
    switch (props.currentStep) {
        case 0:
            return (<DistributionStylePicker selectedIndex={props.currentStyle} onChange={props.onDistributionStyleChange} />)
        case 1:
            return (<div></div>);
        case 2:
            return (<div></div>);
        default:
            return (<div><Typography>An error has occured! Somehow you've ended up outside of the expected steps. Sorry. ☹</Typography></div>)
    }
}