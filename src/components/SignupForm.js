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
            <div>
                <button>
                    Student
                </button>

                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
            {/* firstname and lastname */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            onChange={changeHandler}
                            placeholder="Enter first name"
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            onChange={changeHandler}
                            placeholder="Enter last name"
                            value={formData.lastName}
                        />
                    </label>
                </div>
                {/* email Add */}
                <label>
                    <p>Email Address<sup>*</sup></p> 
                    <input 
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder="Enter email address"
                        value={formData.email}
                    />
                </label>

                {/* createPassword and Confirm Password */}
                <div>
                    <label>
                        <p>Create password<sup>*</sup></p>
                        <input 
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.password}
                        />

                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>

                    <label>
                        <p>Confirm password<sup>*</sup></p>
                        <input 
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                        />

                        <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>
                </div>
                <button>
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignupForm;