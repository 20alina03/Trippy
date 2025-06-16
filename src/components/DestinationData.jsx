import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component
{
    render()
    {
        return(
            <div className="destination">
                
                <div className={this.props.className}>
                    <div className="dest-text">
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.text}</p>

                    </div>
                    <div className="image">
                        <img src={this.props.image1} alt="Istanbul" />
                        <img src={this.props.image2} alt="Istanbul" />
                    </div>
                </div>
                </div>
    
        );
    }
}
export default DestinationData;