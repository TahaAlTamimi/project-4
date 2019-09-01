import React, { PureComponent } from 'react'
import Header from './component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialCode from './component/MaterialCode'
export class App extends PureComponent {
  render() {
    return (
      <div>
       <Header/>
       <MaterialCode/>
   
      </div>
    )
  }
}

export default App

