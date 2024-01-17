import React, { useState, useEffect } from "react";

import axios from "axios";
import Step1 from "./Step1";
import swal from "sweetalert";

import validator from "validator";
import { Link } from "react-router-dom";
import OtpVerification from "./OtpVerification";

function Register() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    password: "",
    confirm_password: "",
    company: "",
    company_name: "",
    designation: "",
    designation_name: "",
    pincode: "",
    tnc: "",
    notifications: "",
    address: "",
    mobile_otp: "",
    email_otp: "",
    step: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [companyInput, setCompanyInput] = useState(false);
  const [designationInput, setDesignationInput] = useState(false);

  const [isTncChecked, setTncChecked] = useState(false);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setFormData((prevValidFields) => ({
      ...prevValidFields,
      mobile_otp: "",
      email_otp: "",
    }));
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleOtpVerificationComplete = () => {
    setCurrentStep(3); // Move to the next step after OTP verification
  };

  return (
    <div>
      {currentStep === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          currentStep={currentStep}
          companyInput={companyInput}
          setCompanyInput={setCompanyInput}
          designationInput={designationInput}
          setDesignationInput={setDesignationInput}
          isTncChecked={isTncChecked}
          setTncChecked={setTncChecked}
        />
      )}
      {currentStep === 2 && (
        <OtpVerification
          onComplete={handleOtpVerificationComplete}
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          currentStep={currentStep}
          companyInput={companyInput}
          setCompanyInput={setCompanyInput}
          designationInput={designationInput}
          setDesignationInput={setDesignationInput}
          isTncChecked={isTncChecked}
          setTncChecked={setTncChecked}
        />
      )}
    </div>
  );
}

export default Register;
