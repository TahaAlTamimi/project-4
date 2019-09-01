import React, { Component } from 'react'


export class MaterialBox extends Component {
    

    render() {
        console.log(this.props.material)
        const{material}=this.props
        return (
            <>
            {material.map((item,index)=>{
              return(
                <div className="container row justify-content-md-center">
                <div className="card card-body mb-3">
                <h4>{item.name} <i className="fas fa-sort-down"/>
                </h4>
                <ul className="list-grou ">
                   <a href="#"> <li className="list-group-item">{item.m1}</li></a>
                   <a href="#"> <li className="list-group-item">{item.m2}</li></a>
                   <a href="#"> <li className="list-group-item">{item.m3}</li></a>
                </ul> 
                </div>
                </div>
              ) 
            })}
                
            </>
        )
    }
}

export default MaterialBox
