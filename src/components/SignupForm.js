import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const SignupForm = () => {

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

            <form>
            {/* firstname and lastname */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
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
                            type={showPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                        />

                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
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