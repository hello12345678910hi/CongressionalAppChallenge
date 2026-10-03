import { useParams } from "react-router";

export default function SignUp() {
    const { v } = useParams();


    return (
        <div className="">
            <div className="container flex-container">
                <h1>Create an Account</h1>
            </div>

            <div className="blank-pfp flex-blank-pfp">
                <img src="https://th.bing.com/th/id/OIP.ghDeAxQENeJRnpp7tlZyCwHaHa?w=100&h=100&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
            </div>


            <div className="email-bar">Email</div>

            <div className="user-bar">Username</div>

            <div className="password-bar">Password</div>

            <button className="Login">Create Account</button>
        </div>
    );
}