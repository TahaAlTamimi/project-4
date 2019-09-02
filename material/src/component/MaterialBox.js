import React, { Component } from 'react'


export class MaterialBox extends Component {
  state={
    showMaterial:false,
  }  
  
  insertMaterial=()=>{
      console.log("kkk")
      this.setState({
        showMaterial:!this.state.showMaterial,
      })
      console.log(this.state.showMaterial)

    };

    render() {
        // console.log(this.props.material)
        const{material}=this.props
        return (
            <>
            {/* {material.map((item,index)=>{ */}
              
                <div  className="container row justify-content-md-center">
                <div className="card card-body mb-3">
                <h4>{material.name} <i onClick={this.insertMaterial} className="fas fa-sort-down"/>
                </h4>
                {this.state.showMaterial?(
                   <ul className="list-grou ">
                   <a href="#"> <li className="list-group-item">{material.m1}</li></a>
                   <a href="#"> <li className="list-group-item">{material.m2}</li></a>
                   <a href="#"> <li className="list-group-item">{material.m3}</li></a>
                </ul> 
                ): null}
               
                </div>
                </div>
               
            {/* // })} */}
                
            </>
        )
    }
}

export default MaterialBox
