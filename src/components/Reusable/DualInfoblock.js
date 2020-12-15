import React from "react"
import Heading from "./Heading"

export default function DualInfoblock({ heading, source }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-lg-8 col-md-12 mx-auto">
            {/*
            xs = Extra small <576px. Max container width None (auto)
            sm = Small ≥576px. Max container width 540px.
            md = Medium ≥768px. Max container width 720px.
            lg = Large ≥992px. Max container width 960px.
            xl = Extra large ≥1200px. Max container width 1140px. 
          */}
            <div className="lead text-white mb-5 message">
              <p>
                “When you grow up you tend to get told that the world is the way
                it is and your life is just to live your life inside the world.
                Try not to bash into the walls too much. Try to have a nice
                family life, have fun, save a little money."
              </p>
              <p>
                "That’s a very limited life. Life can be much broader once you
                discover one simple fact: Everything around you that you call
                life was made up by people that were no smarter than you. And
                you can change it, you can influence it… Once you learn that,
                you’ll never be the same again."
              </p>
              <p>
                "Don't let the noise of others' opinions drown out your own
                inner voice. And most important, have the courage to follow your
                heart and intuition. Your time is limited, so don't waste it
                living someone else's life. Don't be trapped by dogma - which is
                living with the results of other people's thinking."
              </p>
              <p>
                "Don't let the noise of others' opinions drown out your own
                inner voice. And most important, have the courage to follow your
                heart and intuition.”
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div class="card bg-dark mx-4">
              <img src={source} class="card-img-top" alt="Image goes here" />
              <div class="card-body">
                <h5 class="card-title text-danger">Our Team</h5>
                <p class="card-text text-white">
                  The teams involved worked on projects in product development,
                  sales, operations, finance, R&D, senior management, and more,
                  in a wide range of industries, including software,
                  professional services, manufacturing, natural resources, and
                  consumer products. In addition, we have conducted executive
                  education sessions on team effectiveness for thousands of team
                  leaders and members; their stories and experiences have also
                  shaped our thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
