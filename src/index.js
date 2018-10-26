import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
// import { inCEPEnvironment, evalExtendscript } from 'cep-interface';


// if (inCEPEnvironment()) {
  // evalExtendscript('alert("Extendscript connected!");');
  // evalExtendscript('writeLn("connected");');  // write "connected" to info panel of host application

  // let myScript = `
  //   alert(app.project.items.length);
  //   clearOutput();
  //   writeLn("Extendscript Connected!");
  // `;
  
  // evalExtendscript(myScript);
  
// }
// else{console.log('console log');}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();