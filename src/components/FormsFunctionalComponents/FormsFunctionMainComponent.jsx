import React, { useState } from "react";
import InputComponent from "../FormsCommonComponents/InputComponent";
import ButtonComponent from "../FormsCommonComponents/ButtonComponent";

function FormsFunctionMainComponent(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
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

    setErrors(errors);
    return isValid;
  };

  const firstNameEvent = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameEvent = (event) => {
    setLastName(event.target.value);
  };

  const emailEvent = (event) => {
    setEmail(event.target.value);
  };

  const mobileNumberEvent = (event) => {
    setMobileNumber(event.target.value);
  };

  const passwordEvent = (event) => {
    setPassword(event.target.value);
  };

  const submitEvent = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const storedFormData = localStorage.getItem("formData");
      let formDataArray = [];

      if (storedFormData) {
        formDataArray = JSON.parse(storedFormData);
      }

      formDataArray.push({
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
      });

      localStorage.setItem("formData", JSON.stringify(formDataArray));

      setFirstName("");
      setLastName("");
      setEmail("");
      setMobileNumber("");
      setPassword("");
      setErrors({});

      alert("Form data saved successfully!");
    }
  };

  return (
    <React.Fragment>
      <div className="class-main">
        <h4>Forms - General (Functional)</h4>
        <form>
          <InputComponent
            name="firstName"
            displayName="First Name"
            value={firstName}
            type="text"
            onChangeEvent={firstNameEvent}
            error={errors.firstName}
          />
          <InputComponent
            name="lastName"
            displayName="Last Name"
            value={lastName}
            type="text"
            onChangeEvent={lastNameEvent}
            error={errors.lastName}
          />
          <InputComponent
            name="email"
            displayName="Email"
            value={email}
            type="email"
            onChangeEvent={emailEvent}
            error={errors.email}
          />
          <InputComponent
            name="mobileNumber"
            displayName="Mobile Number"
            value={mobileNumber}
            type="number"
            onChangeEvent={mobileNumberEvent}
            error={errors.mobileNumber}
          />
          <InputComponent
            name="password"
            displayName="Password"
            value={password}
            type="password"
            onChangeEvent={passwordEvent}
            error={errors.password}
          />
          <ButtonComponent onClickEvent={submitEvent} />
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormsFunctionMainComponent;
