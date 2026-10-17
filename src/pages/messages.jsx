import { useParams } from "react-router";

export default function MessagesPage() {
    const { v } = useParams();


    return (
        <div className="flex-grow">
           <div className="flex-container flex-start">
                <div className="sub-container">
                    <div className="flex title-holder">Messages</div>


                    <div className="v-content">
                        <div className="img-holder">
                            <img src="https://www.bing.com/th/id/OIP.GWc928UFWTSBo2SOT0aq5wHaHa?w=60&h=60&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                        </div>
                        <div className="flex flex-col justify-between p-3">
                            <div>Cedrick</div>

                            <div>Last Msg: hi</div>
                        </div>
                    </div>
        
                    <div className="v-content">
                        <div className="img-holder">
                            <img src="https://th.bing.com/th/id/OIP.aipgVBO2VMwyunBe6y8emgHaHa?w=60&h=60&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img> 
                        </div>
                        <div className="flex flex-col justify-between p-3">
                            <div>Nathan</div>

                            <div>Last Msg: hello</div>
                        </div>
                    </div>
                     
                    <div className="v-content">
                        <div className="img-holder">
                            <img src="https://www.bing.com/th/id/OIP.s9h56aqwALbFdFWePaGmxgHaHa?w=60&h=60&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img> 
                        </div>
                        <div className="flex flex-col justify-between p-3">
                            <div>Jones</div>

                            <div>Last Msg: hello</div>
                        </div>
                    </div>
                   
                    <div className="v-content">
                        <div className="img-holder">
                            <img src="https://th.bing.com/th/id/OIP.BkzIuQtpcLOZ_XpHoTyBsAHaHa?w=60&h=60&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img> 
                        </div>
                        <div className="flex flex-col justify-between p-3">
                            <div>Jack</div>

                            <div>Last Msg: hi</div>
                        </div>
                    </div>
                    

                    
                    
                    <div className="v-content">
                        <div className="img-holder">
                            <img src="https://www.bing.com/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?w=60&h=60&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img> 
                        </div>
                        <div className="flex flex-col justify-between p-3">
                            <div>Greyson</div>

                            <div>Last Msg: hi</div>
                        </div>
                    </div>
                

                </div>
            </div>
           </div>
        
        
    );
}