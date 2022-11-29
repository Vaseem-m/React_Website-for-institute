import React from "react";
import Layout from "./Layout";

class Enquiry extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            course: "",
            mobilenumber: ""
        }
    }

    handloForm = (e) => {
        this.setState({
            ...this.state,
            username: e.target.username.value,
            email: e.target.email.value,
            course: e.target.course.value,
            mobilenumber: e.target.mobilenumber.value
        })
        console.log(this.state.username)
    }
    render() {
        return (

            <Layout>
                <form className="enqform">
                    <label><b>Name:</b>
                        <input
                            type="text"
                            name="username"
                        />
                    </label>
                    <label><b>Email:</b>
                        <input
                            type="text"
                            name="email"
                        />
                    </label>
                    <label><b>Course name:</b>
                        <input
                            type="text"
                            name="course"
                        />
                    </label>
                    <label><b>Mobile No.:</b>
                        <input
                            type="number"
                            name="mobilenumber"
                        />
                    </label>
                    <input id="submitbutton" type="submit" onSubmit={this.handleForm} />
                </form>
                
            </Layout>
                                )
    }
}

                                export default Enquiry;