import React, { Component } from 'react'

export class Header extends Component {
    state={HeaderShow:false}

    render() {

        return (
            <>
            
            <div className="mr-auto" style={{backgroundColor:"orange"}}>
            
            <ul className="text-warning nav nav-pills nav justify-content-center  ">
           
            <li className="nav-item text-warning ">
             <a className="text-warning " href="/">Home</a>
             
             {this.state.HeaderShow?(
                 <a className="text-warning " href="/material">Back to Material</a>   
             ):null}
             
            </li>
            </ul>
            
            <h6 className="nav justify-content-start mr-auto">Materials</h6>
            
            </div>
            </>
        )
    }
}

export default Header
