import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
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


export default class Pool extends React.Component {

    render() {
    	const {deadlinePoolValueState, handlePoolChange} = this.props;

        return (
        	<MuiThemeProvider muiTheme={muiTheme}>	
	            <div>
	            	<SelectField
			          floatingLabelText="Deadline Pools"
			          value={deadlinePoolValueState}
			          onChange={handlePoolChange}
			        >
			          <MenuItem value='cans' primaryText="Cans Only" />
			          <MenuItem value='towers' primaryText="Towers Only" />
			          <MenuItem value='all' primaryText="All Machines" />
			        </SelectField>
	            </div>
			</MuiThemeProvider>
        );
    }
}



