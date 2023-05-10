import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const LoginForm = () => {

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

    return (
        <div>
            <form>
                <label>
                    <p>Email Address<sup>*</sup></p>
                
                <input 
                    required
                    type='text'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter your email-id"
                    name='email'
                />
                </label>

                <label>
                    <p>Password<sup>*</sup></p>
                
                <input 
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter your password"
                    name='password'
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