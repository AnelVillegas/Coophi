import React, {Component, Fragment} from 'react';
import Navegation from './components/Navegation';
import SideSection from './components/SideSection';
import Content from './components/Content';
import './App.css';

class App extends Component { 
  render() {

  
  return (
    <Fragment>
      <div>
      <Navegation/>
      </div>
      
      <div className="rectangle"><SideSection/> </div>
      <div className="rectangle2"><Content/></div>
      </Fragment>
     
    
  )
  }
}

export default App;
