import React, { useState } from 'react'

function Navbar() {
    const [mode, setMode] = useState("light");
    const handleClick = () => {
        if(mode==="light"){
            setMode("dark");
            document.body.style.backgroundColor = "black";
        }
        else{
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Youtube To MP3</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                    </div>
                    <button onClick={handleClick} className={`btn btn-${mode === "light" ? "dark" : "light"}`}>{mode === "light" ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
