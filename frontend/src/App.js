import React from "react"; 
import axios from "axios"; 
import './App.css';


class App extends React.Component { 
    state = { 
        details: [], 
        f_name: "",
        l_name: "",
        contact: "",
        address: "",
        about: "",
    }; 
  
    componentDidMount() { 
        let data; 
  
        axios 
            .get("http://localhost:8000/wel/") 
            .then((res) => { 
                data = res.data; 
                this.setState({ 
                    details: data, 
                }); 
            }) 
            .catch((err) => {}); 
    } 
  
    renderSwitch = (param) =>   "danger"; 
        
  
    handleInput = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value, 
        }); 
    }; 
  
    handleSubmit = (e) => { 
        e.preventDefault(); 
  
        axios 
            .post("http://localhost:8000/wel/", { 
                f_name: this.state.f_name,
                l_name: this.state.l_name, 
                contact: this.state.contact,
                address: this.state.address, 
                about: this.state.about, 
            }) 
            .then((res) => { 
                this.setState({ 
                    f_name: "",
                    l_name: "",
                    contact: "", 
                    address:"",
                    about: "", 
                }); 
            }) 
            .catch((err) => {}); 
    }; 
  
    render() { 
        return ( 
            <div className="container jumbotron "> 
            <h2>FORM</h2>
                <form onSubmit={this.handleSubmit}> 
                    <div className="input-group mb-3"> 
                        <div className="input-group-prepend"> 
                            <span className="input-group-text"
                                  id="basic-addon1"> 
                                {" "} 
                                First Name{" "} 
                            </span> 
                        </div> 
                        <input type="text" className="form-control" 
                               placeholder="First Name"
                               aria-label="Userfname"
                               aria-describedby="basic-addon1"
                               value={this.state.f_name } name="f_name"
                               onChange={this.handleInput} /> 
                    </div> 

                    <div className="input-group mb-3"> 
                        <div className="input-group-prepend"> 
                            <span className="input-group-text"
                                  id="basic-addon1"> 
                                {" "} 
                                Last Name{" "} 
                            </span> 
                        </div> 
                        <input type="text" className="form-control" 
                               placeholder="Last Name"
                               aria-label="Userlname"
                               aria-describedby="basic-addon1"
                               value={this.state.l_name } name="l_name"
                               onChange={this.handleInput} /> 
                    </div> 

                    <div className="input-group mb-3"> 
                        <div className="input-group-prepend"> 
                            <span className="input-group-text"
                                  id="basic-addon1"> 
                                {" "} 
                                Contact{" "}
                            </span> 
                        </div> 
                        <input type="text" className="form-control" 
                               placeholder="Contact"
                               aria-label="Usercontact"
                               aria-describedby="basic-addon1"
                               value={this.state.contact} name="contact"
                               onChange={this.handleInput} /> 
                    </div> 

                    <div className="input-group mb-3"> 
                        <div className="input-group-prepend"> 
                            <span className="input-group-text"> 
                               Address{" "} 
                            </span> 
                        </div> 
                        <input type="text" className="form-control" 
                               placeholder="Address"
                               aria-label="Useradd"
                               aria-describedby="basic-addon1"
                               value={this.state.address} name="address"
                               onChange={this.handleInput} /> 
                    </div> 
  
                    <div className="input-group mb-3"> 
                        <div className="input-group-prepend"> 
                            <span className="input-group-text"> 
                               About{" "}  
                            </span> 
                        </div> 
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Tell us about yourself" 
                                  value={this.state.about} name="about" 
                                  onChange={this.handleInput}> 
                        </textarea> 
                    </div> 
  
                    <button type="submit" className="btn btn-danger mb-5"> 
                        Submit 
                    </button> 
                </form> 
             
                <hr/> 
                  
      {/*
                {this.state.details.map((detail, id) => ( 
                    <div key={id}> 
                        <div className="card shadow-lg"> 
                            <div className={"bg-" + this.renderSwitch(id % 6) +  
                                          " card-header"}>Person {id + 1}</div> 
                            <div className="card-body"> 
                                <blockquote className={"text-" + this.renderSwitch(id % 6) +  
                                                   " blockquote mb-0"}> 
                                        <h6>
                                        {detail.name}<br/>
                                        {detail.address}<br/>
                                        {detail.about}
                                        </h6>
                                </blockquote> 
                            </div> 
                        </div> 
                        <span className="border border-primary "></span> 
                    </div> 
                ))} 
                */}
            </div> 
        );
                
    } 
} 
export default App; 