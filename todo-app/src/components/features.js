import React from 'react'
import '../css/feature.css'

const Features = () => {
    return (
        <main className="mt-5 features">
            <div className="container">
                <section id="featurepage" className="featureviews">
                    <h1 style={{ color: "white" }}>Getting Started</h1>

                </section>
                <div className="row d-flex justify-content-center mb-4">
                    <div className="col-md-8">
                        <p>Before we go to the application, let me introduce you to some features of this application</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h4 className="my-4" style={{ color: "white" }}>Create your own task</h4>
                        <p>You can create your own list of tasks without worrying about the limit. The number of tasks are unlimited.</p>
                        <img className="featuresImage" src={require("../image/list-check.svg").default} alt="feature1" />
                    </div>

                    <div className="col-md-4 mb-5">
                        <h4 className="my-4" style={{ color: "white" }}>Edit and Delete</h4>
                        <p>You can modify your task with edit or delete buttons.
                            <br /> With edit button, you can update your own tasks without changing the order.
                            <br /> With delete button, you can delete your tasks when you finish the task.
                        </p>
                        <img className="featuresImage" src={require("../image/pencil-square.svg").default} alt="feature1" />
                        <img className="featuresImage" src={require("../image/x-circle.svg").default} alt="feature1" style={{ marginLeft: 10 }} />
                    </div>

                    <div className="col-md-4 mb-5">
                        <h4 className="my-4" style={{ color: "white" }}>Hide unfinished items</h4>
                        <p>When you have tasks that is unfinished yet do not want to delete it, you can click on the words and it will be hidden.
                            The tasks still there but it will be dashed so you can see.
                            <br />You can still using the edit and delete function even when the task is hidden.
                        </p>
                        <img className="featuresImage" src={require("../image/bookmark-dash.svg").default} alt="feature1" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Features
