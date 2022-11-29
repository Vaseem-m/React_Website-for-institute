import React from "react";
import { Link } from "react-router-dom";


const Home=(props)=>{
    return(
        <div>
            <div id="heading">
                <h1><Link to="/">MY TUTORIAL</Link></h1>
                <ul className="tablist">
                    <li className="tab"><b><Link to="/">Home</Link></b></li>
                    <li className="tab"><b><Link to="/Contactus">Contact</Link></b></li>
                    <li className="tab"><b><Link to="/Enquiry">Enrollment</Link></b></li>
                </ul>
            </div>   
            <div class="sidebar">
                <div id="aboutus">About us</div>
                <div id="content">
                Lorem ipsum dolor sit amet. Eum saepe quibusdam est architecto expedita qui voluptatem ipsum aut ullam tempore sed maiores labore et quia galisum. Qui corporis explicabo et necessitatibus quod ut reiciendis vero ut quaerat fugiat et doloribus quia et vero enim sed quia sint. Aut harum iusto qui doloribus dolorem et ipsa aperiam. 
                
                <section>{props.children}</section>
                Lorem ipsum dolor sit amet. Eum saepe quibusdam est architecto expedita qui voluptatem ipsum aut ullam tempore sed maiores labore et quia galisum. Qui corporis explicabo et necessitatibus quod ut reiciendis vero ut quaerat fugiat et doloribus quia et vero enim sed quia sint. Aut harum iusto qui doloribus dolorem et ipsa aperiam. 
                </div>
            </div>
            
        </div>
        )
}

export default Home;
