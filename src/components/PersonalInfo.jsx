import React from "react";
import { Formik, Form } from "formik";
import { IoMdInformationCircle } from "react-icons/io";
import { validationSchema } from "../validations/createAccountValidation";
import InputField from "./InputField";
import TextField from "@mui/material/TextField";
import TextAreaField from "./TextAreaField";

const PersonalInfo = () => {
    const initialValues = {
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <div className="flex flex-col bg-white justify-center p-5 items-center mx-auto max-w-md">
            <div className=" mb-4 mt-5">
                <div className="flex justify-center gap-x-3 mb-4">
                    <div className=" flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full font-bold">
                        1
                    </div>
                    <div className=" flex items-center justify-center w-10 h-10 bg-gray-400 text-white rounded-full font-bold">
                        2
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-2 text-center">Personal Information</h1>
                <p className="text-md mb-2">Please answer questions as accurately as possible.</p>
            </div>

            <div className="flex flex-col  p-5 md:p-3">
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    <Form>
                        <InputField name="email" label="Email address" type="text" />
                        <InputField name="mobile" label="Mobile number" type="text" />
                        <InputField name="mobile" label="Mobile number"   type="text" />
                        <InputField name="mobile" label="Mobile number" type="text" />
                        <InputField name="mobile" label="Mobile number" type="text" />
                        <InputField name="mobile" label="Mobile number" type="text" />
                        <TextAreaField
                            name="yourTextAreaFieldName"
                            label="Your TextArea Label"
                            rows={4}
                    
                        />

                        <div>
                            <p className="mt-8 text-xs flex  justify-center  md:justify-start gap-x-0 text-black text-center text-opacity-60">
                                <span>
                                    {" "}
                                    <IoMdInformationCircle className="w-10 h-5" />
                                </span>
                                All information can edited once you have created your account
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="mt-3 px-4 py-2 w-full h-12 text-white rounded-lg bg-blue-500">
                                Save and Continue
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default PersonalInfo;
