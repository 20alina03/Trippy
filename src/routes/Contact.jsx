import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";

function Contact()
{
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-about"
        heroImg="https://plus.unsplash.com/premium_photo-1697729658470-04117b32fd03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contact"
        btnclass="Hide"
        />
       <ContactForm />
         <Footer />
        </>
    )
}
export default Contact;