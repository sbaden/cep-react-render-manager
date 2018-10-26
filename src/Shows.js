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


export default class Shows extends React.Component {

    render() {
    	const {projectShowValueState, handleShowChange} = this.props;
    	
        return (
        	<MuiThemeProvider muiTheme={muiTheme}>				
	            <div>
	            	<SelectField
			          floatingLabelText="Shows"
			          value={projectShowValueState}
			          onChange={handleShowChange}
			        >
			          <MenuItem value='TA' primaryText="Total Access" />
			          <MenuItem value='GD' primaryText="GameDay" />
			          <MenuItem value='GMF' primaryText="GMF" />
			        </SelectField>
	            </div>
			</MuiThemeProvider>        
        );
    }
}