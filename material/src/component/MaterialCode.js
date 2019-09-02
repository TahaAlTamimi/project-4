import React, { Component } from 'react'
import MaterialBox from './MaterialBox';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HTMLBasic from './TransferToMaterial/HTMLBasic'
import HTMLIntermediate from './TransferToMaterial/HTMLIntermediate'
import HTMLAdvanced from './TransferToMaterial/HTMLAdvanced'
export class MaterialCode extends Component {
   state = {
    material:[
        {id:1,name:"HTML",m1:"Basic",m2:"intermediate",m3:"advance"},
        {id:2,name:"CSS",m1:"Basic",m2:"intermediate",m3:"advance"},
        {id:3,name:"javaScript",m1:"Basic",m2:"intermediate",m3:"advance"},
     ],

             }

    render() {
     
        return (
            <>
             
            {this.state.material.map((item,index)=>{
                  return  <MaterialBox material={item} key={index}/>
            })}
            
            </>
        )
    }
}

export default MaterialCode
