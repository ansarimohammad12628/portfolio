import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import signature from "../assets/Image/png/signature.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className="nav-wrapper">
      <div className={`nav-container ${open ? "expand" : ""}`}>
        <div className="signature-image">
          <img src={signature} alt="" />
        </div>

        <div className={`nav-menu ${open ? "active" : ""}`}>
          <Link to="home" smooth duration={500} onClick={handleClose}>
            Story
          </Link>

          <Link to="about" smooth duration={500} onClick={handleClose}>
            About
          </Link>

          <Link to="skills" smooth duration={500} onClick={handleClose}>
            Skills
          </Link>

          <Link to="projects" smooth duration={500} onClick={handleClose}>
            Projects
          </Link>
          <a
            href="/portfolio/Mohammad_Mustafa_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <Link
            className="sayHi text-light"
            to="contact"
            smooth
            duration={500}
            onClick={handleClose}
          >
            Say Hi
          </Link>
        </div>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <HiMenu />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
