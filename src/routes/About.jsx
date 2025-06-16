import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import AboutUS from "../components/AboutUS";

function About()
{
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="About US"
        btnclass="Hide"
        />
        <AboutUS />
         <Footer />
        </>
    )
}
export default About;