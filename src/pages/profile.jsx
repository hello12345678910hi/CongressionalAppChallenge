export default function ProfilePage() {

    return (
        <div className="flex-grow">
            <div className="flex-container gap-y-5" >
                <div className="h-30 w-full flex">
                    <div className="profile-img">
                        <img src="https://th.bing.com/th/id/OIP.gUbYpAArMqKXmoJgnWyYHgHaHa?w=75&h=75&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                    </div>
                    <div>
                        <div>john</div>
                        <div>@john_123_0912</div> 
                        <div>Edit</div> 
                    </div>
                </div>
                
                <div className="flex gap-30">
                    <div>12 Posts</div>
                    <div>36 Followers</div>
                    <div>30 Following</div> 
                </div>

                <div className="flex gap-15">
                    <img src="https://th.bing.com/th/id/OIP.Uccm1XD-avpMSK4HfMrG6wAAAA?w=50&h=50&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                    <img src="https://th.bing.com/th/id/OIP.BkzIuQtpcLOZ_XpHoTyBsAHaHa?w=20&h=20&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                    <img src="https://www.bing.com/th/id/OIP.s9h56aqwALbFdFWePaGmxgHaHa?w=20&h=20&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                    <img src="https://th.bing.com/th/id/OIP.aipgVBO2VMwyunBe6y8emgHaHa?w=20&h=20&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img>
                    <img src="https://www.bing.com/th/id/OIP.GWc928UFWTSBo2SOT0aq5wHaHa?w=20&h=20&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                </div>
                <div>
                    <div className="grid">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        
                    </div>

                    <div className="grid">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="grid">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                </div>
            </div>            
        </div>
    
            
    );
}