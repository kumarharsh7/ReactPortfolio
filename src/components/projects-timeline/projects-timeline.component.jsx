import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import quiz_app_img from "../../assets/img/projects/quiz_app-img.jpg";
import TechHire_img from "../../assets/img/projects/TechHire-img.jpg";
import password_generator_img from "../../assets/img/projects/password_generator-img.jpg";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            className="text-center"
            text="Tech Hire"
            src={TechHire_img}
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A job portal web app. It
                        fetches jobs data from Github Jobs API
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/kumarharsh7/TechHire/"
                  target="_blank"
                >
                  Github Repo
                </UrlButton>
                <UrlButton href="https://techhire.netlify.app" target="_blank">
                  Live Website
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            className="text-center"
            text="Quiz App"
            src={quiz_app_img}
            alt="Quiz App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a quiz app that
                        displays questions and shows correctly answered
                        questions based on responses given by user
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/kumarharsh7/quiz_app/"
                  target="_blank"
                >
                  Github Repo
                </UrlButton>
                <UrlButton
                  href="https://kumarharsh7.github.io/quiz_app"
                  target="_blank"
                >
                  Live Website
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            className="text-center"
            text="Password Generator"
            src={password_generator_img}
            alt=""
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This web app generates a
                        random password
                        {/* <strong>Features:</strong> */}
                        <ul className="list-styles pt-1">
                          <li>Ability to decide the length of the password</li>
                          <li>
                            Ability to select what your password should entail
                            (e.g Only UpperCase alphabets,lowercase alphabets
                            and symbols, e.t.c).
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/kumarharsh7/password_generator/"
                  target="_blank"
                >
                  Github Repo
                </UrlButton>
                <UrlButton
                  href="https://kumarharsh7.github.io/password_generator"
                  target="_blank"
                >
                  Live Website
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
