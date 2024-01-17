import React, { useState } from "react";
import "./Faqs.css";
import { Link } from "react-router-dom";

function Faqs() {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const handleToggle = () => {
  //   setIsExpanded(!isExpanded);
  // };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Frequently Asked Questions</h1>
      </div>

      <div className="row p-3">
        {/* <div className="col-md-12"> */}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="row p-4">
              <div class="col-sm-12 accordion_one">
                <h5 className="h3 mb-0 text-gray-800 mb-4">
                  Frequently Asked Questions and Answers
                </h5>

                <div class="accordion" id="faqExample">
                  <div class="card mb-3">
                    <div
                      class="card-header faq-sec p-2"
                      id="headingOne"
                    >
                      <h5
                        class="mb-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Q: How does this work ?
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#faqExample"
                    >
                      <div class="card-body">
                        <b>Answer:</b> It works using the Bootstrap 4 collapse
                        component with cards to make a vertical accordion that
                        expands and collapses as questions are toggled.
                      </div>
                    </div>
                  </div>

                  <div class="card mb-3">
                    <div
                      class="card-header faq-sec p-2"
                      id="headingTwo"
                    >
                      <h5 class="mb-0">
                        <h5
                          class="mb-0"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Q: What is Event ?
                        </h5>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#faqExample"
                    >
                      <div class="card-body">
                        Bootstrap is the most popular CSS framework in the
                        world. The latest version released in 2018 is Bootstrap
                        4. Bootstrap can be used to quickly build responsive
                        websites.
                      </div>
                    </div>
                  </div>

                  <div class="card mb-3">
                    <div
                      class="card-header faq-sec p-2"
                      id="headingThree"
                    >
                      <h5
                        class="mb-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Q. What is another question?
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqExample"
                    >
                      <div class="card-body">
                        The answer to the question can go here.
                      </div>
                    </div>
                  </div>

                  <div class="card mb-3">
                    <div
                      class="card-header faq-sec p-2"
                      id="headingFour"
                    >
                      <h5
                        class="mb-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Q. What is the next question?
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      class="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#faqExample"
                    >
                      <div class="card-body">
                        The answer to this question can go here. This FAQ
                        example can contain all the Q/A that is needed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
