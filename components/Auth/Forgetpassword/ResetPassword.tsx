"use client"
import AuthLayout from '@/components/Auth/AuthLayout'
import React, { useState } from 'react'
import reset from "@/assets/reset.svg";
import FieldInput from "@/components/UI/FieldInput";
import defaultPassword from "@/assets/defaultPassword.svg";
import eye from "@/assets/eye.svg";
import eyeSlash from "@/assets/eye-slash.svg";
import activePassword from "@/assets/activePassword.svg";

const ResetPassword = () => {
    const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
    const [formDataError, setFormDataError] = useState<any>({})
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const [passwordMatch, setPasswordMatch] = useState("")


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(pre => ({ ...pre, [name]: value }));
        setFormDataError((pre: any) => ({ ...pre, [name]: "" }));

        if (name == "confirmPassword") setPasswordMatch(formData.password !== value && formData.password !== "" && value !== "" ? "Password Doesn't Match" : "")
        if (name == "password") setPasswordMatch(formData.confirmPassword !== value && formData.confirmPassword !== "" && value !== "" ? "Password Doesn't Match" : "")

    };

    const formDataValidations = () => {
        formDatavalidateCredentials(formData?.password, formData?.confirmPassword, setFormDataError);
    };

    const formDatavalidateCredentials = (password: any, confirmPassword: any, setErrors: any) => {
        const fields = ["password", "confirmPassword"].map((name) => ({ name, value: eval(name), label: name.charAt(0).toUpperCase() + name.slice(1) }));
        const errors: any = {};
        fields.forEach((field) => {
            if (field.value === "") errors[field.name] = `${field.label} is required`;
        });
        setErrors(errors);
    };


    const submitHandler = () => {
        const formValues = Object.values(formData);
        if (formValues.includes("") || passwordMatch !== "") {
            formDataValidations();
            return;
        }
    }
    return (
        <AuthLayout
            title="Reset your Password"
            subtitle=""
            picture={reset}
            submitHandler={submitHandler}
            buttonText="Reset Password"
        >
            <div className="w-full max-h-[574px] flex-col sm:items-center md:items-center lg:items-start justify-start inline-flex">
                <div className="text-black text-5xl font-semibold leading-[48px]">
                    Reset Password{" "}
                </div>
                <div className="font-sans text-base sm:text-lg lg:text-lg leading-5 mt-3 mb-16">
                    Here’s a tip: Use a combination of Numbers, Uppercase, lowercase and Special characters
                </div>

                <FieldInput DefaultImage={defaultPassword} activeImage={activePassword} type={showPassword1 ? "text" : "password"} placeholder="Password" name="password" formData={formData} onChange={handleChange} onClick={() => setShowPassword1(!showPassword1)} icon={showPassword1 ? eye : eyeSlash} />
                <div className="text-red-500 text-sm h-[30px]">{formDataError?.password}</div>

                <FieldInput DefaultImage={defaultPassword} activeImage={activePassword} type={showPassword2 ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" formData={formData} onChange={handleChange} onClick={() => setShowPassword2(!showPassword2)} icon={showPassword2 ? eye : eyeSlash} />
                <div className="text-red-500 text-sm h-[30px]">{formDataError?.confirmPassword}{passwordMatch}</div>
            </div>
        </AuthLayout>
    )
}

export default ResetPassword
