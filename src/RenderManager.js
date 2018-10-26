import React from 'react';

import Pool from './Pool';
import Group from './Group';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';
import {orange700, blue500, blue700} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme(darkBaseTheme, {
    palette: {
		// textColor: orange700,
		primary1Color: blue500,
		primary2Color: blue700,
		accent1Color: orange700,
        accent2Color: orange700,
        accent3Color: orange700
    },
});

const styles = {
    padding: 5,
    paddingBottom: 10,
    radioButtonGroup: {
        marginLeft: 4,
        display: 'flex',
        width: 324,
    },
    radioButton: {
        display: 'inline-block',
        marginBottom: 8,
    },
    checkbox: {
        marginBottom: 8,
    },
    checkboxDiv: {
        display:'flex',
        flexWrap: 'wrap'
    },
    teamToggle: {
        marginLeft: 4,
        marginTop: 12,
        marginBottom: 16,
    },
    prioritySlider: {
        padding: 10,
    },
    sliderDiv: {
        
    },
    selectionGroups: {
        marginLeft: 10,
    }
};



export default class RenderManager extends React.Component {

    render() {
    	const {selectTab_RenderManager, renderManagerState, handlePrioritySlider, handleToggle_AutoRender, deadlinePriorityValue, deadlinePoolValueState, handlePoolChange, deadlineGroupValueState, handleGroupChange} = this.props;

    	let tabNodes;


    	switch (renderManagerState){
			case 'ae':
	            tabNodes =  
	                <div>
	                	<Toggle style={styles.teamToggle}
							label="Auto Start Render"
							defaultToggled={false}
							onToggle={handleToggle_AutoRender}
							labelPosition="right"
							// style={styles.toggle}
					    />
                        <div style={styles.checkboxDiv}></div>
			        </div>
                break;

			case 'deadline':
	            tabNodes =  
	                <div>
			            <div>
							<CardText>Priority: {deadlinePriorityValue}</CardText>
                            <div >
                                <Slider
                                    style={styles.prioritySlider}
                                    min={0}
                                    max={100}
                                    defaultValue={50}
                                    step={5}
                                    value={deadlinePriorityValue}
                                    onChange={handlePrioritySlider}
                                />
                            </div>
			            </div>
			            
                        <div style={styles.selectionGroups}>
                            <Pool
                                deadlinePoolValueState={deadlinePoolValueState}
                                handlePoolChange={handlePoolChange}
                            />
                            <Group
                                deadlineGroupValueState={deadlineGroupValueState}
                                handleGroupChange={handleGroupChange}
                            />
                        </div>

			        </div>
	            break;

            default:
            	break;

		};

        
        return (
        	<MuiThemeProvider muiTheme={muiTheme}>
				<Card style={styles}>
				    <CardHeader
                        title="Render Manager"
                        // subtitle="Subtitle"
                    />
                    <RadioButtonGroup name="batchLocation" defaultSelected="deadline" style={styles.radioButtonGroup}>
                        <RadioButton
                        	onClick={() => selectTab_RenderManager('ae')}
                            value="ae"
                            label="AfterEffects"
                            style={styles.radioButton}
                        />
                        <RadioButton
                        	onClick={() => selectTab_RenderManager('deadline')}
                            value="deadline"
                            label="Deadline"
                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>
                    {tabNodes}
				</Card>
			</MuiThemeProvider>
                
        );
    };
};



