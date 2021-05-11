import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const DistributionStylePicker = props => {

    const options = [
        {
            name: 'Assign to a single Work Order',
            type: 'Direct',
            key: 'single',
            description: 'Assign all charges to a single designated work order among the list of associated work orders.'
        },
        {
            name: 'Manually Assign Dollar Amounts',
            type: 'Direct',
            key: 'manual',
            description: 'Sliders! Or text input fields, I\'m not sure yet. Either way it\'s going to be a lot of effort on the user\'s part.'
        },
        {
            name: 'By Existing Charge',
            type: 'Direct',
            key: 'existing',
            description: 'Use each work order\'s compound bill detail total as weighting to determine the charge distribution.'
        },
        {
            name: 'Divide Equally',
            type: 'Percentage',
            key: 'equal',
            description: 'Splits total charge amongst all work orders equally. In the case of a division with a remainder the remaining penny will be sent to the first work order in the list.'
        },
        {
            name: 'Divide Proportionally',
            type: 'Percentage',
            key: 'proportional',
            description: 'No idea what this one is supposed to be'
        }
    ];

    //const [selectedIndex, setIndex] = useState(0);

    // handleClick = (chosenIndex) =>{
    //     //setIndex(chosenIndex);
    //     this.props.onChange(chosenIndex);
    // };

    return (
        <Grid container spacing={0}>
            <Grid item xs={4}>
                <MenuList>
                    {options.map((option, index) => (
                        <MenuItem key={index} selected={props.selectedIndex === index} onClick={(event) => props.onChange(index)}>
                            {option.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography>Type: {options[props.selectedIndex].type}</Typography>
                        <Typography>{options[props.selectedIndex].description}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
}