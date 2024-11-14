import React from "react";

const Ask = ({ setContactUs}) => {
  return (
    <section className="section" id="ask">
      <div className="container">
        <div className="row row-relative">
          <div className="col-12">
            <div className="question">
              <h2 className="question__title">
                Any questions
              </h2>
              <p className="question__title">
                We have a support team.
              </p>

              <div className="section__btns section__btns--mt">
                <button className="section__btn section__btn--light" onClick={() => setContactUs(true)}> Ask a question</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Ask;