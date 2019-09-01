import React, { Component } from 'react'
import MaterialBox from './MaterialBox';


export class MaterialCode extends Component {
   state = {
       material:[
           {id:1,name:"HTML",m1:"Basic",m2:"intermediate",m3:"advance"},
           {id:1,name:"CSS",m1:"Basic",m2:"intermediate",m3:"advance"},
           {id:1,name:"javaScript",m1:"Basic",m2:"intermediate",m3:"advance"},
        ]

             }

    render() {
     
        return (
            <>
              <MaterialBox material={this.state.material}/>
            </>
        )
    }
}

export default MaterialCode
