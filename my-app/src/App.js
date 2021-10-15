import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Links from './Components/Links.jsx';

import LoginForm from './00_Case study implementation/Login.jsx';

import RCHelloWorld from './01_React_Component/01_Demo_React Components.jsx';

import JSXHelloWorld from './02_JSX_for_React_Component/01_Demo 1_JSX in component.jsx';
import JSXRenderMultiElement from './02_JSX_for_React_Component/02_Demo 2_JSX in component.jsx';
import JSXAlgebraicExpression from './02_JSX_for_React_Component/03_Demo 3_JSX in component.jsx';
import ConditionalRendering from './02_JSX_for_React_Component/04_Demo_Conditional Rendering.jsx';

import SCFrmCSS from './03_Styling_React_Component/01_Demo 1_Styling Components.jsx';
import SCFrmBootstrp from './03_Styling_React_Component/02_Demo 2_Styling Components.jsx';
import SCFrmReactBootstrp from './03_Styling_React_Component/03_Demo 3_Styling Components.jsx';
import SCFrmMaterialUI from './03_Styling_React_Component/04_Demo 4_Styling Components.jsx';

import TimerState from './04_Props and State/01_Demo_State.jsx';
import TimerProps from './04_Props and State/02_Demo_Props.jsx';
import TimerFunctionalComponent from './04_Props and State/03_ Demo_Functional Component.jsx';
import AccessChildNode from './04_Props and State/04_Demo_Accessing Child Nodes.jsx';
import AppACNRender from './04_Props and State/05_Demo_Setting Default Values to Props.jsx';

import RCLMMPTimer from './05_React Component Lifecycle Methods/01_ Demo_Mounting Phase.jsx';
import RCLMUpPTimer from './05_React Component Lifecycle Methods/02_ Demo_Updating Phase.jsx';
import RCLMUnPTimer from './05_React Component Lifecycle Methods/03_Demo_Unmounting Phase.jsx';
import RCLMEHTimer from './05_React Component Lifecycle Methods/04_Demo_Error Handling.jsx';
import RCLMEmployee from './05_React Component Lifecycle Methods/05_Demo_Loading data using Ajax.jsx';

import RFD1Login from './06_React Forms/01_Demo 1_Forms.jsx';
import RFD2Login from './06_React Forms/02_Demo 2_Forms.jsx';
import RFRRLogin from './06_React Forms/03_Demo_React refs.jsx';
import RFFormComponent from './06_React Forms/04_Demo_Refs in Functional Components.jsx';
import RFRBD1Login from './06_React Forms/05_Demo 1_Styling Forms using react-bootstrap.jsx';
import RFRBD2Login from './06_React Forms/06_Demo 2_Styling Forms using react-bootstrap.jsx';
import FormValidation from './06_React Forms/07_Demo_Form Validation.jsx';

import RHUSD1Sample from './07_React Hooks/01_Demo 1_useState.jsx';
import RHUSD2Employees from './07_React Hooks/02_Demo 2_useState.jsx';
import RHUSD3Employees from './07_React Hooks/03_Demo 3_useState.jsx';
import RHUED1Sample from './07_React Hooks/04_Demo 1_useEffect.jsx';
import RHUED2Sample from './07_React Hooks/05_Demo 2_useEffect.jsx';
import RHUED3Sample from './07_React Hooks/06_Demo 3_useEffect.jsx';
import RHUED4Employees from './07_React Hooks/07_Demo 4_useEffect.jsx';

import RRRHeader from './08_Routing in React/01_Demo_Router.jsx';
import RRRPRoute from './08_Routing in React/02_Demo_Route Parameters.jsx';
import RRCRPRoute from './08_Routing in React/03_Demo_Configuring Routes Programmatically.jsx';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <a href="/Links"><h3>Links</h3></a>
        </div>
        <Router>
          <React.Fragment>
            <Route path='/Links' component={Links} exact />
            <Route path='/LoginForm' component={LoginForm} />
            
            <Route path='/RCHelloWorld' component={RCHelloWorld} />

            <Route path='/JSXHelloWorld' component={JSXHelloWorld} />
            <Route path='/JSXRenderMultiElement' component={JSXRenderMultiElement} />
            <Route path='/JSXAlgebraicExpression' component={JSXAlgebraicExpression} />
            <Route path='/ConditionalRendering' component={ConditionalRendering} />

            <Route path='/SCFrmCSS' component={SCFrmCSS} />
            <Route path='/SCFrmBootstrp' component={SCFrmBootstrp} />
            <Route path='/SCFrmReactBootstrp' component={SCFrmReactBootstrp} />
            <Route path='/SCFrmMaterialUI' component={SCFrmMaterialUI} />

            <Route path='/TimerState' component={TimerState} />
            <Route path='/TimerProps' component={TimerProps} />
            <Route path='/TimerFunctionalComponent' component={TimerFunctionalComponent} />
            <Route path='/AccessChildNode' component={AccessChildNode} />
            <Route path='/AppACNRender' component={AppACNRender} />

            <Route path='/RCLMMPTimer' component={RCLMMPTimer} />
            <Route path='/RCLMUpPTimer' component={RCLMUpPTimer} />
            <Route path='/RCLMUnPTimer' component={RCLMUnPTimer} />
            <Route path='/RCLMEHTimer' component={RCLMEHTimer} />
            <Route path='/RCLMEmployee' component={RCLMEmployee} />

            <Route path='/RFD1Login' component={RFD1Login} />
            <Route path='/RFD2Login' component={RFD2Login} />
            <Route path='/RFRRLogin' component={RFRRLogin} />
            <Route path='/RFFormComponent' component={RFFormComponent} />
            <Route path='/RFRBD1Login' component={RFRBD1Login} />
            <Route path='/RFRBD2Login' component={RFRBD2Login} />
            <Route path='/FormValidation' component={FormValidation} />

            <Route path='/RHUSD1Sample' component={RHUSD1Sample} />
            <Route path='/RHUSD2Employees' component={RHUSD2Employees} />
            <Route path='/RHUSD3Employees' component={RHUSD3Employees} />
            <Route path='/RHUED1Sample' component={RHUED1Sample} />
            <Route path='/RHUED2Sample' component={RHUED2Sample} />
            <Route path='/RHUED3Sample' component={RHUED3Sample} />
            <Route path='/RHUED4Employees' component={RHUED4Employees} />
            
            <Route path='/RRRHeader' component={RRRHeader} />
            <Route path='/RRRPRoute' component={RRRPRoute} />
            <Route path='/RRCRPRoute' component={RRCRPRoute} />

          </React.Fragment>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;

/*
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/
