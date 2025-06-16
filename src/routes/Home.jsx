import Destination from "../components/Destination";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar"
import Trip from "../components/Trip";

function Home()
{
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Chase Sunsets, Collect Memories"
        text="Curate your journey, one heartbeat at a time"
        url="/"
        btnText="Plan your journey"
        btnclass="Show"
        />
        <Destination/>
        <Trip />
        <Footer />
        </>
    )
}
export default Home;