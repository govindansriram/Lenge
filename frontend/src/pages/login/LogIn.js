// import React, { useState } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import NavBar from "../../components/navbar/navbar";
// import { Redirect } from "react-router-dom";

// import "./LogIn.css";
// import login from "./login.JPG";

// import { login } from "../../components/UserFunctions";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fetchedEmail, setFetchedEmail] = useState("");
//   const [fetchedPassword, setFetchedPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function fetchEmail() {
//     fetch("http://localhost:8000/users:" + email, {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }).then(response =>
//       response.json().then(data => {
//         setFetchedEmail(data.email);
//       })
//     );
//   }

//   function fetchPassword() {
//     fetch("http://localhost:8000/users:" + email, {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }).then(response =>
//       response.json().then(data => {
//         setFetchedPassword(data.password);
//       })
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     fetchEmail();
//     fetchPassword();
//     if (email === fetchedEmail && password === fetchedPassword) {
//       setRedirect(true);
//     } else {
//       alert("Invalid Information! Try Again!");
//     }
//   }

//   function renderRedirect() {
//     if (redirect) {
//       return <Redirect to="/" />;
//     }
//   }

//   return (
//     <div className="login">
//       <NavBar redirect={redirect}></NavBar>
//       <header className="login-header">
//         <img className="login-image" src={login} alt="login-img"></img>
//         <div className="Login">
//           {fetchEmail()}
//           {fetchPassword()}
//           {renderRedirect()}
//           <form onSubmit={handleSubmit}>
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
//             <Button
//               block
//               bsSize="large"
//               disabled={!validateForm()}
//               type="submit"
//             >
//               Login
//             </Button>
//           </form>
//         </div>
//       </header>
//     </div>
//   );
// }

import React, { Component } from "react";
import { login } from "../../components/UserFunctions";
import NavBar from "../../components/navbar/navbar";

import "./LogIn.css";
import loginPic from "./login.JPG";

class Login extends Component {
  constructor() {
    super();
    this.state = {
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

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    login(user).then(res => {
      console.log(res);
      if (!res.error && !res.result) {
        this.props.history.push("/profile");
      } else {
        alert("Invalid Information!");
      }
    });
  }
  
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.email.includes("@");
  }

  render() {
    return (
      <div className="login">
        <NavBar></NavBar>
        <header className="login-header">
          <img className="login-image" src={loginPic} alt="login-img"></img>
        </header>
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
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
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
