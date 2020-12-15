import React from "react"
import Heading from "./Heading"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Most of the online education platforms are focusing on skills such
              as critical thinking and adaptability, which are important for
              success in the future. These key factors also play an important
              role in the success of online learning platforms. We predict new
              learning methods such as live broadcasts and virtual reality
              experiences will replace traditional in-person classroom learning.
              This way, learning could become a habit in our daily routines – a
              true lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
