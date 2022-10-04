import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand link-light" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active link-light" aria-current="page" href="#">Home</a>
                <a className="nav-link link-light" href="#">About</a>
                <a className="nav-link link-light" href="#">Service</a>
                <a className="nav-link link-light" href="#">Contact</a>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;