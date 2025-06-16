import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination =()=>
{
    return (
        <>
            <div className="destination">
                <h1>Popular Destinations</h1>
                <p>Discover the best places to visit in the world</p>
                <DestinationData
                className="first-dest"
                heading="Paris, France"
                text="The City of Light is famous for its romantic ambiance, iconic Eiffel Tower, world-class art at the Louvre, and charming cafés lining historic streets."
                image1="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                image2="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <DestinationData
                className="first-dest-reverse"
                heading=" Istanbul, Türkiye"
                text="Where East meets West, Istanbul enchants with its grand mosques, bustling bazaars, and rich Ottoman heritage."
                image1="https://media.istockphoto.com/id/1499025854/photo/touristic-sightseeing-ships-in-istanbul-city-turkey.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qy3pHkH_Dwp8Zz8oef9qhdjFhXvbF5MdhGmOHduFd68="
                image2="https://media.istockphoto.com/id/2172850160/photo/galata-tower-in-istanbul.jpg?s=612x612&w=is&k=20&c=pZgK7xypV5URrWDiUWKcGBmyqLf8RQblEFpyBa8zBtY="
                />
                <DestinationData
                className="first-dest"
                heading="Paris, France"
                text="The City of Light is famous for its romantic ambiance, iconic Eiffel Tower, world-class art at the Louvre, and charming cafés lining historic streets."
                image1="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                image2="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />   
                
                </div>
        </>
    )
}

export default Destination;