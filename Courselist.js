import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import Python_logo from './Python_logo.png';
import java_logo from './java_logo.png'
import net_logo from './net_logo.png'
import javascript_logo from './javascript_logo.png'
import JS_logo from './JS_logo.png'
import Angular_logo from './Angular.jpg'
import php_logo from './php_logo.png'
class Courselist extends React.Component{
    constructor() {
        super();
        this.state = {
            course: [],
        }
    }

    async componentDidMount() {
        const res = await fetch(
            "http://localhost:3000/courses",
            {
                method: "GET",
            }
        );
        const result = await res.json();
        this.setState({
            ...this.state,
            course: result
        })
        console.log(this.state.course);
    }
    render(){
        
        return(
            
                <Home>
                    
                    <div class="list">
                    <div class="coursebox" > <img src={Python_logo} alt="Logo" />
                    <h3>Python</h3>
                    {this.state.course.filter((cour)=> cour.id === 1).map((cour) => cour.content)}<br></br>
                    <button id="Enq"><b><Link to="/Enquiry">Enquiry</Link></b></button></div>
                    
                    <div class="coursebox" > <img id="java_logo" src={java_logo} alt="Logo" />
                    <h3>Java</h3>
                    {this.state.course.filter((cour)=> cour.id === 2).map((cour) => cour.content)}<br></br>
                    <button id="Enq"><b><Link to="/Enquiry">Enquiry</Link></b></button></div>
                    
                    <div class="coursebox" > <img id="net_logo" src={net_logo} alt="Logo" />
                    <h3>ASP .NET</h3>
                    {this.state.course.filter((cour)=> cour.id === 3).map((cour) => cour.content)}<br></br>
                    <button id="Enq"><b><Link to="/Enquiry">Enquiry</Link></b></button></div>
                    </div>

                    <div class="list_1">
                    <div class="coursebox_1" > <img id="logo2" src={JS_logo} alt="Logo" />
                    <h3>Java Script</h3>
                    {this.state.course.filter((cour)=> cour.id === 4).map((cour) => cour.content)}<br></br>
                    <button id="Enq"><b><Link to="/Enquiry">Enquiry</Link></b></button></div>

                    <div class="coursebox_1" > <img id="logo2" src={Angular_logo} alt="Logo" />
                    <h3>Angular</h3>
                    {this.state.course.filter((cour)=> cour.id === 5).map((cour) => cour.content)}<br></br>
                    <button id="Enq"><b><Link to="/Enquiry">Enquiry</Link></b></button></div>
                    
                    <div class="coursebox_1" > <img id="logo2" src={php_logo} alt="Logo" />
                    <h3>PHP</h3>
                    {this.state.course.filter((cour)=> cour.id === 6).map((cour) => cour.content)}<br></br>
                    <button id="Enq"><b><Link to="/Enquiry">Enquiry</Link></b></button></div>
                    </div>
                </Home>
                
            
             
        )
    }
}

export default Courselist;