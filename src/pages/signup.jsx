import { useParams } from "react-router";

export default function SignUp() {
    const { v } = useParams();


    return (
        <div className="bg-gray-300">
            <div className="flex flex-col items-center">
            <h1>Welcome</h1>
            <div class="blank-pfp flex-blank-pfp">
                <img src="https://th.bing.com/th/id/OIP.ghDeAxQENeJRnpp7tlZyCwHaHa?w=100&h=100&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
            </div>
            <div class="user-bar">Create Username</div>
            <div class="password-bar">Create Password</div>
            <button className="border border-amber-950 m-4 p-2">CREATE ACCOUNT</button>
            <h4 class="idk">Don't have an account? Sign up here</h4>
        </div>
    </div>
    );
}