import React from 'react';
// import { inCEPEnvironment, evalExtendscript } from 'cep-interface';

import './App.css';
import Projects from './Projects';
import Data from './Data';
import BatchLocation from './BatchLocation';
import RenderLocation from './RenderLocation';
import RenderManager from './RenderManager';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
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
    typography: {
        fontSize: 5,
      },
});

const styles = {
    width: 300,
    margin: 15,
    padding: 5,
    display: 'inline-block',
    backgroundColor: '#242424',
    button: {
        textAlign: 'center',
        margin: 10,
    },
};


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projectShowValue: 'TA',
            projectScriptValue: "INT_PLYR_HS",
            dataTabState: 'csv',
            dataType: 'csv',
            toggle_AllTeams: true,
            teamsArray: [
                '3800', '0200', '0325', '0610', // ARI, ATL, BAL, BUF
                '0750', '0810', '0920', '1050', // CAR, CHI, CIN, CLE
                '1200', '1400', '1540', '1800', // DAL, DEN, DET, GB
                '2120', '2200', '2250', '2310', // HOU, IND, JAX, KC
                '2510', '4400', '2700', '3000', // LA, LAC, MIA, MIN
                '3200', '3300', '3410', '3430', // NE, NO, NYG, NYJ
                '2520', '3700', '3900', '4600', // OAK, PHI, PIT, SEA
                '4500', '4900', '2100', '5110', // SF, TB, TEN, WAS
            ],
            teamsArrayFiltered: [],
            batchLocationState: 'preset',
            batchPath: '/Users/sbaden/Documents/development_AE/AE_BATCH/',
            renderLocationState: 'custom',
            renderPath: 'Custom_render_path',
            renderManagerState: 'deadline',
            toggle_AutoRender: false,
            deadlinePriorityValue: 50,
            deadlinePoolValue: 'cans',
            deadlineGroupValue: 'farm',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleGetDataFile = this.handleGetDataFile.bind(this);
    };
    
    handleSubmit = (e) => {
        console.log('submit clicked, State: ', this.state);
        e.preventDefault();
    };

    handleReloadPanel_dev = (e) => {
        console.log('Reload Panel button clicked');
    };


    // PROJECTS
    handleShowChange = (event, index, value) => {
        this.setState({projectShowValue: value});
        console.log('Show Selected: ', value);
    };

    handleScriptChange = (event, index, value) => {
        this.setState({projectScriptValue: value});
        console.log('Script Selected: ', value)
    };

    handleReloadScripts = (e) => {
        console.log('Reload Scripts button clicked');
    };


    // DATA
    selectTab_Data = (index) => {
        this.setState({ dataTabState: index });
        if(index === 'all'){
            this.setState({ dataType: 'json' });   
        }
        else if(index === 'csv'){
            const toggle_AllTeams = this.state.toggle_AllTeams;
            this.setState({teamsArrayFiltered: []});
            this.setState({ toggle_AllTeams: !toggle_AllTeams });
        }
        else{ this.setState({ dataType: index }); }
        console.log('data radio clicked: ', index);
    };

    handleGetDataFile = (e) => {
        console.log('Select Data File Button Clicked');
        // this.refs.fileUploader.click();
    };

    handleToggle_AllTeams = (e, toggle) => {
        const toggle_AllTeams = this.state.toggle_AllTeams;
        this.setState({ toggle_AllTeams: !toggle_AllTeams });
        if(toggle){
            this.setState({teamsArrayFiltered: []});
        }
        console.log('All-Teams toggle clicked, isChecked: ', toggle);
    };

    handleTeamSelect = (e) => {
        const team = e.target.value;
        const teamsArrayFiltered = this.state.teamsArrayFiltered;
        const teamIndex = teamsArrayFiltered.indexOf(team);
        console.log('Team Checked: ', e.target.checked, ', Value: ', team);
        console.log('teamsArrayFiltered index of team: ', teamIndex);
        if(e.target.checked){
            if(teamIndex < 0){
                teamsArrayFiltered.push(team);
                this.setState({teamsArrayFiltered});   
            }
        }
        else{
            console.log('Team Unclicked');

            const teamCollection = (teamNumber) => {
                return teamNumber !== team;
            };
            this.setState({teamsArrayFiltered: teamsArrayFiltered.filter(teamCollection)});
        };
    };


    // BATCH_LOCATION
    selectTab_BatchLoc = (index) => {
        this.setState({ batchLocationState: index });
        
        if(index === 'preset'){
            this.setState({ batchPath: '/Users/sbaden/Documents/development_AE/AE_BATCH/' });
        }
        else {
            this.setState({ batchPath: 'Custom_batch_path' });
        };
        console.log('batch radio clicked: ', index);
    };

    handleGetBatchPath = (e) => {
        console.log('Custom Batch Path Button Clicked');
    };


    // RENDER_LOCATION
    selectTab_RenderLoc = (index) => {
        this.setState({ renderLocationState: index });

        if(index === 'preset'){
            this.setState({ renderPath: '/Users/sbaden/Documents/development_AE/AE_RENDER/' });
        }
        else { 
            this.setState({ renderPath: 'Custom_render_path' });
        }
        console.log('render radio clicked: ', index);
    };

    handleGetRenderPath = (e) => {
        console.log('Custom Render Path Button Clicked');
    };


    // RENDER_MANAGER
    selectTab_RenderManager = (index) => {
        this.setState({ renderManagerState: index });
        console.log('render manager radio clicked: ', index);
    };

    handlePrioritySlider = (e, deadlinePriorityValue) => {
        this.setState({deadlinePriorityValue: deadlinePriorityValue});
    };

    handleToggle_AutoRender = (e, toggle) => {
        console.log('Auto render toggle clicked, isChecked: ', toggle);
        const toggle_AutoRender = this.state.toggle_AutoRender;
        this.setState({ toggle_AutoRender: !toggle_AutoRender });
    };

    handlePoolChange = (event, index, value) => {
        this.setState({deadlinePoolValue: value});
        console.log('Pool Selected: ', value);
    };

    handleGroupChange = (event, index, value) => {
        this.setState({deadlineGroupValue: value});
        console.log('Group Selected: ', value);
    };


    render() {
        // if (inCEPEnvironment()) {
            
        //     let myScript = `
        //     app.project.items.length;
        //     `;
            
        //     evalExtendscript(myScript)
        //     .then( result => {
        //     alert('There are ' + result + ' items in this project.');
        //     alert('second message');
        //     })
        //     .catch(error => alert(error))
            
        // }
        // else{console.log('console log');}
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Paper style={styles} zDepth={0}>
                        <Projects
                            projectShowValueState={this.state.projectShowValue}
                            handleShowChange={this.handleShowChange}
                            projectScriptValueState={this.state.projectScriptValue}
                            handleScriptChange={this.handleScriptChange}
                            handleReloadScripts={this.handleReloadScripts}
                        /> 
                        <Data
                            selectTab_Data={this.selectTab_Data}
                            tabState_Data={this.state.dataTabState}
                            handleToggle_AllTeams={this.handleToggle_AllTeams}
                            handleGetDataFile={this.handleGetDataFile}
                            handleTeamSelect={this.handleTeamSelect}
                        />
                        <BatchLocation
                            selectTab_BatchLoc={this.selectTab_BatchLoc}
                            batchLocationState={this.state.batchLocationState}
                            handleGetBatchPath={this.handleGetBatchPath}
                        />
                        <RenderLocation
                            selectTab_RenderLoc={this.selectTab_RenderLoc}
                            renderLocationState={this.state.renderLocationState}
                            handleGetRenderPath={this.handleGetRenderPath}
                        />
                        <RenderManager 
                            selectTab_RenderManager={this.selectTab_RenderManager} 
                            renderManagerState={this.state.renderManagerState}
                            handlePrioritySlider={this.handlePrioritySlider} 
                            deadlinePriorityValue={this.state.deadlinePriorityValue}
                            handleToggle_AutoRender={this.handleToggle_AutoRender}
                            deadlinePoolValueState={this.state.deadlinePoolValue}
                            handlePoolChange={this.handlePoolChange}
                            deadlineGroupValueState={this.state.deadlineGroupValue}
                            handleGroupChange={this.handleGroupChange}
                        />

                    <div style={styles.button}>
                        <RaisedButton
                            label="Submit"
                            primary={true}
                            onClick={this.handleSubmit}
                        />
                    </div>
                    
                    <div style={styles.button}>
                        <FlatButton
                            label="Reload Panel"
                            primary={true}
                            onClick={this.handleReloadPanel_dev}
                        />
                    </div>
                </Paper>
            </MuiThemeProvider>
        );
    };
};

