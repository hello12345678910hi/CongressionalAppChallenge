import { useParams } from "react-router";

export default function LogIn() {
    const { v } = useParams();


    return (
        <div className="">
           <div class="container flex-container">
                <h1>Welcome</h1>
            </div>


            <div class="blank-pfp flex-blank-pfp">
                <img src="https://th.bing.com/th/id/OIP.ghDeAxQENeJRnpp7tlZyCwHaHa?w=100&h=100&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
            </div>

            <div class="user-bar">Username</div>

            <div class="password-bar">Password</div>

            <button class="Login">LOGIN</button>


            <h4 class="idk">Don't have an account? Sign up here</h4>
        </div>
    );
}