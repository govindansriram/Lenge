// import React, { useState } from "react";
// import NavBar from "../../components/navbar/navbar";
// import { Redirect } from "react-router-dom";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

// import "./SignUp.css";

// import signup from "./signup.JPG";

// export default function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);

//   function validateForm() {
//     return (
//       email.length > 0 &&
//       password.length > 0 &&
//       firstName.length > 0 &&
//       lastName.length > 0
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (confirmPassword !== password) {
//       alert("Passwords do not match!");
//     } else {
//       addUser();
//       setRedirect(true);
//       alert("Account Created!");
//     }
//   }

//   function addUser() {
//     return fetch("http://localhost:8000/add_email", {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       method: "POST",
//       body: {
//         first_name: firstName,
//         last_name: lastName,
//         email: email,
//         password: password
//       }
//     });
//   }

//   function renderRedirect() {
//     if (redirect) {
//       return <Redirect to="/" />;
//     }
//   }
//   return (
//     <div className="signup">
//       <NavBar></NavBar>
//       <header className="signup-header">
//         <img className="signup-image" src={signup} alt="signup-img"></img>
//         <div className="Signup">
//           {renderRedirect()}
//           <form onSubmit={handleSubmit}>
//             <FormGroup controlId="first-name" bsSize="large">
//               <ControlLabel id="label">First Name</ControlLabel>
//               <FormControl
//                 autoFocus
//                 type="first-name"
//                 value={firstName}
//                 onChange={e => setFirstName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup controlId="last-name" bsSize="large">
//               <ControlLabel id="label">Last Name</ControlLabel>
//               <FormControl
//                 autoFocus
//                 type="last-name"
//                 value={lastName}
//                 onChange={e => setLastName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup controlId="email" bsSize="large">
//               <ControlLabel id="label">Email</ControlLabel>
//               <FormControl
//                 autoFocus
//                 type="email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup controlId="password" bsSize="large">
//               <ControlLabel id="label">Password</ControlLabel>
//               <FormControl
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 type="password"
//               />
//             </FormGroup>
//             <FormGroup controlId="password" bsSize="large">
//               <ControlLabel id="label">Confirm Password</ControlLabel>
//               <FormControl
//                 value={confirmPassword}
//                 onChange={e => setConfirmPassword(e.target.value)}
//                 type="password"
//               />
//             </FormGroup>
//             <Button
//               block
//               bsSize="large"
//               disabled={!validateForm()}
//               type="submit"
//             >
//               Register
//             </Button>
//           </form>
//         </div>
//       </header>
//     </div>
//   );
// }

import React, { Component } from "react";
import { register } from "../../components/UserFunctions";
import NavBar from "../../components/navbar/navbar";

import "./SignUp.css";

import signupPic from "./signup.JPG";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    register(newUser).then(res => {
      this.props.history.push("/logIn");
    });
  }

  validateForm() {
    return (
      this.state.first_name.length > 0 &&
      this.state.last_name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.email.includes("@")
    );
  }

  render() {
    return (
      <div className="signup-page">
        <NavBar></NavBar>
        <header className="signup-header">
          <img className="signup-image" src={signupPic} alt="signup-img"></img>
        </header>
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter First Name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter Last Name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                disabled={!this.validateForm()}
                className="btn btn-lg btn-primary btn-block"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
