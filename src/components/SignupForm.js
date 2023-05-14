import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const [accountType, setAccountType] = useState('student');

    const changeHandler = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        if(formData.password === formData.confirmPassword) {
            setIsLoggedIn(true);
            toast.success("Signup Success");
            const accountData = {
                ...formData
            };
            console.log("Printing account data ");
            console.log(accountData);
            navigate('/dashboard');
        } else {
            toast.error("Passwords do not match");
        }
        
    }

    return (
        <div>
            <div
            className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">

                <button
                className={`${accountType === "student" ?
                "bg-richblack-900 text-richblack-5" :
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("student")}>
                    Student
                </button>

                <button
                 className={`${accountType === "instructor" ?
                "bg-richblack-900 text-richblack-5" :
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} >
            {/* firstname and lastname */}
                <div className="flex gap-x-4 mt-[20px]">
                    <label className="w-full">
                        <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        First Name<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            onChange={changeHandler}
                            placeholder="Enter first name"
                            value={formData.firstName}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>

                    <label className="w-full">
                        <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Last Name<sup  className="text-pink-200">*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            onChange={changeHandler}
                            placeholder="Enter last name"
                            value={formData.lastName}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>

                {/* email Add */}
                <div className="mt-[20px]">
                    <label className="w-full mt-[20px]">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email Address<sup  className="text-pink-200">*</sup></p> 
                        <input 
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder="Enter email address"
                            value={formData.email}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>
                

                {/* createPassword and Confirm Password */}
                <div className="w-full flex gap-x-4 mt-[20px]">
                    <label  className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Create password<sup  className="text-pink-200">*</sup></p>
                        <input 
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.password}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />

                        <span
                        className="absolute right-3 top-[38px] cursor-pointer" 
                        onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? 

                            (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) : 

                            (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                    <label  className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Confirm password<sup  className="text-pink-200">*</sup></p>
                        <input 
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />

                        <span 
                        className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? 

                            (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) :

                             (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>
                </div>

                <button  className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-[10px]">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignupForm;