import { Component } from "react";
import { Link } from "react-router-dom";
import './NavbarStyles.css';
import { MenuItems } from "./MenuItems"; 

class Navbar extends Component {
    state= { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="logo"><h1>Trippy</h1></div>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked?"fa-solid fa-times":"fa-solid fa-bars"}></i>
                    </div>
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link  to={item.url} className={item.className} >
                                        <i className={item.icon}></i> {item.title}
                                    </Link>
                                </li>
                            );
                        }
                        )}
                       <li>
                        <Link to="/signup">
                             <button className="btn">Sign Up</button>
                       </Link>
                      </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navbar;
