import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Card, CardHeader} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
// import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {orange700, blue500, blue700} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme(darkBaseTheme, {
    palette: {
		// textColor: cyan500,
		primary1Color: blue500,
		primary2Color: blue700,
		accent1Color: orange700,
        accent2Color: orange700,
        accent3Color: orange700
    },
});

const styles = {
    padding: 5,
    marginBottom: 5,
    radioButtonGroup: {
        marginLeft: 4,
        display: 'flex',
        width: 340,
    },
    radioButton: {
        display: 'inline-block',
        marginBottom: 8,
    },
    checkbox: {
        marginBottom: 8,
    },
    button: {
        textAlign: 'center',
    },
};


export default class BatchLocation extends React.Component {

    render() {
        const {selectTab_BatchLoc, batchLocationState, handleGetBatchPath} = this.props;

        let tabNodes;

        if (batchLocationState === 'custom'){
            tabNodes =  
                <div style={styles.button}>
                    <FlatButton
                        label="Select Batch Location"
                        secondary={true}
                        // primary={true}
                        onClick={handleGetBatchPath}
                    />
                </div>
                        
        };

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Card style={styles}>
                    <CardHeader
                        title="Batch Location"
                        // subtitle="Subtitle"
                    />
                    <RadioButtonGroup name="batchLocation" defaultSelected="preset" style={styles.radioButtonGroup}>
                        <RadioButton
                            style={styles.radioButton}
                            value="preset"
                            label="Preset"
                            onClick={() => selectTab_BatchLoc('preset')}
                        />
                        <RadioButton
                            style={styles.radioButton}
                            value="custom"
                            label="Custom"
                            onClick={() => selectTab_BatchLoc('custom')}
                        />
                    </RadioButtonGroup>
                    {tabNodes}
                    {/* <Divider /> */}
                </Card>
            </MuiThemeProvider>   
        );
    };
};




