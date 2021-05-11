import React from 'react';
import { DistributionStylePicker } from './distribution_style_picker';

class StepWindowContent extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
        switch (this.props.currentStep) {
            case 0:
                return (<DistributionStylePicker selectedIndex={0} onChange={(i) => { this.props.onDistributionStyleChange }} />)
            case 1:
                return (<div></div>);
            case 2:
                return (<div></div>);
            default:
                return (<DistributionStylePicker selectedIndex={0} />)
        }
    }
}

export default StepWindowContent;