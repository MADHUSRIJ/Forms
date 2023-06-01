import React, { Component } from "react";
import InputComponent from "../FormsCommonComponents/InputComponent";
import ButtonComponent from "../FormsCommonComponents/ButtonComponent";

class FormsClassMainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
      errors: {},
    };
  }

  validateForm = () => {
    const { firstName, lastName, email, mobileNumber, password } = this.state;
    let errors = {};
    let isValid = true;

    if (firstName.trim() === "") {
      isValid = false;
      errors.firstName = "First name is required";
    }

    if (lastName.trim() === "") {
      isValid = false;
      errors.lastName = "Last name is required";
    }

    if (email.trim() === "") {
        isValid = false;
        errors.email = "Email is required";
      } else if (!email.includes("@")) {
        isValid = false;
        errors.email = "Invalid email address";
      }
    
      if (mobileNumber.trim() === "") {
        isValid = false;
        errors.mobileNumber = "Mobile number is required";
      } else if (mobileNumber.length !== 10) {
        isValid = false;
        errors.mobileNumber = "Mobile number should be 10 digits";
      }
    
      if (password.trim() === "") {
        isValid = false;
        errors.password = "Password is required";
      } else if (password.length < 8) {
        isValid = false;
        errors.password = "Password should be at least 8 characters";
      }
   

    this.setState({ errors });
    return isValid;
  };

  firstNameEvent = (event) => {
    this.setState({ firstName: event.target.value });
  };

  lastNameEvent = (event) => {
    this.setState({ lastName: event.target.value });
  };

  emailEvent = (event) => {
    this.setState({ email: event.target.value });
  };

  mobileNumberEvent = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };

  passwordEvent = (event) => {
    this.setState({ password: event.target.value });
  };

  submitEvent = (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      const storedFormData = localStorage.getItem("formData");
      let formDataArray = [];

      if (storedFormData) {
        formDataArray = JSON.parse(storedFormData);
      }

      formDataArray.push(this.state);

      localStorage.setItem("formData", JSON.stringify(formDataArray));

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        errors: {},
      });

      alert("Form data saved successfully!");
    }
  };

  render() {
    const { firstName, lastName, email, mobileNumber, password, errors } =
      this.state;

    return (
      <React.Fragment>
        <div className="class-main">
          <h4>Forms - General (Class)</h4>
          <form>
            <InputComponent
              name="firstName"
              displayName="First Name"
              value={firstName}
              type="text"
              onChangeEvent={this.firstNameEvent}
              error={errors.firstName}
            />
            <InputComponent
              name="lastName"
              displayName="Last Name"
              value={lastName}
              type="text"
              onChangeEvent={this.lastNameEvent}
              error={errors.lastName}
            />
            <InputComponent
              name="email"
              displayName="Email"
              value={email}
              type="email"
              onChangeEvent={this.emailEvent}
              error={errors.email}
            />
            <InputComponent
              name="mobileNumber"
              displayName="Mobile Number"
              value={mobileNumber}
              type="number"
              onChangeEvent={this.mobileNumberEvent}
              error={errors.mobileNumber}
            />
            <InputComponent
              name="password"
              displayName="Password"
              value={password}
              type="password"
              onChangeEvent={this.passwordEvent}
              error={errors.password}
            />
            <ButtonComponent onClickEvent={this.submitEvent} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default FormsClassMainComponent;
