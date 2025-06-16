import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
    return (
        <>
            <div className="trip">
                <h1>Recent Trip</h1>
                <p>Discover the best places to visit in the world</p>
            </div>
            <div className="trip-card">
                <TripData
                    image={Trip1}
                    heading="Trip to Paris"
                    text="Experience the romance of Paris with its iconic Eiffel Tower, charming streets, and world-class art."
                />
                 <TripData
                    image={Trip2}
                    heading="Trip to Japan"
                    text="Experience the romance of Paris with its iconic Eiffel Tower, charming streets, and world-class art."
                />
                 <TripData
                    image={Trip3}
                    heading="Trip to Instanbul"
                    text="Experience the romance of Paris with its iconic Eiffel Tower, charming streets, and world-class art."
                />
            </div>
        </>
    );
}
export default Trip;