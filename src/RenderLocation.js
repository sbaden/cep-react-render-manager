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


export default class RenderLocation extends React.Component {

    render() {
        const {selectTab_RenderLoc, renderLocationState, handleGetRenderPath} = this.props;

        let tabNodes;

        if (renderLocationState === 'custom'){
            tabNodes =  
                <div style={styles.button}>
                    <FlatButton
                        label="Select Render Location"
                        secondary={true}
                        // primary={true}
                        onClick={handleGetRenderPath}
                    />
                </div>
                        
        };

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Card style={styles}>
                    <CardHeader
                        title="Render Location"
                        // subtitle="Subtitle"
                    />
                    <RadioButtonGroup name="batchLocation" defaultSelected="custom" style={styles.radioButtonGroup}>
                        <RadioButton
                            onClick={() => selectTab_RenderLoc('preset')}
                            value="preset"
                            label="Preset"
                            style={styles.radioButton}
                        />
                        <RadioButton
                            onClick={() => selectTab_RenderLoc('custom')}
                            value="custom"
                            label="Custom"
                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>
                    {tabNodes}
                    {/* <Divider /> */}
                </Card>
            </MuiThemeProvider>
        );
    };
};




