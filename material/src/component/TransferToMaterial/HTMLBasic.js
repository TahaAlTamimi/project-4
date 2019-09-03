import React, { Component } from 'react'
import Header from '../Header';

export class HTMLBasic extends Component {
    state = {
        htmlb:[]

    }

    componentDidMount(){
        fetch('/material/htmlbasic')
        .then(res=>res.json())
        .then(htmlb=>this.setState({htmlb},()=>console.log("material",htmlb)))

        .catch(err => {
            
            console.log("Error Reading data " + err);
          });
    }

    render() {
        return (
            <div>
                
           Welcome
            <ul>
            {this.state.htmlb.map((item,index)=>{
                return (
                    <>
                    <li key={index}>{item.name}</li>
                    <li><a href={item.m1} target="_blank"> video</a></li>
                    <li><a href={item.m2} target="_blank"> Article</a></li>
                    <li><a href={item.m3} target="_blank"> Article</a></li>
                    
                    </>
                )
            })} 
            </ul>
           
            
            </div>
        )
    }
}

export default HTMLBasic
