import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
// import Divider from 'material-ui/Divider';
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
		width: 300,
	},
	radioButton: {
		display: 'inline-block',
		marginBottom: 8,
	},
	checkbox: {
		marginBottom: 8,
		padding: 10,
		display: 'flex',
		width: 'calc(100% * (1/4))'
	},
	checkboxDiv: {
		display:'flex',
		flexWrap: 'wrap'
	},
	button: {
		textAlign: 'center',
	},
	teamToggle: {
		marginLeft: 4,
		marginTop: 12,
		marginBottom: 16,
	},
};


export default class Data extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			teamList: [
				{value: '3800', tricode: 'ARI',	id: 1},
				{value: '0200', tricode: 'ATL', id: 2},
				{value: '0325', tricode: 'BUF', id: 3},
				{value: '0610', tricode: 'BAL', id: 4},
				{value: '0750', tricode: 'CAR', id: 5},
				{value: '0810', tricode: 'CHI', id: 6},
				{value: '0920', tricode: 'CIN', id: 7},
				{value: '1050', tricode: 'CLE', id: 8},
				{value: '1200', tricode: 'DAL', id: 9},
				{value: '1400', tricode: 'DEN', id: 10},
				{value: '1540', tricode: 'DET', id: 11},
				{value: '1800', tricode: 'GB', 	id: 12},
				{value: '2120', tricode: 'HOU', id: 13},
				{value: '2200', tricode: 'IND', id: 14},
				{value: '2250', tricode: 'JAX', id: 15},
				{value: '2310', tricode: 'KC', 	id: 16},
				{value: '4400', tricode: 'LAC', id: 17},
				{value: '2510', tricode: 'LAR', id: 18},
				{value: '2700', tricode: 'MIA', id: 19},
				{value: '3000', tricode: 'MIN', id: 20},
				{value: '3200', tricode: 'NE', 	id: 21},
				{value: '3300', tricode: 'NO', 	id: 22},
				{value: '3410', tricode: 'NYG', id: 23},
				{value: '3430', tricode: 'NYJ', id: 24},
				{value: '2520', tricode: 'OAK', id: 25},
				{value: '3700', tricode: 'PHI', id: 26},
				{value: '3900', tricode: 'PIT', id: 27},
				{value: '4600', tricode: 'SEA', id: 28},
				{value: '4500', tricode: 'SF', 	id: 29},
				{value: '4900', tricode: 'TB', 	id: 30},
				{value: '2100', tricode: 'TEN', id: 31},
				{value: '5110', tricode: 'WAS', id: 32},
			],
		};
		// this.handleClick = this.handleClick.bind(this);
	}

	// handleClick(e) {
	//     this.refs.fileUploader.click();
	// }


	render() {
		const {selectTab_Data, tabState_Data, handleToggle_AllTeams, handleGetDataFile, handleTeamSelect} = this.props;
		const teams = this._getTeams(handleTeamSelect);

		let tabNodes;

        switch (tabState_Data){
			case 'csv':
				tabNodes =
	                <div style={styles.button}>
			            <FlatButton
	                        label="Select Data File"
	                        secondary={true}
	                        type="file"
	                        id="file"
	                        ref="fileUploader"
	                        // primary={true}
	                        onClick={handleGetDataFile}
	                        // onClick={this.handleClick}
	                    />
	                    <input
	                    	type="file"
	                    	id="file"
	                    	ref="fileUploader"
	                    	style={{display: "none"}}
                    	/>
	                </div>
                break;

			case 'json':
				tabNodes =
	                <div>
	                	<Toggle 
	                		style={styles.teamToggle}
							label="All Teams"
							defaultToggled={true}
							onToggle={handleToggle_AllTeams}
							onClick={() => selectTab_Data('all')}
							labelPosition="right"
					    />
					    <div style={styles.checkboxDiv}></div>
		            </div>
	            break;

			case 'gs':
				tabNodes =
	        		<CardText>Feature: Google Sheets is not yet connected</CardText>
        		break;

    		case 'all':
				tabNodes =
	                <div>
	                	<Toggle 
	                		style={styles.teamToggle}
							label="All Teams"
							defaultToggled={false}
							onToggle={handleToggle_AllTeams}
							onClick={() => selectTab_Data('json')}
							labelPosition="right"
					    />
						<div style={styles.checkboxDiv}>{teams}</div>
		            </div>
	            break;

    		default:
    			break;
		};


		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<Card style={styles}>
				    <CardHeader
						title="Data Type"
						// subtitle="Subtitle"
			        />
				    <RadioButtonGroup name="data" defaultSelected="csv" style={styles.radioButtonGroup}>
						<RadioButton
							onClick={() => selectTab_Data('csv')}
							value="csv"
							label="CSV"
							style={styles.radioButton}
						/>
						<RadioButton
							onClick={() => selectTab_Data('json')}
							value="json"
							label="Feed"
							style={styles.radioButton}
						/>
						<RadioButton
							onClick={() => selectTab_Data('gs')}
							value="googleSheet"
							label="GS"
							disabled={true}
							style={styles.radioButton}
						/>
					</RadioButtonGroup>
					{tabNodes}
					{/* <Divider /> */}
				</Card>
			</MuiThemeProvider>		
		);
	};

	_getTeams (handleTeamSelect){
		const {teamList} = this.state;

		return teamList.map( (team) => {
			return (
				<Checkbox
					style={styles.checkbox}
					label={team.tricode}
					value={team.value}
					key={team.id}
					onClick={handleTeamSelect}
				/>
			);
		});
	};
};