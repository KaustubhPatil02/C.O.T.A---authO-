import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";
// import { MdContactPage } from 'react-icons/md'
// import { AiOutlineCustomerService } from 'react-icons/ai'
// import { FcAbout } from 'react-icons/fc'
// import { FcHome } from 'react-icons/fc'
// import { BiLogIn } from 'react-icons/bi'
import "../CSS/Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { style } from "@mui/system";
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
// import { RiHtml5Line } from "react-icons/ri";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="Navbar" id="Navbar">
      <Link
        to="Home"
        className="nav-logo"
        style={{ color: "white", right: "10px", padding: "20px" }}
      >
        <span>COTA</span>
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
          Home{" "}
        </NavLink>
        <Link
          to="About"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: "white" }}
        >
          About{" "}
        </Link>
        <Link
          to="Service"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: "white" }}
        >
          Service{" "}
        </Link>
        {/* <Link to="Notable" onClick={() => setIsOpen(!isOpen)}>Notable </Link> */}
        <Link
          to="Contact"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: "white" }}
        >
          Contact{" "}
        </Link>
        <NavLink to="/Addroom" onClick={() => setIsOpen(!isOpen)}>
          Addroom
        </NavLink>
        {/* <NavLink to="/Resume" onClick={() => setIsOpen(!isOpen)}>Resume</NavLink> */}
        {/* <NavLink to="/Addcourse" onClick={() => setIsOpen(!isOpen)}>Addcourse</NavLink> */}
        {/* <NavLink to="/SimpleUser" onClick={() => setIsOpen(!isOpen)}>
          SignUp
        </NavLink> */}
        {/* <NavLink to="/Notification" onClick={() => setIsOpen(!isOpen)}>
                    Notification<Badge badgeContent={4} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                </NavLink>
                <NavLink to="/ProfileUser" onClick={() => setIsOpen(!isOpen)}><b style={{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:"orangered",padding:"7px"}}>NA</b></NavLink> */}

        {isAuthenticated ? (
          <button
          class="button-21"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
              
              
            }
          >
            {" "}
            Log Out
          </button>
        ) : (
          <button
            class="button-21"
            onClick={() => loginWithRedirect()}
            style={{
              display: "inline",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#87d5fc",
            }}
          >
            Log In
          </button>
        )}
        <li> {isAuthenticated && user.name}</li>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default Navbar;
