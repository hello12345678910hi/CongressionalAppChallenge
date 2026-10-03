import Counter from "../components/Counter";
import CounterWithProp from "../components/CounterWithProp";

export default function HomePage() {

    return (
        <div className="flex w-auto flex-col items-center">
           

            <div className="flex-container">
                 <h1>Welcome, John!</h1>
                <img src="https://th.bing.com/th/id/OIP.gUbYpAArMqKXmoJgnWyYHgHaHa?w=100&h=100&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                <div className="user-post">
                    <img className="w-auto h-20 pt-1" src="https://th.bing.com/th/id/OIP.gUbYpAArMqKXmoJgnWyYHgHaHa?w=100&h=100&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                    <div>
                        <h2>Post: 1st day of school</h2>
                        <h2>Submit Post ✉️ </h2>
                    </div>
                </div>
                <div className="vertical-content">
                    <div className="Vertical">
                        <div className="flex">
                            <img src="https://th.bing.com/th/id/OIP.BkzIuQtpcLOZ_XpHoTyBsAHaHa?w=20&h=20&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                            <div className="">Jack</div>
                        </div>
                        <div className="content">
                            <img src="https://th.bing.com/th/id/OIP.XCji0GDshwfdMTgLLPT0vgHaEo?w=265&h=300&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                        </div>
                        new bike
                    </div>
                    <div className="Vertical">
                        <div className="flex">
                            <img src="https://www.bing.com/th/id/OIP.s9h56aqwALbFdFWePaGmxgHaHa?w=20&h=20&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                            <div className="">Jones</div>
                    </div>
                    <div className="content2">
                        <img src="https://th.bing.com/th/id/OIP.kaeCLIYH9yDejjn_ftLIZwHaD4?w=334&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                    </div>
                    finally beat it
                    </div>
                    <div className="Vertical">
                        <div className="flex">
                            <img src="https://th.bing.com/th/id/OIP.aipgVBO2VMwyunBe6y8emgHaHa?w=20&h=20&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                            <div className="">Nathan</div>
                        </div>
                        <div className="content3">
                            <img src="https://th.bing.com/th/id/OIP.bihkJK9gyHBLQnr_yuifKgHaEK?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                        </div>
                        please help 
                        <div className="Title"></div>
                    </div>
                    <div className="Vertical">
                        <div className="flex">
                            <img src="https://www.bing.com/th/id/OIP.GWc928UFWTSBo2SOT0aq5wHaHa?w=20&h=20&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                            <div className="">Cedrick</div>
                        </div>
                        <div className="content4">
                            <img src="https://th.bing.com/th/id/OIP.j8Pa1XTouYsdD7NKRmxXdAHaEK?w=315&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                        </div>
                        <div>food</div>
                    </div>
                </div>
                <div className="horizontal-content">
                    <div className="Horizontal1">
                        <img src="https://th.bing.com/th/id/OIP.aipgVBO2VMwyunBe6y8emgHaHa?w=35&h=35&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                        Math homework is too hard
                        <img src="https://www.bing.com/th/id/OIP.BTdLF0Rh7hIpolnWKWgVEAHaFJ?w=10&h=10&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                        ✉️
                    </div>
                    <div className="Horizontal2">
                            <img src="https://www.bing.com/th/id/OIP.GWc928UFWTSBo2SOT0aq5wHaHa?w=20&h=20&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                        Can someone please dm me the answers to math hw 
                        <img src="https://www.bing.com/th/id/OIP.BTdLF0Rh7hIpolnWKWgVEAHaFJ?w=10&h=10&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                        ✉️
                    </div>
                </div>
            </div>
        </div>
    );
}