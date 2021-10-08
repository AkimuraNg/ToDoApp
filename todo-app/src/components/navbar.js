import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 smooth-scroll">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="intropage">
                <div className="container-fluid align-items-center justify-content-center h-100">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-md-10">
                            <h1 className="pt-5">Hello There</h1>
                            <p>Welcome to the to do app</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar