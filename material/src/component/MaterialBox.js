import React, { Component } from 'react'
import {Link}from 'react-router-dom'

export class MaterialBox extends Component {
  state={
  
    showMaterial:false,
  }  
  
  insertMaterial=()=>{
      // console.log("kkk")
      this.setState({
        showMaterial:!this.state.showMaterial
      })
      console.log(this.state.showMaterial)

    };

    render() {
        // console.log(this.props.material)
        const{material,a,b,c}=this.props
        
        return (
            <>
            {/* {material.map((item,index)=>{ */}
              
                <div  className="container row justify-content-md-center">
                <div className="card card-body mb-3">
                <h1>{material.name} <i onClick={this.insertMaterial} className="fas fa-sort-down"/>
                </h1>
                {(this.state.showMaterial)?(
                  
                   <ul className="list-grou ">
                    <Link to={`/material/${a}`}><li className="list-group-item">{material.m1}</li></Link>  
                     <Link to={`/material/${b}`}><li className="list-group-item">{material.m2}</li></Link> 
                     <Link to={`/material/${c}`}><li className="list-group-item">{material.m3}</li></Link> 
                </ul> 
          
                ): null}
               
                </div>
                 </div>
               
          {/* //  })} */}
                
            </>
        )
    }
}

export default MaterialBox
