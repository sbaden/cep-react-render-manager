import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import Divider from 'material-ui/Divider';
import {orange700, blue500, blue700} from 'material-ui/styles/colors';

import Shows from './Shows';
import Scripts from './Scripts';


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
	button: {
		textAlign: 'center',
	},
	selectionGroups: {
        marginLeft: 10,
    }
};


export default class Projects extends React.Component {

	render() {
		const {projectShowValueState, handleShowChange, projectScriptValueState, handleScriptChange, handleReloadScripts} = this.props;

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<Card style={styles}>
				    <CardHeader
						title="Project"
						// subtitle="Subtitle"
			        />

					<div style={styles.selectionGroups}>
						<Shows 
							projectShowValueState={projectShowValueState}
							handleShowChange={handleShowChange}
						/>
						<Scripts
							projectScriptValueState={projectScriptValueState}
							handleScriptChange={handleScriptChange}
						/>
					</div>

			        <div style={styles.button}>
						<FlatButton
	                        label="Reload Scripts"
	                        primary={true}
	                        onClick={handleReloadScripts}
	                    />
                    </div>
                    {/* <Divider /> */}
				</Card>
			</MuiThemeProvider>
		);
	};
};