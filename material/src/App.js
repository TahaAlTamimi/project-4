import React, { PureComponent } from 'react'
import Header from './component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialCode from './component/MaterialCode'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HTMLBasic from './component/TransferToMaterial/HTMLBasic'
import HTMLIntermediate from './component/TransferToMaterial/HTMLIntermediate'
import HTMLAdvanced from './component/TransferToMaterial/HTMLAdvanced'

export class App extends PureComponent {
  render() {
    return (
      
      <div>
       <Router>
                <Header/>
                <Route path="/home" component={MaterialCode}/>
                <Route path="/HTMLBasic" component={HTMLBasic}/>
            
                <Route path="/HTMLIntermediate" component={HTMLIntermediate}/>

               <Route path="/HTMLAdvanced" component={HTMLAdvanced}/>
               
         </Router>
      
       {/* < /> */}
      
      </div>
      
    )
  }
}

export default App

