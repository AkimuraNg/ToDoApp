import React from 'react'
import '../css/feature.css'

const Features = () => {
    return (
        <main className="mt-5">
            <div className="container">
                <section id="featurepage" className="featureviews">
                    <h1>Getting Started</h1>

                </section>
                <div className="row d-flex justify-content-center mb-4">
                    <div className="col-md-8">
                        <p>Before we go to the application, let me introduce you to some features of this application</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h4 className="my-4">Create a list</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam,
                            aperiam minima
                            assumenda deleniti hic.</p>
                        <img className="featuresImage" src={require("../image/list-check.svg").default} alt="feature1" />
                    </div>

                    <div className="col-md-4 mb-1">
                        <h4 className="my-4">Edit and Delete</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam,
                            aperiam minima
                            assumenda deleniti hic.</p>
                        <img className="featuresImage" src={require("../image/pencil-square.svg").default} alt="feature1" />
                    </div>

                    <div className="col-md-4 mb-1">
                        <h4 className="my-4">Drag and Drop</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maiores nam,
                            aperiam minima
                            assumenda deleniti hic.</p>
                        <img className="featuresImage" src={require("../image/1.jpg").default} alt="feature1" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Features
