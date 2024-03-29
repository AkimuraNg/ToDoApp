import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-scroll'
// create Navigation bar, with three items
const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="intropage" style={{ cursor: "pointer", color: "red" }}>HOME</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 smooth-scroll">
                            <li className="nav-item">
                                <Link className="nav-link" to="featurepage" style={{ cursor: "pointer", color: "yellow" }}>Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="todopage" style={{ cursor: "pointer", color: "yellow" }}>To do</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="intropage" className="introview">
                <div className="container-fluid align-items-center justify-content-center h-100">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-md-10">
                            <h1>Welcome to this todo app</h1>
                            <p>For introduction, my name is Duy Nguyen the creator of this todo application.
                                <br />This is the simple application with few features. Future update will comes soon.
                                <br />You can learn more about the features of this application below.
                            </p>
                            <h2>Contact Information:</h2>
                            <p>Email: hoangnhatduy.nguyen@tuni.fi</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
