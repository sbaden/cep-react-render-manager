import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import {orange700, blue500} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme(darkBaseTheme, {
    palette: {
		// textColor: cyan500,
		accent1Color: orange700,
		primary1Color: blue500
    },
});


export default class Scripts extends React.Component {

    render() {
    	const {projectScriptValueState, handleScriptChange} = this.props;

        return (
        	<MuiThemeProvider muiTheme={muiTheme}>			
	            <div>
	            	<SelectField
			          floatingLabelText="Scripts"
			          value={projectScriptValueState}
			          onChange={handleScriptChange}
			        >
			          <MenuItem value="INT_PLYR_HS" primaryText="INST PLYR HS" />
			          <MenuItem value="INT_WRD" primaryText="INST WRD" />
			          <MenuItem value="INT_MU" primaryText="INST MU" />
			        </SelectField>
	            </div>
			</MuiThemeProvider>          
        );
    }
}