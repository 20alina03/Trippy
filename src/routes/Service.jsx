import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Trip from "../components/Trip";

function Service()
{
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1660670173087-494f59ca737a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Services"
        btnclass="Hide"
        />
        <Trip />
         <Footer />
        </>
    )
}
export default Service;