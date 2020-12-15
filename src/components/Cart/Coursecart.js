import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"
import { node } from "prop-types"

export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
    }
  }
  render() {
    // console.log(this.state.courses)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 mx-auto display-flex my-2"
                >
                  <Img fixed={node.image.fixed} />
                  <div className="flow-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-success">${node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small className="mx-3">
                        {node.description.description}
                      </small>
                    </p>
                    <button className="btn btn-warning">Join Now</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
