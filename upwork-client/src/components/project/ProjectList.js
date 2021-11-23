import { Link } from "react-router-dom";
import Search from "../search/Search";
import phoneImage from "../Images/phoneImage.png";
import emailImage from "../Images/emailImage1.png";

const ProjectList = (props) => {
  console.log(props.projects);
  return (
    <div class="project1">
      {props.projects &&
        props.projects.map((project) => (
          <div>
            <Link to={`project/${project._id}`}>
              <h4>{project.name}</h4>
            </Link>

            <p className="projects" key={project._id}></p>
            <h4> Job Description: </h4>
            <p> {project.description}</p>
            {project.skills && (
              <div class="skills">
                <h4> Professional Skills Required:</h4>
                {project.skills.map((skill) => (
                  <span>{`${skill} ,`}</span>
                ))}
              </div>
            )}

            <p>
              <b>Payment Type:</b> {project.paymentType}
            </p>
            <p>
              <b>Estimated Budget $ :</b> {project.estimatedBudget}
            </p>
            <p>
              <b>Date Posted:</b>
              {project.datePosted}
            </p>

            <div>
              <img
                id="phoneImage"
                src={phoneImage}
                alt={project.phone}
                height="20"
                width="20"
              />
              <span id="phone" class="contact">
                {project.phone}
              </span>
            </div>

            <div>
              <img
                id="emailImage"
                src={emailImage}
                alt={project.email}
                height="20"
                width="20"
              />
              <span id="email" class="contact" href={project.email}>
                {project.email}
              </span>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
