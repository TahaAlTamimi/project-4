import React, { Component } from 'react'

export class Header extends Component {

    render() {
        return (
            <>
            
            <div className="mr-auto" style={{backgroundColor:"orange"}}>
            
            <ul class="text-warning nav nav-pills nav justify-content-center  ">
           
            <li class="nav-item text-warning ">
               
             <a class="text-warning " href="#">Home</a>
             
            </li>
            </ul>
            <h6 className="nav justify-content-start mr-auto">Materials</h6>
            
            </div>
            </>
        )
    }
}

export default Header
