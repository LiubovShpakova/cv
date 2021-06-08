import PropTypes from 'prop-types';

const Project = ({ name, link, techName, role }) => {
  return (
    <li className="projects-item">
      <div className="projects-name">
        <a className="projects-link" href={link}>
          <h4 className="projects-title">{name}</h4> {link}
        </a>

        <div className="projects-skills">
          <b>[</b> <span className="tech-name">{techName}</span> <b>]</b>
        </div>
      </div>
      <div className="projects-skills">
        <span className="tech-name">{role}</span>
      </div>
    </li>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  techName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
export default Project;
