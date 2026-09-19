import Counter from "../components/Counter";
import CounterWithProp from "../components/CounterWithProp";

export default function HomePage() {

    return (
        <div className="flex w-auto flex-col items-center">
            <h1>Welcome, User!</h1>

            <div className="flex-container">
                <img src="https://www.bing.com/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?w=100&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                <div className="user-post">
                    <img className="w-auto h-20 pt-1" src="https://www.bing.com/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?w=100&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                    <div>
                        <h2>Post: ______________</h2>
                        <h2>Submit Post ✉️ </h2>
                    </div>
                </div>
                <div className="vertical-content">
                    <div className="Vertical">
                        <div className="flex">
                            <img src="https://www.bing.com/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?w=20&h=20&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                            <div className="">Name</div>
                        </div>
                        <div className="content">
                            [content]
                        </div>
                        Title
                    </div>
                    <div className="Vertical">
                        <div className="flex">
                            <img src="https://www.bing.com/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?w=20&h=20&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                            <div className="">Name</div>
                    </div>
                    <div className="content2">
                        [content]
                    </div>
                    Title
                    </div>
                    <div className="Vertical">
                        <div className="flex">
                            <img src="https://www.bing.com/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?w=20&h=20&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                            <div className="">Name</div>
                        </div>
                        <div className="content3">
                            [content]
                        </div>
                        <div className="Title"></div>
                    </div>
                    <div className="Vertical">
                        <div className="flex">
                            <img src="https://www.bing.com/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?w=20&h=20&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                            <div className="">Name</div>
                        </div>
                        <div className="content4">
                            [content]
                        </div>
                        <div>Title</div>
                    </div>
                </div>
                <div className="horizontal-content">
                    <div className="Horizontal1"></div>
                    <div className="Horizontal2"></div>
                </div>
            </div>
        </div>
    );
}