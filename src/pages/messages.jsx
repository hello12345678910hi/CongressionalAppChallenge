import { useParams } from "react-router";

export default function MessagesPage() {
    const { v } = useParams();


    return (
        <div className="flex-grow">
           <div className="flex-container flex-start">
                <div className="v-content">
                    <img src="https://www.bing.com/th/id/OIP.GWc928UFWTSBo2SOT0aq5wHaHa?w=60&h=60&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img> Cedrick
                    <div><img src="https://th.bing.com/th/id/OIP.WD_vJYHavtF51eS70eTnnAHaJl?w=20&h=20&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img> 
                    ✉️</div>
                    
                </div>
                <div className="v-content">
                    <img src="https://th.bing.com/th/id/OIP.aipgVBO2VMwyunBe6y8emgHaHa?w=60&h=60&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img> Nathan
                    <img src="https://th.bing.com/th/id/OIP.WD_vJYHavtF51eS70eTnnAHaJl?w=20&h=20&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img> 
                    ✉️ 
                </div>
                <div className="v-content">
                    <img src="https://www.bing.com/th/id/OIP.s9h56aqwALbFdFWePaGmxgHaHa?w=60&h=60&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img> Jones
                    <img src="https://th.bing.com/th/id/OIP.WD_vJYHavtF51eS70eTnnAHaJl?w=20&h=20&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img> 
                    ✉️ 

                </div>
                <div className="v-content">
                    <img src="https://th.bing.com/th/id/OIP.BkzIuQtpcLOZ_XpHoTyBsAHaHa?w=60&h=60&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img> Jack
                    <img src="https://th.bing.com/th/id/OIP.WD_vJYHavtF51eS70eTnnAHaJl?w=20&h=20&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img> 
                    ✉️ 

                </div>
                <div className="v-content">
                    <img src="https://www.bing.com/th/id/OIP.dDKYQqVBsG1tIt2uJzEJHwHaHa?w=60&h=60&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img> Greyson
                    <img src="https://th.bing.com/th/id/OIP.WD_vJYHavtF51eS70eTnnAHaJl?w=20&h=20&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"></img> 
                    ✉️ 

                </div>
           </div>
        
        </div>
    );
}