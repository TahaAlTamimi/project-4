import React, { Component } from 'react'
import MaterialBox from './MaterialBox';

var x = 0;
export class MaterialCode extends Component {
   state = {material:[],}
            
            componentDidMount(){
                fetch('/material')
                .then(res=>res.json())
                .then(material=>this.setState({material},()=>console.log("material",material)))

                .catch(err => {
                    
                    console.log("Error Reading data " + err);
                  });
            }

            
            


    render() {
     
        return (
            <>
             
            {this.state.material.map((item,index)=>{
                  return  <MaterialBox material={item} key={index} a={x++} b={x++} c={x++}/>
            })}
            {x=0}
            
            </>
        )
    }
}

export default MaterialCode
