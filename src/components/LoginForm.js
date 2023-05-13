import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    const changeHandler = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }));
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
        <div>
            <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6"
            >
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup></p>
                
                <input 
                    required
                    type='text'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter your email-id"
                    name='email'
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
                </label>

                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password<sup className="text-pink-200">*</sup></p>
                
                <input 
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter your password"
                    name='password'
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />

                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>

                <Link to="#">
                    <p>
                        Forgot Password
                    </p>
                </Link>
                </label>

                <button>
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default LoginForm;