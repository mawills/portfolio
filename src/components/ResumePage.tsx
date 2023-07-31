import { useEffect } from "react";
import pdfIcon from "../images/pdf.png";
import "../style/Resume.css";

const Resume = () => {
  useEffect(() => {
    document.title = "Matt Wills | Resume";
    return () => {
      document.title = "Matt Wills";
    };
  }, []);

  return (
    <div className="resume-container">
      <div className="resume-pdf-link">
        <img src={pdfIcon} alt="PDF icon" title="PDF icon" />
        <a
          href="https://drive.google.com/file/d/1QMo52IkK6ffeVwwLZCrtpds3E-vzQJK9/view?usp=drive_link"
          target="_blank"
        >
          Would you like a .pdf version? Click here.
        </a>
      </div>
      <div className="resume-header">
        <h1>Matt Wills</h1>
        <p>
          email:{" "}
          <a href="mailto: mattwillscode@gmail.com" target="_blank">
            mattwillscode@gmail.com
          </a>{" "}
          | phone: 517-243-0005 | github:{" "}
          <a href="https://github.com/mawills" target="_blank">
            https://github.com/mawills
          </a>
        </p>
      </div>
      <div className="resume-body">
        <div className="section">
          <h2>Experience</h2>
          <div className="job-experience">
            <div className="job-experience-header">
              <strong>Rocket Mortgage - Software Engineer</strong>
              <i>September 2020 - August 2023</i>
            </div>
            <p>
              Lead front-end developer on a team responsible for services that
              handle mortgage applications.
            </p>
            <ul>
              <li>
                Tech lead for numerous projects with direct client impact, such
                as reducing page load time on high-traffic pages by as much as 2
                seconds and high priority production bugs.
              </li>
              <li>
                Built many new components in the PHP frontend, such as an email
                referral service, a credit payment experience, and services to
                more easily allow clients to contact their banker and access
                loan information.
              </li>
              <li>
                Mentor for several new developers, and set up meetings with them
                to assist with onboarding and troubleshooting and to listen to
                their feedback about our process and their career goals. Also
                created an open forum for the team's developers to discuss ideas
                together.
              </li>
            </ul>
          </div>
          <div className="job-experience">
            <div className="job-experience-header">
              <strong>Ford Motor Company - Contract Software Engineer</strong>
              <i>March 2020 - July 2020</i>
            </div>
            <p>
              Lead developer for the Ford self-help portals at{" "}
              <a href="https://help.ford.com/" target="_blank">
                https://help.ford.com/
              </a>{" "}
              and{" "}
              <a href="https://help.lincoln.com/" target="_blank">
                https://help.lincoln.com
              </a>{" "}
              on a short-term contract. Team utilizes a metrics-driven approach
              to prioritization and a test-driven approach to development.
            </p>
            <ul>
              <li>
                Built the team's CI in Jenkins, including separate hosted
                environments for each pull request.
              </li>
              <li>
                Led several large code refactors to improve code quality and to
                take better advantage of Typescript.
              </li>
              <li>
                Implemented language internationalization and drove initiatives
                for other accessibility-related improvements.
              </li>
              <li>
                Pushed for improvements for security practices by setting up CI
                to securely inject secrets and creating unique API keys for
                different teams.
              </li>
              <li>
                Improved communication by creating a process for announcing
                breaking changes, setting up meetings with other team members to
                gather feedback, and creating Slack channels for
                closely-integrated teams.
              </li>
            </ul>
          </div>
          <div className="job-experience">
            <div className="job-experience-header">
              <strong>Barracuda - Full Stack Software Engineer</strong>
              <i>March 2018 - March 2020</i>
            </div>
            <p>
              Responsible for the maintenance of APIs for a database serving
              54.9k requests per minute average, in addition to handling user
              authentication, a web portal, and a navigation wrapper used by
              customers and numerous development teams within the company.
            </p>
            <ul>
              <li>
                Built an application for Oauth2 authorization, OpenID
                authentication, and session management on top of the Laravel PHP
                framework.
              </li>
              <li>
                Refactored legacy PHP project into a React application with
                object-oriented code and a focus on keeping 100% test coverage.
              </li>
              <li>
                Tech stack also provided some experience with AWS, Jenkins,
                Docker, MySQL, Microsoft Azure, SumoLogic, NewRelic, and
                Salesforce.
              </li>
            </ul>
          </div>
          <div className="job-experience">
            <div className="job-experience-header">
              <strong>HDS Marketing - Web Developer</strong>
              <i>February 2017 - February 2018</i>
            </div>
            <p>
              Develop and maintain applications and web stores for clients to
              distribute branded merchandise.
            </p>
            <ul>
              <li>
                Managed content through a proprietary platform and WordPress.
              </li>
              <li>
                Excelled in a small team environment with an emphasis on
                self-reliance.
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <h2>Projects</h2>
          <p>
            Under construction! Check out the linked PDF for the full resume.
          </p>
        </div>
        <div className="section">
          <h2>Education</h2>
          <p>
            Under construction! Check out the linked PDF for the full resume.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
