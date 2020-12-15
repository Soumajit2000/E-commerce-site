import React from "react"

export default function Team() {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <div class="card-group">
          <div class="card mx-2 my-2 ">
            <img
              src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="card-img-top"
              alt="Harry"
            />
            <div class="card-body border ">
              <h5 class="card-title">Harry</h5>
              <p class="card-text mx-2">
                Harry has been working in the company for 6 years now. He
                handles the back end of the company's website. He is a very
                dedicated to his work and also very committed to the company.He
                has won the "Employee of the year" for 2 times in a row.
                Currently he is the CEO of the company"
              </p>
            </div>
          </div>
          <div class="card mx-2 my-2">
            <img
              src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="card-img-top"
              alt="Ronald"
            />
            <div class="card-body border">
              <h5 class="card-title">Ronald</h5>
              <p class="card-text mx-2 ">
                Hailing from the Univerity of Oxford, Ronald, the Deputy Manager
                started as an intern to the company. But soon cemented his
                position in the company due to his consistent performance and
                commitment to his work. He has stepped up the ladder of success
                in no time. He handles the information security and product
                review.
              </p>
            </div>
          </div>
          <div class="card my-2">
            <img
              src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="card-img-top"
              alt="Angelina"
            />
            <div class="card-body border">
              <h5 class="card-title">Angelina</h5>
              <p class="card-text">
                Her work is as elegant and flawless as her look. One of the
                youngest in the company, Angelina handles the front end and
                asthetics of the company's product. Apart for her professional
                career, she is also a very fine artist. She has won "Best
                portfolio award" recently. She is currently the HR of the
                company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
